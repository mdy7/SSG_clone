import { commonResType } from "@/types/commonResType";

const getProductData = async (productId: number) => {
  try {
    'use server'
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/product/${productId}`, { cache: 'no-cache' });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const productData: commonResType = await response.json();
    return productData.data;
  } catch (error) {
    console.error('Error:', error);
  }
};

export default getProductData;