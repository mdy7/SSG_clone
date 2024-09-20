import { commonResType } from "@/types/commonResType";

const getSizeOptionList = async (productId: string) => {
  try {
    'use server'
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/product/${productId}/size`, { cache: 'no-cache' });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const sizeOptionData: commonResType = await response.json();
    return sizeOptionData.data;
  } catch (error) {
    console.error('Error:', error);
  }
};

export default getSizeOptionList;