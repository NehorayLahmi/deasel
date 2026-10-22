import { Mail, Phone, Wrench } from "lucide-react";
import { BUSINESS, buildTelLink } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink pb-24 pt-12 text-slate-300 sm:pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-700 text-white">
                <Wrench className="h-4 w-4" aria-hidden="true" />
              </span>
              <p className="font-bold text-white">{BUSINESS.siteName}</p>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              פתרון תוכנתי מקצועי לביטול מערכת האוריאה (AdBlue) ברכבים פרטיים
              ומסחריים, עם אחריות ושקיפות מלאה.
            </p>
          </div>

          <div>
            <p className="mb-3 font-bold text-white">דרכי התקשרות</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={buildTelLink()}
                  className="flex items-center gap-2 transition hover:text-white"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-2 transition hover:text-white"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {BUSINESS.email}
                </a>
              </li>
              <li className="text-slate-400">בעל העסק: {BUSINESS.ownerName}</li>
            </ul>
          </div>

          <div>
            <p className="mb-3 font-bold text-white">מדיניות ומסמכים</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/privacy" className="transition hover:text-white">
                  מדיניות פרטיות
                </a>
              </li>
              <li>
                <a href="/terms" className="transition hover:text-white">
                  תקנון ותנאי שימוש
                </a>
              </li>
              <li>
                <a href="/accessibility" className="transition hover:text-white">
                  הצהרת נגישות
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
          <p>
            © {year} {BUSINESS.siteName}. כל הזכויות שמורות ל{BUSINESS.ownerName}.
          </p>
        </div>
      </div>
    </footer>
  );
}
