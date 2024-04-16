import MainEventSection from "@/components/pages/main/MainEventSection";
import MainShortcutSection from "@/components/pages/main/MainShortcutSection";
import ProductListTitle from "@/components/layouts/ProductListTitle";
import LCategoryProductList from "@/components/layouts/LCategoryProductList";

export default async function Home() {
  return (
    <main className="min-h-[100vh]">
      <MainEventSection />
      <MainShortcutSection />
      <section>
        <ProductListTitle />
        <LCategoryProductList />
      </section>
    </main>
  );
}