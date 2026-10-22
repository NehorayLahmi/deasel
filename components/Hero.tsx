import { ShieldCheck, Clock, BadgeCheck, Phone, MessageCircle } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { buildTelLink, buildWhatsAppLink, BUSINESS } from "@/lib/constants";

const TRUST_BADGES = [
  { icon: ShieldCheck, label: "אחריות ללא הגבלת זמן" },
  { icon: Clock, label: "זמינות וטיפול מהיר" },
  { icon: BadgeCheck, label: "גיבוי מלא לקובץ המקורי" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-950 via-brand-900 to-brand-800 py-10 text-white sm:py-16">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand-400 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="animate-fadeUp space-y-6 text-right">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-sm font-bold text-accent-light ring-1 ring-accent/40">
            <span className="h-2 w-2 animate-pulseSoft rounded-full bg-accent" />
            הרכב במצב הספירה לאחור? יש פתרון מיידי
          </span>

          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            תקלת אוריאה (AdBlue) ברכב?
            <br />
            <span className="text-brand-200">הספירה לאחור להשבתה החלה?</span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-brand-100 sm:text-xl">
            פתרון תוכנתי סופי ומקצועי לביטול מערכת האוריאה —{" "}
            <strong className="text-white">1,800–2,500 ש&quot;ח בלבד</strong>, לעומת
            אלפי שקלים על החלפת חלקים במוסך היבואן. ללא נסיעה למוסך, ללא השבתת
            הרכב לימים.
          </p>

          <ul className="flex flex-wrap gap-3">
            {TRUST_BADGES.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 rounded-xl bg-white/10 px-3.5 py-2 text-sm font-medium ring-1 ring-white/15"
              >
                <Icon className="h-4 w-4 text-brand-200" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`שליחת הודעת וואטסאפ אל ${BUSINESS.ownerName}`}
              className="flex items-center justify-center gap-2 rounded-xl bg-success px-6 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-success/40"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              וואטסאפ מיידי
            </a>
            <a
              href={buildTelLink()}
              aria-label={`חיוג ישיר למספר ${BUSINESS.phoneDisplay}`}
              className="flex items-center justify-center gap-2 rounded-xl bg-white/10 px-6 py-4 text-lg font-bold text-white ring-1 ring-white/30 transition hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/30"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>

        <div id="lead-form" className="animate-fadeUp">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
