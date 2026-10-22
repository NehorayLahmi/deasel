import { PhoneCall, ScanSearch, Code2, PartyPopper } from "lucide-react";

const STEPS = [
  {
    icon: PhoneCall,
    title: "פנייה ראשונית",
    description: "משאירים פרטים או פונים בוואטסאפ, ומקבלים מחיר מדויק לפי דגם הרכב.",
  },
  {
    icon: ScanSearch,
    title: "אבחון ובדיקה",
    description: "חיבור מחשב אבחון לרכב ובדיקת מערכת האוריאה והתקלה הקיימת.",
  },
  {
    icon: Code2,
    title: "עדכון תוכנה",
    description: "גיבוי הקובץ המקורי וביצוע עדכון תוכנתי לביטול מערכת האוריאה.",
  },
  {
    icon: PartyPopper,
    title: "סיום ובדיקת כביש",
    description: "בדיקת תקינות מלאה, איפוס תקלות ומסירת הרכב עם אחריות תוכנה.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="bg-slate-50 py-14 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="how-it-works-heading"
            className="text-2xl font-headline text-ink sm:text-3xl"
          >
            איך מתבצע התהליך?
          </h2>
          <p className="mt-3 text-slate-600">תהליך פשוט ושקוף, מהפנייה ועד לרכב תקין</p>
        </div>

        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, description }, index) => (
            <li
              key={title}
              className="relative rounded-2xl bg-white p-6 text-right shadow-sm ring-1 ring-slate-100"
            >
              <span className="absolute -top-3 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                {index + 1}
              </span>
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mb-2 font-bold text-ink">{title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
