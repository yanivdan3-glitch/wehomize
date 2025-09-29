export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold mb-2">WeHomize — ה‑MVP חי</h1>
        <p className="text-gray-600">בחרי אחד המסכים למטה. הנתונים נטענים מקבצי CSV אמיתיים בתיקיית public/data.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/project/new" className="px-4 py-2 rounded-xl border">התחל פרויקט</a>
          <a href="/marketplace" className="px-4 py-2 rounded-xl border">מוצרים</a>
          <a href="/professionals" className="px-4 py-2 rounded-xl border">אנשי מקצוע</a>
          <a href="/suppliers" className="px-4 py-2 rounded-xl border">ספקים</a>
        </div>
      </section>
    </div>
  );
}
