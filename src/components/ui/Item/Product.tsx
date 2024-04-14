'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ReviewStat from './ReviewStat'
import { brandType } from '@/types/brandType';
import { productType } from '@/types/productType';

const getproductBrandData = async (productId: number) => {
    
  try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/product/${productId}/brand`, {cache: 'no-cache'});
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const brandData = await response.json();
      // console.log(brandData);
      return brandData.data;
  } catch (error) {
      console.error('Error:', error);
  }
  
};

const getproductData = async (productId: number) => {
    
  try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/product/${productId}`, {cache: 'no-cache'});
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const productData = await response.json();
      // console.log(productData);
      return productData.data;
  } catch (error) {
      console.error('Error:', error);
  }
  
};

export default function Product({id}: {id: number}) {
  const [brandName, setBrandName] = useState<brandType | null>(null);
  const [productData, setProductData] = useState<productType | null>(null);

  useEffect(() => {
    getproductBrandData(id).then(data => {
      setBrandName(data);
    });
    getproductData(id).then(data => {
      setProductData(data);
    });
  }, [id]);

  if (!brandName || !productData) {
    return <div>Loading...</div>;
  }

  const calculatedPrice = Math.round((productData.price - (productData.price * (productData.discount / 100))));
  return (
    <div>
      <Link href={`/products/detail/${id}`} className='block mt-[0.625rem] pr-[1.25rem]'>
          {/* --------브랜드, 이름-------- */}
          <p className='text-ellipsis line-clamp-2 text-sm'>
            <span className='font-bold'>{brandName.brandName} </span>
            {productData.name}
          </p>
          {/* --------브랜드, 이름-------- */}
          {productData.discount === null ? (
            <div className='flex flex-col'>
              <em className='mt-0 -me-0 mb-0 ms-[0.25rem] not-italic font-semibold'>
                <span className='border-0 w-[1px] h-[1px] -my-px -mx-px px-0 py-0 overflow-hidden whitespace-nowrap absolute'>판매가격</span>
                {productData.price}원
              </em>
            </div>
          ) : (
            <div className='mt-[0.25rem]'>
              <div className='flex flex-col'>
                <del className='block text-xs text-gray-500'>
                  <span className='border-0 h-[1px] w-[1px] -my-px -mx-px p-0 overflow-hidden absolute whitespace-nowrap'>정상가격</span>
                  {productData.price}원
                </del>
                <div className='mt-[0.125rem] mb-0 flex flex-row'>
                  <em className='block font-semibold text-base not-italic text-red-500'>
                    <span className='border-0 w-[1px] h-[1px] -my-px -mx-px px-0 py-0 overflow-hidden whitespace-nowrap absolute '>할인율</span>
                    {productData.discount}
                    %
                  </em>
                  <em className='mt-0 -me-0 mb-0 ms-[0.25rem] font-semibold not-italic'>
                    <span className='border-0 w-[1px] h-[1px] -my-px -mx-px px-0 py-0 overflow-hidden whitespace-nowrap absolute'>판매가격</span>
                    {calculatedPrice.toLocaleString()}원
                  </em>
                </div>
              </div>
            </div>
           )}
          <ReviewStat />
        </Link>
    </div>
  )
}
