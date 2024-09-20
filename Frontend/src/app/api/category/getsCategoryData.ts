import { commonResType } from "@/types/commonResType";

const getSCategoryData = async (ctgId: number) => {
  try {
    'use server'
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/category/${ctgId}/small`, { cache: 'no-cache' });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const sCtgData: commonResType = await response.json();
    return sCtgData.data;
  } catch (error) {
    console.error('Error:', error);
  }
};

export default getSCategoryData;