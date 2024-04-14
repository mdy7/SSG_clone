import React from 'react';

import CartIcon from '@/images/svgs/CartIcon';
import { productDataType } from '@/types/productDataType';
import HeartIcon from '../../images/svgs/HeartIcon';

export default function Product({
  id,
  src,
  brand,
  name,
  subtitle,
  price
}: productDataType
) {
  
  return (
    <div>
      <div className='relative pt-[0.625rem] pb-5 mx-4 my-2.5'>
        <div className='relative'>
          <a
            href='#'>
            <div className='relative'>
              <div className='overflow-hidden justify-center items-center '>
                {/* <Image
                src='/images/1.jpg'
                fill={true}
                alt='name'
                objectFit='cover'
                className='will-change-auto max-w-[100%]'
                      /> */}
                <div className=' bg-slate-700 w-[100vw] h-[50vw]'></div>
              </div>
            </div>
          </a>
        </div>
        {/* --------좋아요/장바구니-------- */}
        <div className=' flex justify-between items-center pt-[0.125rem]'>
          {/* --------브랜드, 이름-------- */}
          <p className='text-ellipsis line-clamp-2 text-sm'>
            <span className='font-bold mr-1'>{brand}</span>
            {name}
          </p>
          {/* --------브랜드, 이름-------- */}
          <div className='flex justify-center'>
            <button className='inline-flex justify-center align-middle items-center w-7 h-7'>
              <div className='w-[20px] h-[20px]'>
                <HeartIcon />
              </div>
            </button>
            <button className='inline-flex justify-center items-center w-7 h-7'>
              <CartIcon />
            </button>
          </div>
        </div>
        <p className='text-ellipsis line-clamp-2 text-sm'>
          {subtitle}
        </p>
        <span className='font-bold'>{price}원~</span>
        {/* --------좋아요/장바구니-------- */}
        <a className='block mt-[0.625rem] pr-[1.25rem]'>
        </a>
      </div>
    </div>
  )
}
