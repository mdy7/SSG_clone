'use client'

import React from 'react';

import PhotoReview from '@/components/widgets/PhotoReview';
import SmallArrowIcon from '@/images/svgs/SmallArrowIcon';

export default function ReviewImageList({ openModal }:any) {
  
  return (
    <div className='w-full h-auto mt-5 px-4'>
      <div className='w-full h-[21px] mb-4 flex justify-between items-center'>
        <span className='font-bold'>포토 리뷰</span>
        <span className='flex text-xs whitespace-nowrap text-gray-400' onClick={openModal}>더보기<span>(60)</span>
          <div className='w-[16px] h-[14px]'>
            <SmallArrowIcon />
          </div>
        </span>
      </div>
      <PhotoReview openModal={openModal} />
    </div>
  )
}
