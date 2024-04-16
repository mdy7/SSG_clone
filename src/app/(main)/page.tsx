import { getServerSession } from "next-auth";

import { options } from "../api/auth/[...nextauth]/options";
// import TopHeader from "@/components/layouts/TopHeader";
// import BottomHeader from "@/components/layouts/BottomHeader";
import MainEventSection from "@/components/pages/main/MainEventSection";
import MainShortcutSection from "@/components/pages/main/MainShortcutSection";
import ProductListTitle from "@/components/layouts/ProductListTitle";
import LCategoryProductList from "@/components/layouts/LCategoryProductList";
import InfinityProductList from "@/components/infinityProduct/InfinityProductList";

export default async function Home() {

  // const session = await getServerSession(options)
  // console.log(session, 'main page session')
  // console.log(session?.user?.token)

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