import { commonResType } from "@/types/commonResType";
const getSelectedOptionProduct = async (productId: number) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/option-selected-product/selected-options-list?product=${productId}`, { cache: 'no-cache' });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const option: commonResType = await response.json();
    return option.data;
  } catch (error) {
    console.error('Error:', error);
  }
};

export default getSelectedOptionProduct;