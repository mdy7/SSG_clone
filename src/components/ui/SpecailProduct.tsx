import React, { useEffect, useState } from 'react';
import CartIcon from '@/images/svgs/CartIcon';
import HeartIcon from '../../images/svgs/HeartIcon';
import Link from 'next/link';
import { SpecailPriceType } from '@/types/SpecailPriceType';
import Image from 'next/image';

const getSpecailPriceData = async (specialPriceId: number) => {
  try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/special/${specialPriceId}/list`, {cache: 'no-cache'});
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // console.log(data);
      return data.data;
  } catch (error) {
      console.error('Error:', error);
  }
  
};

export default async function SpecialProduct({id}: {id: number}) {
  
  const specialPriceData:SpecailPriceType = await getSpecailPriceData(id);
  
  return (
    <div>
      <div className='relative pt-[0.625rem] pb-5 mx-4 my-2.5'>
        <Link href={`/products/specialpricedetail/${id}`}>
        <div className='relative'>
            <div className='relative'>
              <div className='overflow-hidden justify-center items-center '>
                <div className='w-[100vw] h-[55vw]'>
                  <Image
                    src={specialPriceData.thumbnailUrl}
                    layout='fill'
                    alt='name'/>
                </div>
              </div>
            </div>
        </div>
        </Link>
        <Link href={`/products/specialpricedetail/${id}`}>
        <div className=' flex justify-between items-center pt-[0.125rem]'>
          {/* --------브랜드, 이름-------- */}
          <p className='text-ellipsis line-clamp-2 text-sm'>
            {/* <span className='font-bold mr-1'>{brand}</span> */}
            {specialPriceData.title}
          </p>
          {/* --------브랜드, 이름-------- */}
          {/* --------좋아요/장바구니-------- */}
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
          {specialPriceData.subTitle}
        </p>
        <span className='font-bold'>{(specialPriceData.lowestPrice).toLocaleString()}원~</span>
        {/* --------좋아요/장바구니-------- */}
        </Link>
      </div>
    </div>
  )
}
