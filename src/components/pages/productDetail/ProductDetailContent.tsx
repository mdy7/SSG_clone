import React from 'react';

import ProductDetailInfoTitle from './ProductDetailInfoTitle';
import ProductDetailInfoContent from './ProductDetailInfoContent';
import ReviewTotalScore from '@/components/ui/Review/ReviewTotalScore';
import ReviewImageList from '../review/ReviewImageList';
import ReviewSimple from '../review/ReviewSimple';
import ShowMoreButton from '@/components/ui/ShowMoreButton';
import ProductDetailQnA from './ProductDetailQnA';
import ProductDetailCategoryInfo from './ProductDetailCategoryInfo';
import getProductData from '@/app/api/product/getProductData';
import { detailProductType } from '@/types/detailProductType';

export default async function ProductDetailContent({ params }: { params: { productId: number } }) {
  
  const productData: detailProductType = await getProductData(params.productId) as detailProductType;

  return (
    <>
      <section id='detail' className='border-t-[15px]'>
        <ProductDetailInfoTitle title={"상세정보"} />
        <ProductDetailInfoContent
          id={productData.id}
          content={productData.content} />
      </section>
      <section id='review' className='border-t-[15px] pb-10'>
        <ProductDetailInfoTitle title={"고객리뷰"} />
        <ReviewTotalScore />
        <ReviewImageList />
        <ReviewSimple productId = {params.productId}/>
        <ShowMoreButton
          title='더보기'
          count={60} />
      </section>
      <section id='qna' className='border-t-[15px] pb-10'>
        <ProductDetailInfoTitle title={"Q&A 문의"} />
        <ProductDetailQnA />
        <ShowMoreButton
          title='Q&A 문의 전체보기'
          count={'5'} />
      </section>
      <section>
        <ProductDetailCategoryInfo params={params}/>
      </section>
    </>
  )
}
