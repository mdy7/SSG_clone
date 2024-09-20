import Link from 'next/link';
import React from 'react';

import SmallArrowIcon from '@/images/svgs/SmallArrowIcon';

export default function ProductDetailReviewInfo({ reviewRate, reviewCnt }: { reviewRate: number, reviewCnt: number }) {

  const testReviewer = [
    { color: 'bg-red-500' },
    { color: 'bg-blue-500' },
    { color: 'bg-green-500' },
  ];

  return (
    <div className='flex justify-between items-center min-h-[50px] pt-[13px] pr-[18px] pb-[10px] pl-[16px] border-b-[1px] border-gray-200 box-border'>
      <div className='flex items-center min-h-[26px]'>
        <div className='relative text-sm pl-5 leading-[18px] align-middle mt-[3px]'>
          <div className='absolute w-4 h-4 top-0 left-0 bg-sp_product bg-[position:-130px_-438px] bg-[length:524px_479px]'></div>
          <em className='not-italic font-bold'>{reviewRate}</em>
        </div>
        <Link
          href={'#'}
          className='relative inline-block ml-6 text-[13px] align-middle text-gray-900 underline' >
          {reviewCnt}건 리뷰
        </Link>
        <Link
          href={'#'}
          className='relative flex items-center ml-[10px] pr-2'>
          <div className='flex flex-start flex-grow flex-shrink basis-0 -mr-[1px]'>
            {testReviewer.map((item, idx) => {
              return (
                <div key={idx} className={`z-[1] overflow-hidden relative w-[22px] h-[22px] -mr-[6.5px] rounded-full ${item.color} border-[1.5px] border-white`}></div>
              )
            })}
          </div>
        </Link>
        <div className='w-[17px] h-[17px] top-1/2 inline-block -mt-[1px] text-gray-400 right-[1px]'>
          <SmallArrowIcon />
        </div>
      </div>
    </div>
  )
}
