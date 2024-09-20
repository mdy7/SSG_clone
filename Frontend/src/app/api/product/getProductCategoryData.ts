import { commonResType } from "@/types/commonResType";

const getProductCategoryData = async (productId: number) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/product/${productId}/category`, { cache: 'no-cache' });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const productCategoryData: commonResType = await response.json();
    return productCategoryData.data;
  } catch (error) {
    console.error('Error:', error);
  }
};

export default getProductCategoryData;