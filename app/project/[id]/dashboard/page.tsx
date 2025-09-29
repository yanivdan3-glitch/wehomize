export default function ProjectDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">דשבורד פרויקט #123</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <div className="font-semibold mb-2">שלבים</div>
          <ul className="text-sm list-disc pr-5 space-y-1">
            <li>תכנון</li>
            <li>רכש</li>
            <li>ביצוע</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <div className="font-semibold mb-2">משימות</div>
          <ul className="text-sm list-disc pr-5 space-y-1">
            <li>פגישה עם מעצב</li>
            <li>השוואת הצעות מחיר</li>
            <li>תשלום מקדמה</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <div className="font-semibold mb-2">מסמכים</div>
          <p className="text-sm text-gray-600">כתב כמויות, חוזים, שרטוטים…</p>
        </div>
      </div>
    </div>
  );
}
