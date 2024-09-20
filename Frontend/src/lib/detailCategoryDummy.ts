import { detailCategoryType } from "@/types/detailCategoryType";

const generateDetailCategoryData = (count: number): detailCategoryType[] => {
  return Array.from({ length: count }, (_, i) => ({
    detailCategoryId: i + 1,
    detailCategoryName: `상세분류 ${i + 1}`,
  }));
};

export const detailCategoryData = generateDetailCategoryData(6);