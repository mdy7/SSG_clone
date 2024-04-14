export interface optionListType {
  id: number;
  name: string;
  isChecked: boolean;
}

export interface productOptionDataType {
  optionSelectedProductId: number;
  productId: number;
  productName: string;
  productPrice: number;
  productDiscount: number;
  colorOptionId: number;
  color: string;
  sizeOptionId: number;
  size: string;
  addOptionId: number;
  addOption: string;
  stock: number;
}
