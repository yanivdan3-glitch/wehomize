import { loadCSV, Supplier } from "@/lib/data";

export default async function SuppliersPage() {
  const suppliers = await loadCSV<Supplier>("/data/suppliers.csv");
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">ספקים</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {suppliers.map(x => (
          <a key={x.id} href={`/suppliers/${x.id}`} className="rounded-2xl bg-white p-4 shadow-sm hover:shadow">
            <div className="font-semibold">{x.name}</div>
            <div className="text-sm text-gray-600">{x.category} — {x.city}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
