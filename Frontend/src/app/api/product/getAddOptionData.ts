import { commonResType } from "@/types/commonResType";

const getAddOptionList = async (productId: string) => {
  try {
    'use server'
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/product/${productId}/add-option`, { cache: 'no-cache' });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const addOptionData: commonResType = await response.json();
    return addOptionData.data;
  } catch (error) {
    console.error('Error:', error);
  }
};

export default getAddOptionList;