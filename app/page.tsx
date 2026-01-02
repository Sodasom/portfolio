import MainItem from "@/components/main/MainItem";

import { MAIN_ITEM_LIST } from "@/data/mainData";

export default function Home() {
  return (
    <main className="min-h-screen bg-white p-10">
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold text-point-blue">SODA, 네컷</h1>
      </header>
      <div className="relative hidden lg:flex lg:flex-wrap">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-black" />
          <div className="absolute top-1/2 left-0 w-full h-px -translate-y-1/2 bg-black" />
        </div>
        {MAIN_ITEM_LIST.map((item) => (
          <div key={item.id} className="w-1/2">
            <MainItem {...item} />
          </div>
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        {MAIN_ITEM_LIST.map((item) => (
          <div key={item.id} className="border-b border-black">
            <MainItem {...item} />
          </div>
        ))}
      </div>
    </main>
  );
}
