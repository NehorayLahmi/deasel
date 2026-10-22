"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import axios, { AxiosError } from "axios";
import { CheckCircle2, Loader2, Send, AlertCircle } from "lucide-react";
import type { LeadApiResponse, LeadPayload } from "@/types/lead";

type FieldErrors = Partial<Record<keyof LeadPayload, string>>;
type SubmitStatus = "idle" | "loading" | "success" | "error";

const INITIAL_FORM: LeadPayload = {
  name: "",
  phone: "",
  carModel: "",
};

function validateClientSide(form: LeadPayload): FieldErrors {
  const errors: FieldErrors = {};

  if (form.name.trim().length < 2) {
    errors.name = "נא להזין שם מלא (לפחות 2 תווים)";
  }

  const phoneDigits = form.phone.replace(/[\s-]/g, "");
  if (!/^0\d{8,9}$/.test(phoneDigits)) {
    errors.phone = "נא להזין מספר טלפון ישראלי תקין (לדוגמה: 0501234567)";
  }

  if (form.carModel.trim().length < 2) {
    errors.carModel = "נא להזין יצרן, דגם ושנת רכב";
  }

  return errors;
}

export default function LeadForm() {
  const [form, setForm] = useState<LeadPayload>(INITIAL_FORM);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [serverMessage, setServerMessage] = useState<string>("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name as keyof LeadPayload]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const errors = validateClientSide(form);
    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      setStatus("error");
      setServerMessage("נא לתקן את השדות המסומנים");
      return;
    }

    setStatus("loading");
    setServerMessage("");

    try {
      const response = await axios.post<LeadApiResponse>("/api/lead", form, {
        headers: { "Content-Type": "application/json" },
        timeout: 15_000,
      });

      if (response.data.success) {
        setStatus("success");
        setServerMessage(response.data.message);
        setForm(INITIAL_FORM);
      } else {
        setStatus("error");
        setServerMessage(response.data.message);
        if (response.data.errors) {
          setFieldErrors(response.data.errors);
        }
      }
    } catch (error) {
      const axiosError = error as AxiosError<LeadApiResponse>;
      const responseData = axiosError.response?.data;
      setStatus("error");
      setServerMessage(
        responseData?.message ??
          "שגיאת תקשורת, בדקו את החיבור לאינטרנט ונסו שוב"
      );
      if (responseData && !responseData.success && responseData.errors) {
        setFieldErrors(responseData.errors);
      }
    }
  }

  const isLoading = status === "loading";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-describedby="lead-form-status"
      className="w-full space-y-4 rounded-2xl bg-white p-6 shadow-card ring-1 ring-black/5 sm:p-8"
    >
      <div className="space-y-1 text-right">
        <h3 className="text-xl font-bold text-ink">השאירו פרטים לבדיקה חינם</h3>
        <p className="text-sm text-slate-500">
          נציג מקצועי יחזור אליכם עד 30 דקות בשעות הפעילות
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-slate-700"
          >
            שם מלא
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            disabled={isLoading}
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
            placeholder="לדוגמה: דני כהן"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-base text-ink placeholder:text-slate-400 transition focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/20 disabled:bg-slate-50"
          />
          {fieldErrors.name && (
            <p
              id="name-error"
              role="alert"
              className="mt-1.5 flex items-center gap-1 text-sm text-red-600"
            >
              <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              {fieldErrors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-sm font-medium text-slate-700"
          >
            מספר טלפון
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            disabled={isLoading}
            aria-invalid={Boolean(fieldErrors.phone)}
            aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
            placeholder="050-1234567"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-base text-ink placeholder:text-slate-400 transition focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/20 disabled:bg-slate-50"
          />
          {fieldErrors.phone && (
            <p
              id="phone-error"
              role="alert"
              className="mt-1.5 flex items-center gap-1 text-sm text-red-600"
            >
              <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              {fieldErrors.phone}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="carModel"
            className="mb-1.5 block text-sm font-medium text-slate-700"
          >
            דגם הרכב ושנתון
          </label>
          <input
            id="carModel"
            name="carModel"
            type="text"
            autoComplete="off"
            value={form.carModel}
            onChange={handleChange}
            disabled={isLoading}
            aria-invalid={Boolean(fieldErrors.carModel)}
            aria-describedby={fieldErrors.carModel ? "carModel-error" : undefined}
            placeholder="לדוגמה: פולקסווגן פאסאט 2019"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-base text-ink placeholder:text-slate-400 transition focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/20 disabled:bg-slate-50"
          />
          {fieldErrors.carModel && (
            <p
              id="carModel-error"
              role="alert"
              className="mt-1.5 flex items-center gap-1 text-sm text-red-600"
            >
              <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              {fieldErrors.carModel}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-accent-dark focus:outline-none focus:ring-4 focus:ring-accent/30 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isLoading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            שולח פנייה...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" aria-hidden="true" />
            קבלו הצעת מחיר עכשיו
          </>
        )}
      </button>

      <div id="lead-form-status" aria-live="polite" className="min-h-[1.5rem]">
        {status === "success" && (
          <p className="flex items-center gap-2 rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-success">
            <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />
            {serverMessage}
          </p>
        )}
        {status === "error" && serverMessage && (
          <p className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
            <AlertCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
            {serverMessage}
          </p>
        )}
      </div>

      <p className="text-center text-xs text-slate-400">
        בשליחת הטופס אתם מאשרים את{" "}
        <a href="/terms" className="underline hover:text-brand-600">
          תנאי השימוש
        </a>{" "}
        ואת{" "}
        <a href="/privacy" className="underline hover:text-brand-600">
          מדיניות הפרטיות
        </a>
      </p>
    </form>
  );
}
