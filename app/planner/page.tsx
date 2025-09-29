'use client';
import { useState } from "react";

export default function PlannerPage() {
  const [answers, setAnswers] = useState({ area: 90, style: "מודרני", budget: 80000 });

  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-bold">אשף תכנון חכם (AI)</h1>
      <div className="rounded-2xl bg-white p-5 shadow-sm space-y-4">
        <label className="block">
          <div className="text-sm mb-1">מ"ר</div>
          <input type="number" value={answers.area} onChange={e => setAnswers(a => ({...a, area:+e.target.value}))} className="rounded-xl border px-3 py-2 w-40" />
        </label>
        <label className="block">
          <div className="text-sm mb-1">סגנון</div>
          <input value={answers.style} onChange={e => setAnswers(a => ({...a, style:e.target.value}))} className="rounded-xl border px-3 py-2" />
        </label>
        <label className="block">
          <div className="text-sm mb-1">תקציב (₪)</div>
          <input type="number" value={answers.budget} onChange={e => setAnswers(a => ({...a, budget:+e.target.value}))} className="rounded-xl border px-3 py-2 w-40" />
        </label>
      </div>
      <div className="rounded-2xl bg-white p-5 shadow-sm">
        <div className="font-semibold mb-2">הצעת תוכנית</div>
        <p className="text-sm text-gray-700">כאן נשייך מאוחר יותר קריאה ל‑API של AI.</p>
      </div>
    </div>
  );
}
