import { smallCategoryType } from "@/types/smallCategoryType";

const generateSmallCategoryData = (count: number): smallCategoryType[] => {
  return Array.from({ length: count }, (_, i) => ({
    smallCategoryId: i + 1,
    smallCategoryName: `소분류 ${i + 1}`,
  }));
};

export const sCategoryDummy = generateSmallCategoryData(7);