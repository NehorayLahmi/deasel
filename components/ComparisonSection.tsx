import { Check, X } from "lucide-react";

const DEALER_POINTS = [
  "החלפת חיישנים ומשאבת אוריאה מקורית במחירי יבואן",
  "עלות כוללת של 5,000–12,000 ש״ח ויותר",
  "השבתת הרכב למספר ימים עד הגעת חלקים",
  "אין ודאות שהתקלה לא תחזור בעתיד",
];

const SOFTWARE_POINTS = [
  "ביטול מלא ומקצועי של מערכת האוריאה בתוכנה",
  "עלות קבועה של 1,800–2,500 ש״ח בלבד",
  "הטיפול מתבצע באותו היום, ללא השבתה",
  "אחריות תוכנה ללא הגבלת זמן על העבודה",
];

export default function ComparisonSection() {
  return (
    <section
      id="comparison"
      aria-labelledby="comparison-heading"
      className="bg-slate-50 py-14 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="comparison-heading"
            className="text-2xl font-extrabold text-ink sm:text-3xl"
          >
            החלפת חלקים במוסך היבואן, או פתרון תוכנה חכם?
          </h2>
          <p className="mt-3 text-slate-600">
            בדקו בעצמכם את ההבדל בעלות, בזמן ובתוצאה הסופית
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-red-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="mb-5 flex items-center gap-2 text-lg font-bold text-red-600">
              <X className="h-5 w-5" aria-hidden="true" />
              החלפת חלקים במוסך היבואן
            </h3>
            <ul className="space-y-3">
              {DEALER_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-slate-600">
                  <X
                    className="mt-0.5 h-5 w-5 shrink-0 text-red-400"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-2xl border-2 border-brand-600 bg-white p-6 shadow-card sm:p-8">
            <span className="absolute -top-3 right-6 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
              מומלץ
            </span>
            <h3 className="mb-5 flex items-center gap-2 text-lg font-bold text-brand-700">
              <Check className="h-5 w-5" aria-hidden="true" />
              הפתרון התוכנתי שלנו
            </h3>
            <ul className="space-y-3">
              {SOFTWARE_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-slate-700">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-success"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
