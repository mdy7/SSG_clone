import React from 'react';

import HeartIcon from '@/images/svgs/HeartIcon';
import { productDataType } from '@/types/productDataType';

export default function OptionProduct({
  id,
  src,
  store,
  brand,
  name,
  price,
  sale,
  salePrice,
  reviewRating,
  reviewCount
}: productDataType
) {
  return (
    <div>
      <div className='relative pt-[0.625rem] pb-5 mx-4 my-2.5 border-t-2'>
        <div><span className='text-ellipsis line-clamp-2 text-[11px] font-bold mr-1 mb-1'>상품 02</span></div>
        <div className='relative flex'>
          <a
            href='#' className='mr-3'>
            <div className='relative'>
              <div className='overflow-hidden justify-center items-center'>
                {/* <Image
                        src={src}
                        fill
                        alt='name'
                        objectFit='cover'
                        className='will-change-auto max-w-[100%]'
                      /> */}
                <div className=' bg-slate-700 w-[175.2px] h-[175.2px]'></div>
              </div>
            </div>
          </a>
          <a className='block mt-[0.625rem] pr-[1.25rem]'>
            {/* --------브랜드, 이름-------- */}
            <p className='text-ellipsis line-clamp-2 text-[13px]'>
              <span className='font-bold mr-1'>{brand}</span>
              {name}
            </p>
            {/* --------브랜드, 이름-------- */}
            {sale === null ? (
              <div className='flex flex-col'>
                <em className='mt-0 -me-0 mb-0 ms-[0.25rem] not-italic font-semibold'>
                  <span className='border-0 w-[1px] h-[1px] -my-px -mx-px px-0 py-0 overflow-hidden whitespace-nowrap absolute'>판매가격</span>
                  {price}원
                </em>
              </div>
            ) : (
              <div className='mt-[0.25rem]'>
                <div className='flex flex-col'>
                  <del className='block text-xs text-gray-500'>
                    <span className='border-0 h-[1px] w-[1px] -my-px -mx-px p-0 overflow-hidden absolute whitespace-nowrap'>정상가격</span>
                    {price}
                    원
                  </del>
                  <div className='mt-[0.125rem] mb-0 flex flex-row'>
                    <em className='block font-semibold text-base not-italic text-red-500'>
                      <span className='border-0 w-[1px] h-[1px] -my-px -mx-px px-0 py-0 overflow-hidden whitespace-nowrap absolute '>할인율</span>
                      {sale}
                      %
                    </em>
                    <em className='mt-0 -me-0 mb-0 ms-[0.25rem] font-semibold not-italic'>
                      <span className='border-0 w-[1px] h-[1px] -my-px -mx-px px-0 py-0 overflow-hidden whitespace-nowrap absolute'>판매가격</span>
                      {salePrice}원
                    </em>
                  </div>
                </div>
              </div>
            )}
            <div className='flex flex-row items-center text-xs mt-1 whitespace-nowrap text-gray-400'>
              ★
              <p className='mt-0 me-0 mb-0 ms-1'>
                <span className='border-0 w-[1px] h-[1px] -my-px -mx-px px-0 py-0 overflow-hidden whitespace-nowrap absolute'>리뷰 별점</span>
                {reviewRating}
                <span className='border-0 w-[1px] h-[1px] -my-px -mx-px px-0 py-0 overflow-hidden whitespace-nowrap absolute'>점</span>
              </p>
              <div className='w-[1px] h-[11px] pr-2'></div>
              <p>
                <span className='border-0 w-[1px] h-[1px] -my-px -mx-px px-0 py-0 overflow-hidden whitespace-nowrap absolute'>리뷰 갯수</span>
                {reviewCount}건
              </p>
            </div>
          </a>
        </div>
        {/* --------좋아요-------- */}
        <div className='flex justify-between items-center'>
          <div className='text-[11px] text-ellipsis line-clamp-2'>42개 남음</div>
          <div className=' flex justify-end items-center pt-[0.125rem] pb-[0.125rem] '>
            <button className='inline-flex justify-center items-center w-[144.4px] h-8 border-black border-2 text-[13px] text-ellipsis line-clamp-2 mr-1'><span>상품 선택하기</span></button>
            <button className='inline-flex justify-center align-middle items-center w-7 h-7'>
              <div className='w-[20px] h-[20px]'>
                <HeartIcon />
              </div>
            </button>
          </div>
        </div>
        {/* --------좋아요-------- */}
      </div>
    </div>
  )
}
``