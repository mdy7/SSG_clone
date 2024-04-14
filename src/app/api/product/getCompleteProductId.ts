import { commonResType } from "@/types/commonResType";
const getCompleteProductId = async (productId: number) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/option-selected-product/${productId}`, { cache: 'no-cache' });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const item: commonResType = await response.json();
    return item.data;
  } catch (error) {
    console.error('Error:', error);
  }
};

export default getCompleteProductId;