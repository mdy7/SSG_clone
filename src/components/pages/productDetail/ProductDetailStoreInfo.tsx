import React from 'react';

import ShareIcon from '@/images/svgs/ShareIcon';

export default function ProductDetailStoreInfo() {
  return (
      <div>
        <div className='relative py-[7px] pl-4 pr-[50px] border-b-[1px] min-h-[17px]'>
          <div className='inline-block align-middle'>
            <span className='inline-block align-middle text-[0px]'>
              <i className='inline-block align-top mr-1 text-xs not-italic font-black'>
                신세계백화점
              </i>
            </span>
          </div>
          <div className='inline-block ml-[5px] align-middle'></div>
          <button className='absolute top-[50%] right-[6px] w-10 h-10 -translate-y-[50%]'>
            <div className='w-6 h-6 bg-no-repeat text-gray-500'>
              <ShareIcon />
            </div>
          </button>
        </div>
      </div>
  )
}
