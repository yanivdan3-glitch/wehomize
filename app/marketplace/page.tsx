import { loadCSV } from "@/lib/data";

type Item = { id: string; name: string; price: string; thumbnail?: string; };
export default async function MarketplacePage() {
  const products = await loadCSV<Item>("/data/products.csv");
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">מוצרים ושירותים</h1>
        <input placeholder="חיפוש..." className="rounded-xl border px-3 py-2 text-sm w-60" />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map(p => (
          <a key={p.id} href={`/marketplace/${p.id}`} className="rounded-2xl bg-white shadow-sm p-3 hover:shadow">
            <img src={p.thumbnail || "/placeholder.png"} alt="" className="w-full rounded-xl aspect-video object-cover bg-gray-100" />
            <div className="mt-3 font-semibold">{p.name}</div>
            <div className="text-sm text-gray-600">{Number(p.price || 0).toLocaleString()} ₪</div>
          </a>
        ))}
      </div>
    </div>
  );
}
