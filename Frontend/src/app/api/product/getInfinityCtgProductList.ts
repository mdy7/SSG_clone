import { commonResType } from "@/types/commonResType";

const getInfinityCtgProductList = async (
  apiType: string,
  productId: number,
  page: number
) => {
  try {
    'use server'
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/product/${apiType}/${productId}?page=${page}`, { cache: "no-cache" });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const infinityProduct: commonResType = await response.json();
    return infinityProduct.data;
  } catch (error) {
    console.error('Error:', error);
  }
};

export default getInfinityCtgProductList;