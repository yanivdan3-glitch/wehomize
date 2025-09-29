import { parseCSV, Row } from "./csv";

export type Professional = {
  id: string; name: string; role: string; subrole: string; city: string;
  service_areas: string; rating: string; phone: string; email: string; website: string;
  price_range_min: string; price_range_max: string; tags: string;
};

export type Supplier = {
  id: string; name: string; category: string; subcategories: string; city: string;
  delivery: string; phone: string; email: string; website: string; tags: string;
};

export type Product = {
  id: string; name: string; category: string; subcategory: string; brand: string; sku: string;
  unit: string; price: string; price_currency: string; thumbnail: string; image_url: string;
  tags: string; supplier_id: string;
};

async function fetchText(path: string): Promise<string> {
  const res = await fetch(path, { cache: "no-store" });
  if (!res.ok) return "";
  return res.text();
}

export async function loadCSV<T = Row>(path: string): Promise<T[]> {
  const text = await fetchText(path);
  return parseCSV(text) as T[];
}
