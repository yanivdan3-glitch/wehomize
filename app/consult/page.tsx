export default function ConsultPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-bold">קביעת פגישת ייעוץ אונליין</h1>
      <div className="rounded-2xl bg-white p-5 shadow-sm space-y-4">
        <label className="block">
          <div className="text-sm mb-1">בחר מומחה</div>
          <select className="rounded-xl border px-3 py-2">
            <option>אדריכלית יעל</option>
            <option>מעצב פנים רון</option>
          </select>
        </label>
        <label className="block">
          <div className="text-sm mb-1">בחר תאריך ושעה</div>
          <input type="datetime-local" className="rounded-xl border px-3 py-2" />
        </label>
        <a href="#" className="inline-block px-4 py-2 rounded-xl border">לתשלום</a>
      </div>
    </div>
  );
}
