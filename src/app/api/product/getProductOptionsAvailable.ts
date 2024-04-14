import { commonResType } from "@/types/commonResType";

const getProductOptionsAvailable = async (productId: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/product/${productId}/option-types`, { cache: 'no-cache' });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const option: commonResType = await response.json();
    return option.data;
  } catch (error) {
    console.error('Error:', error);
  }
};

export default getProductOptionsAvailable;