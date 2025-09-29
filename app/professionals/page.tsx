import { loadCSV, Professional } from "@/lib/data";

export default async function ProfessionalsPage() {
  const pros = await loadCSV<Professional>("/data/professionals.csv");
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">אנשי מקצוע</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {pros.map(x => (
          <a key={x.id} href={`/professionals/${x.id}`} className="rounded-2xl bg-white p-4 shadow-sm hover:shadow">
            <div className="font-semibold">{x.name}</div>
            <div className="text-sm text-gray-600">{x.role} — {x.city}</div>
            <div className="text-xs text-gray-500">⭐ {x.rating}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
