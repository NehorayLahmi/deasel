import { NextRequest, NextResponse } from "next/server";
import axios, { AxiosError } from "axios";
import type {
  LeadApiResponse,
  LeadPayload,
} from "@/types/lead";

export const runtime = "nodejs";

const PHONE_REGEX = /^0\d{8,9}$/;

function sanitize(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, 200);
}

function validatePayload(body: unknown): {
  valid: boolean;
  data: LeadPayload;
  errors: Partial<Record<keyof LeadPayload, string>>;
} {
  const errors: Partial<Record<keyof LeadPayload, string>> = {};
  const record = (body ?? {}) as Record<string, unknown>;

  const name = sanitize(record.name);
  const phone = sanitize(record.phone).replace(/[\s-]/g, "");
  const carModel = sanitize(record.carModel);

  if (!name || name.length < 2) {
    errors.name = "נא להזין שם מלא תקין";
  }

  if (!phone || !PHONE_REGEX.test(phone)) {
    errors.phone = "נא להזין מספר טלפון ישראלי תקין";
  }

  if (!carModel || carModel.length < 2) {
    errors.carModel = "נא להזין דגם ושנת רכב";
  }

  return {
    valid: Object.keys(errors).length === 0,
    data: { name, phone, carModel },
    errors,
  };
}

function escapeMarkdown(text: string): string {
  return text.replace(/([_*[\]()~`>#+\-=|{}.!])/g, "\\$1");
}

function buildTelegramMessage(lead: LeadPayload): string {
  const timestamp = new Date().toLocaleString("he-IL", {
    timeZone: "Asia/Jerusalem",
  });

  return [
    "🚨 *פנייה חדשה \\- ביטול אוריאה בתוכנה*",
    "",
    `👤 *שם:* ${escapeMarkdown(lead.name)}`,
    `📞 *טלפון:* ${escapeMarkdown(lead.phone)}`,
    `🚗 *רכב:* ${escapeMarkdown(lead.carModel)}`,
    "",
    `🕒 ${escapeMarkdown(timestamp)}`,
  ].join("\n");
}

export async function POST(request: NextRequest): Promise<NextResponse<LeadApiResponse>> {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "גוף הבקשה אינו JSON תקין" },
      { status: 400 }
    );
  }

  const { valid, data, errors } = validatePayload(body);

  if (!valid) {
    return NextResponse.json(
      {
        success: false,
        message: "נא לתקן את השדות המסומנים ולנסות שוב",
        errors,
      },
      { status: 400 }
    );
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error(
      "Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID environment variables"
    );
    return NextResponse.json(
      { success: false, message: "שגיאת שרת פנימית, נסו שוב מאוחר יותר" },
      { status: 500 }
    );
  }

  try {
    await axios.post(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        chat_id: chatId,
        text: buildTelegramMessage(data),
        parse_mode: "MarkdownV2",
      },
      { timeout: 10_000 }
    );

    return NextResponse.json(
      { success: true, message: "הפנייה נשלחה בהצלחה, נחזור אליך בהקדם" },
      { status: 200 }
    );
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error(
      "Failed to forward lead to Telegram:",
      axiosError.response?.data ?? axiosError.message
    );

    return NextResponse.json(
      { success: false, message: "שגיאה בשליחת הפנייה, נסו שוב מאוחר יותר" },
      { status: 500 }
    );
  }
}

export async function GET(): Promise<NextResponse> {
  return NextResponse.json(
    { success: false, message: "Method Not Allowed" },
    { status: 405 }
  );
}
