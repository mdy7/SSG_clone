import React from 'react';

import ProductDetailTop from '@/components/pages/productDetail/ProductDetailTop';
import ProductDetailContent from '@/components/pages/productDetail/ProductDetailContent';
import ProductDetailBottom from '@/components/pages/productDetail/ProductDetailBottom';
import PurchaseToolBar from '@/components/ui/PurchaseToolBar';
import getProductOptionsAvailable from '@/app/api/product/getProductOptionsAvailable';
import { productOptionsAvailableType } from '@/types/productOptionAvailableType';

interface selectedOptionType {
  colorId?: string,
  sizeId?: string,
  addOptionId?: string,
}

export default async function ProductDetailPage({
  params,
}: {
  params: { productId: number };
}) {
  const productOptiondata: productOptionsAvailableType =
    await getProductOptionsAvailable(params.productId) as productOptionsAvailableType;


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
  }

  return (
    <>
      <ProductDetailTop params={params} />
      <ProductDetailContent params={params} />
      <ProductDetailBottom />
      <PurchaseToolBar
        params={params}
        selectedOptionProductId={0}
        getOptionList={getOptionList}
        productOptionData={productOptiondata}
      />
    </>
  );
}
