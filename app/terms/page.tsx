import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `תקנון ותנאי שימוש | ${BUSINESS.siteName}`,
  description: "תקנון ותנאי השימוש בשירות ביטול אוריאה בתוכנה לרכב.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="תקנון ותנאי שימוש" updatedAt="22 באוקטובר 2026">
      <section aria-labelledby="general-heading">
        <h2 id="general-heading" className="text-lg font-bold text-ink">
          1. כללי
        </h2>
        <p>
          השימוש באתר {BUSINESS.siteName} ובשירותי ביטול האוריאה בתוכנה
          (&quot;השירות&quot;), המופעלים על ידי {BUSINESS.ownerName}
          (&quot;בעל העסק&quot;), מהווה הסכמה מלאה לתנאים המפורטים בתקנון זה.
          אם אינך מסכים/ה לתנאי התקנון, הנך מתבקש/ת לא לעשות שימוש בשירות.
        </p>
      </section>

      <section aria-labelledby="scope-heading">
        <h2 id="scope-heading" className="text-lg font-bold text-ink">
          2. מהות השירות
        </h2>
        <p>
          השירות הניתן הוא עדכון תוכנתי במחשב הרכב (ECU) לביטול מערכת האוריאה
          (AdBlue/SCR), הכולל אבחון, גיבוי מלא של הקובץ המקורי וביצוע העדכון
          התוכנתי באמצעות ציוד צריבה מקורי. השירות אינו כולל תיקון מכני של
          רכיבי המערכת (חיישנים, משאבות, צנרת) אלא פתרון תוכנתי בלבד.
        </p>
      </section>

      <section aria-labelledby="pricing-heading">
        <h2 id="pricing-heading" className="text-lg font-bold text-ink">
          3. מחיר ותנאי תשלום
        </h2>
        <p>
          מחיר השירות נע בין 1,800 ל-2,500 ש&quot;ח, בהתאם לדגם, שנתון ומורכבות
          מחשב הרכב, ונמסר ללקוח מראש לפני ביצוע העבודה. המחיר הסופי ייקבע
          ויאושר עם הלקוח בטרם תחילת העבודה, ואין בפרסום טווח המחירים באתר
          התחייבות למחיר קבוע עבור כל רכב.
        </p>
      </section>

      <section aria-labelledby="warranty-heading">
        <h2 id="warranty-heading" className="text-lg font-bold text-ink">
          4. אחריות
        </h2>
        <p>
          ניתנת אחריות על התוכנה שהוטענה לרכב ללא הגבלת זמן, כל עוד לא בוצעו
          ברכב שינויי חומרה, עדכוני תוכנה נוספים על ידי גורם אחר, או התערבות
          חיצונית שאינה קשורה לעבודת בעל העסק. האחריות מוגבלת לתקלה הנובעת
          מהעדכון התוכנתי עצמו, ואינה חלה על תקלות מכניות או חשמליות אחרות
          ברכב שאינן קשורות לשירות.
        </p>
      </section>

      <section aria-labelledby="liability-heading">
        <h2 id="liability-heading" className="text-lg font-bold text-ink">
          5. הגבלת אחריות
        </h2>
        <p>
          הלקוח מאשר כי ביטול מערכת האוריאה עשוי להשפיע על עמידה בתקנות זיהום
          אוויר ורגולציה רלוונטית במדינתו, ועל תוקף אחריות היצרן הרשמית על
          הרכב. האחריות לבדיקת ההתאמה לרגולציה החלה על הלקוח, ובעל העסק אינו
          אחראי לכל נזק עקיף, תוצאתי או עונשי הנובע משימוש ברכב שעבר את העדכון,
          לרבות קנסות, פסילת רישוי או סירוב ביטוח, מעבר לגובה התשלום ששולם
          בפועל עבור השירות.
        </p>
      </section>

      <section aria-labelledby="customer-duties-heading">
        <h2 id="customer-duties-heading" className="text-lg font-bold text-ink">
          6. אחריות הלקוח
        </h2>
        <ul className="mr-5 list-disc space-y-1">
          <li>למסור פרטי רכב מדויקים (יצרן, דגם ושנתון).</li>
          <li>לוודא כי בבעלותו הסמכות החוקית לביצוע שינוי ברכב.</li>
          <li>
            לקחת בחשבון השלכות רגולטוריות ואת ההשפעה על אחריות היצרן בטרם
            מתקבלת ההחלטה לביצוע השירות.
          </li>
        </ul>
      </section>

      <section aria-labelledby="cancellation-heading">
        <h2 id="cancellation-heading" className="text-lg font-bold text-ink">
          7. ביטולים
        </h2>
        <p>
          לקוח המעוניין לבטל פגישה או הזמנה שתואמה מתבקש להודיע על כך בהקדם
          האפשרי בטלפון או בוואטסאפ. לאחר ביצוע העדכון התוכנתי בפועל לא ניתן
          לבטל את העבודה שבוצעה, מאחר שמדובר בשירות דיגיטלי שהושלם.
        </p>
      </section>

      <section aria-labelledby="ip-heading">
        <h2 id="ip-heading" className="text-lg font-bold text-ink">
          8. קניין רוחני
        </h2>
        <p>
          כל התכנים, הטקסטים והעיצוב באתר הינם רכושו הבלעדי של בעל העסק, ואין
          להעתיקם, להפיצם או לעשות בהם כל שימוש מסחרי ללא אישור מראש ובכתב.
        </p>
      </section>

      <section aria-labelledby="jurisdiction-heading">
        <h2 id="jurisdiction-heading" className="text-lg font-bold text-ink">
          9. דין וסמכות שיפוט
        </h2>
        <p>
          על תקנון זה ועל השימוש בשירות יחולו דיני מדינת ישראל בלבד, וסמכות
          השיפוט הבלעדית בכל מחלוקת תהא לבתי המשפט המוסמכים במחוז בו מתנהל
          העסק.
        </p>
      </section>

      <section aria-labelledby="terms-contact-heading">
        <h2 id="terms-contact-heading" className="text-lg font-bold text-ink">
          10. יצירת קשר
        </h2>
        <ul className="mr-5 list-disc space-y-1">
          <li>בעל העסק: {BUSINESS.ownerName}</li>
          <li>טלפון: {BUSINESS.phoneDisplay}</li>
          <li>דוא&quot;ל: {BUSINESS.email}</li>
        </ul>
      </section>
    </LegalLayout>
  );
}
