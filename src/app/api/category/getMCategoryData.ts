import { commonResType } from "@/types/commonResType";

const getMCategoryData = async (ctgId: number) => {
  try {
    'use server'
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/category/${ctgId}/medium`, { cache: 'no-cache' });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const mCtgData: commonResType = await response.json();
    return mCtgData.data;
  } catch (error) {
    console.error('Error:', error);
  }
};

export default getMCategoryData;