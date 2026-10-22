import type { Metadata } from "next";
import { Mail, Phone, User } from "lucide-react";
import LegalLayout from "@/components/LegalLayout";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `הצהרת נגישות | ${BUSINESS.siteName}`,
  description:
    "הצהרת הנגישות של שירות ביטול אוריאה בתוכנה לרכב, בהתאם לתקן הישראלי IS 5568 ו-WCAG 2.1 AA.",
};

export default function AccessibilityPage() {
  return (
    <LegalLayout title="הצהרת נגישות" updatedAt="22 באוקטובר 2026">
      <section aria-labelledby="commitment-heading">
        <h2 id="commitment-heading" className="text-lg font-bold text-ink">
          1. מחויבותנו לנגישות
        </h2>
        <p>
          אתר {BUSINESS.siteName} פועל במטרה לאפשר גישה שווה ונוחה לכלל
          המשתמשים, כולל אנשים עם מוגבלות, בהתאם לחוק שוויון זכויות לאנשים עם
          מוגבלות, התשנ&quot;ח-1998, ולתקנות נגישות השירות הנגזרות ממנו, וכן
          בהתאם לתקן הישראלי <strong>IS 5568</strong> המבוסס על הנחיות
          <strong> WCAG 2.1 בדרגה AA</strong>.
        </p>
      </section>

      <section aria-labelledby="adjustments-heading">
        <h2 id="adjustments-heading" className="text-lg font-bold text-ink">
          2. התאמות הנגישות שבוצעו באתר
        </h2>
        <ul className="mr-5 list-disc space-y-1">
          <li>תמיכה מלאה בניווט באמצעות מקלדת בכל רכיבי האתר.</li>
          <li>
            טבעת מיקוד (focus ring) ברורה ובניגודיות גבוהה לכל רכיב אינטראקטיבי.
          </li>
          <li>
            תיוג סמנטי ותכונות ARIA מתאימות לכותרות, טפסים, כפתורים ואזורי
            תוכן דינמיים.
          </li>
          <li>יחס ניגודיות צבעים עומד בדרישות הרמה AA בטקסט ובכפתורי הפעולה.</li>
          <li>
            מבנה דף היררכי עם כותרות מסודרות (H1–H3) המאפשר ניווט נכון בעזרת
            קוראי מסך.
          </li>
          <li>קישור &quot;דלג לתוכן המרכזי&quot; בראש כל עמוד למשתמשי מקלדת.</li>
          <li>טופס יצירת הקשר כולל תיוג שדות, הודעות שגיאה נגישות והכרזות חיות (aria-live).</li>
          <li>האתר מותאם לתצוגת RTL מלאה בעברית ולהגדלת טקסט בדפדפן ללא שבירת פריסה.</li>
        </ul>
      </section>

      <section aria-labelledby="scope-heading">
        <h2 id="scope-heading" className="text-lg font-bold text-ink">
          3. היקף הנגישות
        </h2>
        <p>
          הצהרה זו חלה על כלל הדפים באתר, לרבות עמוד הבית, טופס יצירת הקשר,
          ועמודי המידע המשפטי (מדיניות פרטיות, תקנון ותנאי שימוש והצהרת נגישות
          זו).
        </p>
      </section>

      <section aria-labelledby="limitations-heading">
        <h2 id="limitations-heading" className="text-lg font-bold text-ink">
          4. מגבלות ידועות
        </h2>
        <p>
          אנו פועלים באופן מתמשך לשיפור הנגישות באתר. אם נתקלת בתוכן או ברכיב
          שאינו נגיש במהלך השימוש, נבקש ליידע אותנו בפרטי הקשר המופיעים בסעיף
          הבא, ונפעל לתיקון בהקדם האפשרי.
        </p>
      </section>

      <section aria-labelledby="coordinator-heading">
        <h2 id="coordinator-heading" className="text-lg font-bold text-ink">
          5. פרטי רכז הנגישות
        </h2>
        <p>לפניות, בקשות או דיווח על בעיית נגישות באתר, ניתן לפנות לרכז הנגישות:</p>
        <ul className="mr-5 space-y-2">
          <li className="flex items-center gap-2">
            <User className="h-4 w-4 text-brand-700" aria-hidden="true" />
            <span>רכז נגישות: {BUSINESS.ownerName}</span>
          </li>
          <li className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-brand-700" aria-hidden="true" />
            <a href={`tel:${BUSINESS.phoneIntl}`} className="hover:text-brand-700">
              טלפון: {BUSINESS.phoneDisplay}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-brand-700" aria-hidden="true" />
            <a href={`mailto:${BUSINESS.email}`} className="hover:text-brand-700">
              דוא&quot;ל: {BUSINESS.email}
            </a>
          </li>
        </ul>
      </section>

      <section aria-labelledby="date-heading">
        <h2 id="date-heading" className="text-lg font-bold text-ink">
          6. תאריך עדכון ההצהרה
        </h2>
        <p>
          הצהרת נגישות זו נבדקה ועודכנה לאחרונה בתאריך 22 באוקטובר 2026, ותיבחן
          מחדש מעת לעת, לרבות בעת ביצוע שינויים מהותיים באתר.
        </p>
      </section>
    </LegalLayout>
  );
}
