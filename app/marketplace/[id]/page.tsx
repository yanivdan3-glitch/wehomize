import { loadCSV } from "@/lib/data";

type Item = { id: string; name: string; price: string; thumbnail: string; category: string; subcategory: string; };
type Props = { params: { id: string } };
export default async function ProductPage({ params }: Props) {
  const items = await loadCSV<Item>("/data/products.csv");
  const prod = items.find(x => x.id === params.id);
  if (!prod) return <div>מוצר לא נמצא</div>;
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="rounded-2xl bg-white shadow-sm p-3">
        <img src={prod.thumbnail || "/placeholder.png"} alt="" className="w-full rounded-xl aspect-video object-cover bg-gray-100" />
      </div>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{prod.name}</h1>
        <p className="text-gray-700">קטגוריה: {prod.category} / {prod.subcategory}</p>
        <div className="text-2xl font-bold">{Number(prod.price || 0).toLocaleString()} ₪</div>
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-xl border">הוסף לסל</button>
          <button className="px-4 py-2 rounded-xl border">קנה עכשיו</button>
        </div>
      </div>
    </div>
  );
}
