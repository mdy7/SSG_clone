import CategoryProductListToolBar from "@/components/pages/category/CategoryProductListToolBar";
import CategoryProductListContent from "@/components/pages/category/CategoryProductListContent";

export default async function CategoryProductListPage() {

  return (
    <div className="min-h-screen">
      <div className="contents">
        <CategoryProductListToolBar />
        <CategoryProductListContent />
      </div>
    </div>
  )
}