"use client";

import { Phone, MessageCircle } from "lucide-react";
import { buildTelLink, buildWhatsAppLink, BUSINESS } from "@/lib/constants";

export default function StickyMobileCTA() {
  return (
    <nav
      aria-label="פעולות מהירות ליצירת קשר"
      className="fixed inset-x-0 bottom-0 z-50 flex gap-3 border-t border-slate-200 bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-sm sm:hidden"
    >
      <a
        href={buildWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`שליחת הודעת וואטסאפ אל ${BUSINESS.ownerName}`}
        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-success px-4 py-3.5 text-base font-bold text-white transition active:scale-95 focus:outline-none focus:ring-4 focus:ring-success/30"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        וואטסאפ
      </a>
      <a
        href={buildTelLink()}
        aria-label={`חיוג ישיר למספר ${BUSINESS.phoneDisplay}`}
        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-700 px-4 py-3.5 text-base font-bold text-white transition active:scale-95 focus:outline-none focus:ring-4 focus:ring-brand-700/30"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        התקשרו עכשיו
      </a>
    </nav>
  );
}
