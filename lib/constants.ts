export const BUSINESS = {
  ownerName: "נהוראי לחמי",
  phoneDisplay: "053-322-5223",
  phoneRaw: "0533225223",
  phoneIntl: "+972533225223",
  email: "xr329117@gmail.com",
  siteName: "ביטול אוריאה בתוכנה",
} as const;

export const WHATSAPP_DEFAULT_TEXT =
  "היי, מופיעה אצלי תקלת אוריאה ברכב [סוג הרכב]...";

export function buildWhatsAppLink(customText?: string): string {
  const text = encodeURIComponent(customText ?? WHATSAPP_DEFAULT_TEXT);
  return `https://wa.me/${BUSINESS.phoneIntl.replace("+", "")}?text=${text}`;
}

export function buildTelLink(): string {
  return `tel:${BUSINESS.phoneIntl}`;
}
