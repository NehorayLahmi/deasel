"use client";

import { Phone, Wrench } from "lucide-react";
import { BUSINESS, buildTelLink } from "@/lib/constants";
import { notifyContactClick } from "@/lib/trackContact";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-700 text-white">
            <Wrench className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-bold text-ink sm:text-base">
              {BUSINESS.siteName}
            </p>
            <p className="text-xs text-slate-500">פתרון תוכנה מקצועי לרכב</p>
          </div>
        </div>

        <a
          href={buildTelLink()}
          onClick={() => notifyContactClick("call", "Header")}
          aria-label={`התקשרו אל ${BUSINESS.ownerName} במספר ${BUSINESS.phoneDisplay}`}
          className="flex items-center gap-2 rounded-xl bg-brand-700 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-brand-800 focus:outline-none focus:ring-4 focus:ring-brand-700/30"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">{BUSINESS.phoneDisplay}</span>
          <span className="sm:hidden">התקשרו</span>
        </a>
      </div>
    </header>
  );
}
