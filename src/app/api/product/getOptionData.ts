import { commonResType } from '@/types/commonResType';

const getOptionData = async (productId: number, optionType: string) => {
  try {
    'use server'
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/product/${productId}/${optionType}`,
      { cache: 'no-cache' }
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const optionData: commonResType = await response.json();
    return optionData.data;
  } catch (error) {
    console.error('Error:', error);
  }
};

export default getOptionData;
