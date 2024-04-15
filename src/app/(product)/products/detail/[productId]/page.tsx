import React from 'react';

import ProductDetailTop from '@/components/pages/productDetail/ProductDetailTop';
import ProductDetailContent from '@/components/pages/productDetail/ProductDetailContent';
import ProductDetailBottom from '@/components/pages/productDetail/ProductDetailBottom';
import PurchaseToolBar from '@/components/ui/PurchaseToolBar';
import getProductOptionsAvailable from '@/app/api/product/getProductOptionsAvailable';
import { productOptionsAvailableType } from '@/types/productOptionAvailableType';
import getSelectedOptionProduct from '@/app/api/product/getSelectedOptionProduct';

interface selectedOptionType {
  colorId?: string,
  sizeId?: string,
  addOptionId?: string,
}

interface selectedOptionProductType {
  optionSelectedProductId: number,
  productId: number,
  productName: string,
  productPrice: number,
  productDiscount: number,
  colorOptionId: number,
  color: string,
  sizeOptionId: number,
  size: string,
  addOptionId: number,
  addOption: string,
  stock: number
}

export default async function ProductDetailPage({
  params,
}: {
  params: { productId: number };
}) {
  const productOptiondata: productOptionsAvailableType =
    await getProductOptionsAvailable(String(params.productId)) as productOptionsAvailableType;

  async function getOptionList(optionForm: FormData) {
    'use server';
    const optionData: selectedOptionType = {};

    if (productOptiondata.Color) {
      optionData.colorId = optionForm.get('color')?.toString() ?? '';
    }
    if (productOptiondata.Size) {
      optionData.sizeId = optionForm.get('size')?.toString() ?? '';
    }
    if (productOptiondata.AddOption) {
      optionData.addOptionId = optionForm.get('addOption')?.toString() ?? '';
    }
    console.log("선택한 옵션: ", optionData);
  }

  // const productList: selectedOptionProductType[] = await getSelectedOptionProduct(Number(params.productId)) as selectedOptionProductType[];

  // const randomIndex = Math.floor(Math.random() * productList.length);
  // const randomItem = productList[randomIndex];
  // const itemId = randomItem.optionSelectedProductId;
console.log(productOptiondata)
  return (
    <>
      <ProductDetailTop params={params} />
      <ProductDetailContent params={params} />
      <ProductDetailBottom />
      <PurchaseToolBar
        params={params}
        selectedOptionProductId={0}
        getOptionList={getOptionList}
        // productOptionData={productOptiondata}
      />
    </>
  );
}
