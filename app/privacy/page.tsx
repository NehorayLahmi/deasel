import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `מדיניות פרטיות | ${BUSINESS.siteName}`,
  description: "מדיניות הפרטיות של שירות ביטול אוריאה בתוכנה לרכב.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="מדיניות פרטיות" updatedAt="22 באוקטובר 2026">
      <section aria-labelledby="intro-heading">
        <h2 id="intro-heading" className="text-lg font-bold text-ink">
          1. כללי
        </h2>
        <p>
          מדיניות פרטיות זו מפרטת כיצד {BUSINESS.siteName} (&quot;השירות&quot;,
          &quot;אנחנו&quot;), בבעלות {BUSINESS.ownerName}, אוסף, משתמש ומגן על
          המידע האישי שלך בעת השימוש באתר ובטופס השארת הפרטים. השימוש באתר מהווה
          הסכמה לתנאי מדיניות זו.
        </p>
      </section>

      <section aria-labelledby="collection-heading">
        <h2 id="collection-heading" className="text-lg font-bold text-ink">
          2. איזה מידע אנו אוספים
        </h2>
        <p>במסגרת טופס &quot;השאירו פרטים&quot; אנו אוספים את הפרטים הבאים בלבד:</p>
        <ul className="mr-5 list-disc space-y-1">
          <li>שם מלא</li>
          <li>מספר טלפון</li>
          <li>דגם ושנת הרכב</li>
        </ul>
        <p>
          בנוסף, בעת הגלישה באתר נאסף מידע טכני סטנדרטי (כגון סוג מכשיר ודפדפן)
          לצרכי תפעול ואבטחת האתר בלבד.
        </p>
      </section>

      <section aria-labelledby="usage-heading">
        <h2 id="usage-heading" className="text-lg font-bold text-ink">
          3. כיצד אנו משתמשים במידע
        </h2>
        <p>
          הפרטים שאתה משאיר בטופס מועברים באופן מיידי ומאובטח לבעל העסק באמצעות
          מערכת הודעות פנימית (Telegram), ומשמשים לצורך יצירת קשר, תיאום פגישה
          ומתן הצעת מחיר לשירות ביטול אוריאה בתוכנה. איננו עושים כל שימוש אחר
          במידע, ואיננו מוכרים או משכירים אותו לצד שלישי.
        </p>
      </section>

      <section aria-labelledby="retention-heading">
        <h2 id="retention-heading" className="text-lg font-bold text-ink">
          4. שמירת מידע ואבטחה
        </h2>
        <p>
          הפרטים הנשלחים מהטופס נשמרים אך ורק במערכת ההודעות הפנימית של בעל
          העסק, לצורך מעקב וטיפול בפנייה. אנו נוקטים באמצעי אבטחה סבירים
          (הצפנת תעבורה HTTPS, הגבלת גישה) כדי להגן על המידע מפני גישה, שינוי
          או חשיפה לא מורשים. עם זאת, לא ניתן להתחייב לאבטחה מושלמת בסביבה
          מקוונת.
        </p>
      </section>

      <section aria-labelledby="sharing-heading">
        <h2 id="sharing-heading" className="text-lg font-bold text-ink">
          5. שיתוף מידע עם צדדים שלישיים
        </h2>
        <p>
          המידע שאתה מוסר אינו מועבר לצדדים שלישיים למטרות מסחריות. העברת
          הנתונים לפלטפורמת Telegram נעשית לצורך תפעולי בלבד — קבלת ההתראה על
          הפנייה החדשה אצל בעל העסק.
        </p>
      </section>

      <section aria-labelledby="rights-heading">
        <h2 id="rights-heading" className="text-lg font-bold text-ink">
          6. זכויותיך בפרטיות
        </h2>
        <p>על פי חוק הגנת הפרטיות, התשמ&quot;א-1981, הנך זכאי/ת:</p>
        <ul className="mr-5 list-disc space-y-1">
          <li>לדעת אילו פרטים נשמרו עליך.</li>
          <li>לבקש לעיין במידע שנמסר על ידך.</li>
          <li>לבקש תיקון או מחיקה של המידע שנמסר.</li>
          <li>לבקש הפסקת כל שימוש במידע לצורך פנייה חדשה.</li>
        </ul>
        <p>
          לממש זכויות אלה ניתן לפנות אלינו באמצעות הפרטים בסעיף 8 להלן, ונפעל
          למענה בתוך זמן סביר.
        </p>
      </section>

      <section aria-labelledby="cookies-heading">
        <h2 id="cookies-heading" className="text-lg font-bold text-ink">
          7. עוגיות (Cookies)
        </h2>
        <p>
          האתר עשוי להשתמש בעוגיות טכניות בסיסיות לצורך תפעול תקין של האתר בלבד.
          אין באתר שימוש בעוגיות פרסום או מעקב של צדדים שלישיים.
        </p>
      </section>

      <section aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="text-lg font-bold text-ink">
          8. יצירת קשר
        </h2>
        <p>לשאלות או בקשות בנוגע לפרטיותך, ניתן לפנות אלינו:</p>
        <ul className="mr-5 list-disc space-y-1">
          <li>בעל העסק: {BUSINESS.ownerName}</li>
          <li>טלפון: {BUSINESS.phoneDisplay}</li>
          <li>דוא&quot;ל: {BUSINESS.email}</li>
        </ul>
      </section>
    </LegalLayout>
  );
}
