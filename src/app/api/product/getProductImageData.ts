import { commonResType } from "@/types/commonResType";

const getProductImageData = async (productId: number) => {
  try {
    'use server'
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/product/${productId}/image`, { cache: 'no-cache' });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const imageData: commonResType = await response.json();
    return imageData.data;
  } catch (error) {
    console.error('Error:', error);
  }
};

export default getProductImageData;