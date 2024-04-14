import React from 'react';

import SmallArrowIcon from '@/images/svgs/SmallArrowIcon';

export default function ProductDetailPriceInfo({
  brand, title, price, discount
}: {
  brand: string,
  title: string,
  price: number,
  discount: number
}) {

  const calculatedPrice = Math.round((price - (price * (discount / 100))));

  return (
    <div className='my-[15px] mx-0 px-4 py-0'>
      <h2 className='overflow-hidden break-all text-[15px] font-normal text-gray-900'>
        <div className='flex items-end flex-wrap max-h-11 min-h-[31px] overflow-hidden'>
          <div className='overflow-hidden break-all'>
            <a className='mr-[3px] text-sm font-extrabold'>
              {brand}
              <div className='inline-block w-[12px] h-[10px] pb-3'>
                <SmallArrowIcon />
              </div>
            </a>
          </div>
        </div>
        <span
          className='block break-all'
        >
          {title}
        </span>
      </h2>
      <div className='mt-[25px]'>
        {
          discount !== 0 ?
            <>
              <div>
                <div className='inline-block text-gray-500 align-middle'>
                  <del>
                    <span className='overflow-hidden absolute w-[1px] h-[1px] -mx-[1px] -my-[1px] p-0 border-0 whitespace-normal break-all'></span>
                    <em className='font-normal text-base not-italic'>{price.toLocaleString()}</em>
                    <span className='font-normal text-base'>원</span>
                  </del>
                </div>
              </div>
              <div className='flex items-center'>
                <div className='inline-block mr-[2px] font-semibold text-2xl text-rose-500 align-middle'>
                  <span className='overflow-hidden absolute w-[1px] h-[1px] -m-[1px] p-0 border-0 whitespace-normal break-all'>할인율</span>
                  <span>{discount}%</span>
                </div>
                <div className='inline-block text-gray-900 align-middle'>
                  <span className='overflow-hidden absolute w-[1px] h-[1px] -m-[1px] p-0 border-0 whitespace-normal break-all'>판매가격</span>
                  <em className='not-italic text-[26px] font-semibold'>{calculatedPrice.toLocaleString()}</em>
                  <span className='text-[26px] font-semibold'>원</span>
                </div>
              </div>
            </> :
            <>
              <div>
                <div className='inline-block text-gray-900 align-middle'>
                  <span className='overflow-hidden absolute w-[1px] h-[1px] -m-[1px] p-0 border-0 whitespace-normal break-all'>판매가격</span>
                  <em className='not-italic text-[26px] font-semibold'>{price.toLocaleString()}</em>
                  <span className='text-[26px] font-semibold'>원</span>
                </div>
              </div>
            </>
        }
      </div>
    </div>
  )
}
