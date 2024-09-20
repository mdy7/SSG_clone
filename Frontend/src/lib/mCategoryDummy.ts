import { middleCategoryType } from "@/types/middleCategoryType";

const generateMiddleCategoryData = (count: number): middleCategoryType[] => {
  return Array.from({ length: count }, (_, i) => ({
    mediumCategoryId: i + 1,
    mediumCategoryName: `중분류 ${i + 1}`,
  }));
};

export const mCategoryDummy  = generateMiddleCategoryData(8);

