import { commonResType } from "@/types/commonResType";

const getProductBrandData = async (productId: number) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/product/${productId}/brand`, { cache: 'no-cache' });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const brandData: commonResType = await response.json();
    return brandData.data;
  } catch (error) {
    console.error('Error:', error);
  }
};

export default getProductBrandData;