import React from 'react';

import CloseIcon from '@/images/svgs/CloseIcon';

export default function LargeCategoryList({ onClose }: { onClose: () => void }) {

  return (
    <div className='top-auto left-0 right-0 bottom-0 ms-auto me-suto max-w-[640px] max-h-[84vh] rounded-md fixed z-[1400]'>
      <header className='flex flex-col items-center relative h-[52px] bg-white rounded-3xl border-b-1 border-gray-400'>
        <div className='flex justify-center items-center flex-grow flex-shrink basis-0 w-full min-h-[36px] max-h-[36px] relative pb-1'>
          <h3 className='text-xl font-bold overflow-hidden text-ellipsis h-[19px] ps-[60px] pe-[60px]'>전체 카테고리</h3>
          <button
            onClick={onClose}
            className='inline appearance-none absolute text-nowrap font-normal -outline-offset-1 ps-4 pe-4 min-w-8 h-8 w-8 right-[10px]'>
            <CloseIcon />
          </button>
        </div>
      </header>
      <article className='ps-[15px] pe-[15px] max-h-[(-64px + 84vh)] relative overflow-y-auto box-content pb-px mb-[-100%] bg-white'>
        <div className='relative pt-2 pb-[60px] pr-6'>
        </div>
      </article>
    </div>
  )
}
