import { NextRequest, NextResponse } from "next/server";
import axios, { AxiosError } from "axios";
import type {
  ContactClickApiResponse,
  ContactChannel,
  ContactClickPayload,
} from "@/types/contactClick";

export const runtime = "nodejs";

const VALID_CHANNELS: ContactChannel[] = ["call", "whatsapp"];

const CHANNEL_LABEL: Record<ContactChannel, string> = {
  call: "📞 חיוג ישיר",
  whatsapp: "💬 וואטסאפ",
};

function sanitize(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, 120);
}

function escapeMarkdown(text: string): string {
  return text.replace(/([_*[\]()~`>#+\-=|{}.!])/g, "\\$1");
}

function validatePayload(body: unknown): {
  valid: boolean;
  data: ContactClickPayload;
} {
  const record = (body ?? {}) as Record<string, unknown>;
  const channel = sanitize(record.channel) as ContactChannel;
  const source = sanitize(record.source) || "לא צוין";

  return {
    valid: VALID_CHANNELS.includes(channel),
    data: { channel, source },
  };
}

function buildTelegramMessage(payload: ContactClickPayload): string {
  const timestamp = new Date().toLocaleString("he-IL", {
    timeZone: "Asia/Jerusalem",
  });

  return [
    `${CHANNEL_LABEL[payload.channel]} *לחיצה חדשה על כפתור יצירת קשר*`,
    "",
    `📍 *מיקום בעמוד:* ${escapeMarkdown(payload.source)}`,
    `🕒 ${escapeMarkdown(timestamp)}`,
  ].join("\n");
}

export async function POST(
  request: NextRequest
): Promise<NextResponse<ContactClickApiResponse>> {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "גוף הבקשה אינו JSON תקין" },
      { status: 400 }
    );
  }

  const { valid, data } = validatePayload(body);

  if (!valid) {
    return NextResponse.json(
      { success: false, message: "ערוץ יצירת קשר לא תקין" },
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
      { success: false, message: "שגיאת שרת פנימית" },
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

    return NextResponse.json({ success: true, message: "נשלח" }, { status: 200 });
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error(
      "Failed to forward contact click to Telegram:",
      axiosError.response?.data ?? axiosError.message
    );

    return NextResponse.json(
      { success: false, message: "שגיאה בשליחת ההתראה" },
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
