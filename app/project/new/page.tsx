'use client';
import { useState, useEffect } from "react";

export default function NewProjectPage() {
  const [type, setType] = useState("שיפוץ");
  const [budget, setBudget] = useState(80000);
  const [rooms, setRooms] = useState<string[]>([]);
  const [area, setArea] = useState(90);
  const [style, setStyle] = useState("מודרני");

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("wehomize-project") || "{}");
      if (saved.area) setArea(saved.area);
      if (saved.style) setStyle(saved.style);
      if (saved.budget) setBudget(saved.budget);
      if (Array.isArray(saved.selectedRooms)) setRooms(saved.selectedRooms);
    } catch {}
  }, []);

  const toggleRoom = (r: string) => {
    setRooms(p => (p.includes(r) ? p.filter(x => x !== r) : [...p, r]));
  };

  const save = () => {
    localStorage.setItem("wehomize-project", JSON.stringify({
      type, budget, selectedRooms: rooms, area, style
    }));
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="text-2xl font-bold">יצירת פרויקט</h1>

      <label className="block">
        <div className="text-sm mb-1">סוג פרויקט</div>
        <select value={type} onChange={e => setType(e.target.value)} className="rounded-xl border px-3 py-2">
          <option>שיפוץ</option>
          <option>בנייה</option>
          <option>עיצוב פנים</option>
        </select>
      </label>

      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <div className="text-sm mb-1">שטח כולל (מ״ר)</div>
          <input type="number" value={area} onChange={e => setArea(+e.target.value)} className="rounded-xl border px-3 py-2 w-40" />
        </label>
        <label className="block">
          <div className="text-sm mb-1">תקציב (₪)</div>
          <input type="number" value={budget} onChange={e => setBudget(+e.target.value)} className="rounded-xl border px-3 py-2 w-40" />
        </label>
      </div>

      <label className="block">
        <div className="text-sm mb-1">סגנון</div>
        <input value={style} onChange={e => setStyle(e.target.value)} className="rounded-xl border px-3 py-2" />
      </label>

      <div>
        <div className="text-sm mb-2">חללים</div>
        <div className="flex flex-wrap gap-2">
          {["מטבח","סלון","חדר רחצה","חדר שינה","מרפסת","חדר עבודה"].map(r => {
            const active = rooms.includes(r);
            return (
              <button key={r} onClick={() => toggleRoom(r)}
                className={"px-3 py-1 rounded-full border text-sm " + (active ? "bg-gray-900 text-white" : "")}>
                {r}
              </button>
            );
          })}
        </div>
      </div>

      <a href="/project/123/dashboard" onClick={save} className="inline-block px-4 py-2 rounded-xl border">צור פרויקט</a>
    </div>
  );
}
