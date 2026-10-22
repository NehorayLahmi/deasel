import { HardDrive, ShieldCheck, Infinity as InfinityIcon, Cpu } from "lucide-react";

const TRUST_ITEMS = [
  {
    icon: Cpu,
    title: "ציוד צריבה מקורי בלבד",
    description:
      "עבודה עם ציוד פלשינג מקורי ומאושר מבית היצרן בלבד, ללא כלים זוליים או לא מתאימים שעלולים להזיק למחשב הרכב.",
  },
  {
    icon: HardDrive,
    title: "גיבוי מלא לקובץ המקורי",
    description:
      "לפני כל עבודה מתבצע גיבוי מלא של קובץ המחשב המקורי של הרכב, כך שבכל שלב ניתן לשחזר למצב המקורי.",
  },
  {
    icon: InfinityIcon,
    title: "אחריות תוכנה ללא הגבלת זמן",
    description:
      "העבודה מגיעה עם אחריות מלאה על התוכנה ללא הגבלת זמן, כל עוד הרכב לא עבר שינויים חיצוניים נוספים.",
  },
  {
    icon: ShieldCheck,
    title: "ניסיון מוכח ואלפי רכבים",
    description:
      "טיפול מקצועי ומדויק שמתבצע על ידי בעל ניסיון רב בתחום האבחון והתוכנה לרכבי משא ופרטיים.",
  },
];

export default function TrustSection() {
  return (
    <section
      id="trust"
      aria-labelledby="trust-heading"
      className="bg-white py-14 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="trust-heading" className="text-2xl font-headline text-ink sm:text-3xl">
            בטיחות ואמינות לפני כל דבר
          </h2>
          <p className="mt-3 text-slate-600">
            כל עבודה מתבצעת בזהירות מקסימלית, עם שקיפות מלאה כלפיכם
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_ITEMS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-6 text-right transition hover:shadow-card"
            >
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-700 text-white">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mb-2 font-bold text-ink">{title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
