export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold mb-2">ברוכים הבאים ל‑WeHomize</h1>
        <p className="text-gray-600">
          המקום בו לקוחות, אנשי מקצוע וספקים נפגשים — תכנון, שיפוץ ועיצוב הבית במקום אחד.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/project/new" className="px-4 py-2 rounded-xl border">התחל פרויקט</a>
          <a href="/marketplace" className="px-4 py-2 rounded-xl border">קנה מוצרים</a>
          <a href="/professionals" className="px-4 py-2 rounded-xl border">מצא איש מקצוע</a>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-4">
        {["AI Planner", "מרקטפלייס מוצרים", "ייעוץ אונליין"].map((t, i) => (
          <div key={i} className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="font-semibold mb-2">{t}</div>
            <p className="text-sm text-gray-600">טקסט דמה. החלף בהסבר קצר + CTA.</p>
          </div>
        ))}
      </section>
    </div>
  );
}
