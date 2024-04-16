import React from 'react';

import GoBack from '@/components/ui/GoBack';
import AdImage from '@/components/layouts/AdImage';
import ProductDetailNavToolBar from './ProductDetailNavToolBar';
import ProductDetailCarousel from './ProductDetailCarousel';
import ProductDetailPriceInfo from './ProductDetailPriceInfo';
import ProductDetailReviewInfo from './ProductDetailReviewInfo';
import ProductDetailDeliveryInfo from './ProductDetailDeliveryInfo';
import getProductBrandData from '@/app/api/product/getProductBrandData';
import getProductImageData from '@/app/api/product/getProductImageData';
import getProductData from '@/app/api/product/getProductData';
import { detailProductType } from '@/types/detailProductType';
import { productImageType } from '@/types/productImageType';
import { productBrandType } from '@/types/productBrandType';

export default async function ProductDetailTop({
  params,
}: {
  params: { productId: number };
}) {
  const productData: detailProductType = await getProductData(params.productId) as detailProductType;
  const brandData: productBrandType = await getProductBrandData(params.productId) as productBrandType;
  const imgData: productImageType[] = await getProductImageData(params.productId) as productImageType[];

  return (
    <>
      <ProductDetailNavToolBar reviewCnt={60} qnaCnt={5} />
      <div className="z-[500] w-6 absolute py-0 mx-4 top-[70px]">
        <GoBack />
      </div>
      <ProductDetailCarousel alt={'productData.name'} images={imgData} />
      <ProductDetailPriceInfo
        brand={brandData.brandName}
        title={productData.name}
        price={productData.price}
        discount={productData.discount}
      />
      <div className="mx-[10px] my-0">
        <AdImage
          src={
            'https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/product/mndtl_universe_type_banner07.png&w=750'
          }
          alt="유니버스클럽"
          width={670}
          height={166}
        />
      </div>
      <ProductDetailReviewInfo reviewRate={4.9} reviewCnt={0} />
      <ProductDetailDeliveryInfo />
    </>
  );
}
