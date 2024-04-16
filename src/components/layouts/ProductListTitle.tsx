import React from 'react';

import SmallArrowIcon from '@/images/svgs/SmallArrowIcon';
import Link from 'next/link';

export default function ProductListTitle() {
  return (
    <div className="flex flex-end relative mt-10 px-3 text-left z-10">
      <div className="max-w-full flex-grow flex-shrink basis-0 mr-[0.625rem]">
        <h3
          className='text-ellipsis font-extrabold text-[20px] overflow-hidden'
        >지금 인기있는 상품이에요</h3>
      </div>
      <Link
        href="/category"
        className='inline-flex pt-2 items-start justify-center h-[16px] text-[12px] text-stone-700'>
        전체보기
        <div className='w-[15px] h-[15px]'>
          <SmallArrowIcon />
        </div>
      </Link>
    </div>
  )
}
