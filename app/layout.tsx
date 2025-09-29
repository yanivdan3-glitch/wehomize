import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WeHomize MVP",
  description: "WeHomize — MVP UI (Next.js + Tailwind + RTL)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        <header className="border-b bg-white">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="font-bold text-xl">WeHomize</div>
            <nav className="flex flex-wrap gap-4 text-sm">
              <a href="/" className="hover:underline">בית</a>
              <a href="/marketplace" className="hover:underline">מוצרים</a>
              <a href="/professionals" className="hover:underline">אנשי מקצוע</a>
              <a href="/suppliers" className="hover:underline">ספקים</a>
              <a href="/project/new" className="hover:underline">פרויקט חדש</a>
              <a href="/planner" className="hover:underline">אשף תכנון</a>
              <a href="/consult" className="hover:underline">ייעוץ אונליין</a>
            </nav>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
