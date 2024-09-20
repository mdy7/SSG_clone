import { commonResType } from "@/types/commonResType";

const getLCategoryData = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/category/large`, { cache: 'no-cache' });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const lCtgData: commonResType = await response.json();
    return lCtgData.data;
  } catch (error) {
    console.error('Error:', error);
  }
};

export default getLCategoryData;