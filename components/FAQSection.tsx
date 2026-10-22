"use client";

import { useState, KeyboardEvent } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "האם ביטול האוריאה בתוכנה הוא חוקי?",
    answer:
      "העדכון התוכנתי מיועד לשימוש בתנאים שבהם המערכת המקורית אינה פועלת כתקנה. מומלץ לבדוק את הרגולציה הרלוונטית במדינתכם ואת תנאי השימוש ברכב לפני ביצוע השינוי.",
  },
  {
    question: "האם זה פוגע באחריות היצרן על הרכב?",
    answer:
      "כל שינוי תוכנתי במחשב הרכב עשוי להשפיע על אחריות היצרן הרשמית. אנו מבצעים גיבוי מלא לקובץ המקורי כך שבמקרה הצורך ניתן לשחזר את הרכב למצבו המקורי.",
  },
  {
    question: "כמה זמן לוקח הטיפול?",
    answer:
      "ברוב הדגמים הטיפול המלא, כולל אבחון, גיבוי ועדכון תוכנה, נמשך כשעה עד שעתיים בלבד, ללא צורך להשאיר את הרכב למספר ימים.",
  },
  {
    question: "מה כולל המחיר?",
    answer:
      "המחיר כולל אבחון מלא, גיבוי קובץ מקורי, עדכון תוכנה לביטול מערכת האוריאה, איפוס תקלות ואחריות תוכנה ללא הגבלת זמן על העבודה שבוצעה.",
  },
  {
    question: "מה קורה אם התקלה חוזרת?",
    answer:
      "העבודה מגיעה עם אחריות תוכנה ללא הגבלת זמן. אם מתעוררת תקלה הקשורה לעדכון שבוצע, נשוב ונטפל בכך ללא עלות נוספת.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle(index);
    }
  }

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-white py-14 sm:py-20"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <h2 id="faq-heading" className="text-2xl font-headline text-ink sm:text-3xl">
            שאלות נפוצות
          </h2>
          <p className="mt-3 text-slate-600">כל מה שרציתם לדעת לפני שמתחילים</p>
        </div>

        <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div key={item.question}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                    className="flex w-full items-center justify-between gap-3 px-5 py-4 text-right text-base font-semibold text-ink transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-brand-500/20 sm:px-6"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`h-5 w-5 shrink-0 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-5 pb-4 text-sm leading-relaxed text-slate-600 sm:px-6"
                >
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
