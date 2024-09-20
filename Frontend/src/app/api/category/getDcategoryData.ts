import { commonResType } from "@/types/commonResType";

const getDCategoryData = async (ctgId: number) => {
  try {
    'use server'
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/category/${ctgId}/tiny`, { cache: 'no-cache' });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const dCtgData: commonResType = await response.json();
    return dCtgData.data;
  } catch (error) {
    console.error('Error:', error);
  }
};

export default getDCategoryData;