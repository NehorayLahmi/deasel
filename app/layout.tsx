import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ביטול אוריאה בתוכנה לרכב | פתרון מקצועי ב-1,800–2,500 ש״ח",
  description:
    "תקלת אוריאה (AdBlue) ברכב? פתרון תוכנתי סופי ומקצועי לביטול מערכת האוריאה במחיר קבוע, עם גיבוי מלא ואחריות תוכנה ללא הגבלת זמן. התקשרו עכשיו: 053-322-5223.",
  keywords: [
    "ביטול אוריאה",
    "AdBlue",
    "ביטול אוריאה בתוכנה",
    "תקלת אוריאה ברכב",
    "SCR Delete",
  ],
  authors: [{ name: "נהוראי לחמי" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "ביטול אוריאה בתוכנה לרכב | פתרון מקצועי",
    description:
      "פתרון תוכנתי סופי לתקלת אוריאה (AdBlue) ברכב, במחיר קבוע של 1,800–2,500 ש״ח ועם אחריות תוכנה ללא הגבלת זמן.",
    locale: "he_IL",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#152b4c",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-link">
          דלג לתוכן המרכזי
        </a>
        {children}
      </body>
    </html>
  );
}
