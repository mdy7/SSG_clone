import InfinityProductList from "@/components/infinityProduct/InfinityProductList";
import ProductList from "@/components/layouts/ProductList";
import CategoryProductListTopBanner from "@/components/pages/category/CategoryProductListTopBanner";

export default async function CategoryProductListPage() {


  return (
    <div className="min-h-screen">
      <CategoryProductListTopBanner />
      <div className="col-start-2 col-end-auto">
        {/* <div className="text-xs flex ps-4 pe-4 pt-3">
          <div className="font-bold">~개</div>
          <div className="text-gray-500">의 상품이 있습니다.</div>
        </div> */}
        {/* <ProductList /> */}
        <InfinityProductList />
      </div>
    </div>
  )
}