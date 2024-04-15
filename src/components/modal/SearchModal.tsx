'use client'
import React, { useState } from 'react';

import SmallArrowIcon from '@/images/svgs/SmallArrowIcon';
import CartIcon from '@/images/svgs/CartIcon';
import { Viewport } from 'next';

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function SearchModal({ onClose }: { onClose: () => void }) {

  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchValue(e.target.value)
  }

  return (
    <div className='w-full h-full left-0 top-0 bg-white fixed z-[1400]'>
      <div className='flex items-center pt-2 pb-2 bg-white h-14 top-0 sticky justify-between'>
        <div className='top-[10px] left-0 mx-'>
          <button
            onClick={onClose}
            className='flex justify-center items-center w-10 h-11 ml-1 min-w-10 -outline-offset-1 rotate-180'>
            <div className='w-7'>
              <SmallArrowIcon />
            </div>
          </button>
        </div>
        <form className='relative w-full isolate flex items-center'>
          <label className='w-[1px] h-[1px] absolute overflow-hidden p-0 -m-px text-nowrap'>검색</label>
          <input
            type="text"
            placeholder='원하시는 상품을 검색해보세요.'
            className='min-w-0 relative ps-4 pe-10 pl-4 bg-gray-100 w-full h-10  pr-11 rounded-3xl text-sm'
            onChange={handleSearch}
            value={searchValue} />
          <div
            className='"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.60004 14.8C7.60004 18.76 10.84 22 14.8 22C18.76 22 22 18.76 22 14.8C22 10.84 18.76 7.60001 14.8 7.60001C10.84 7.60001 7.60004 10.84 7.60004 14.8ZM8.80007 14.8C8.80007 11.44 11.4401 8.80001 14.8001 8.80001C18.1601 8.80001 20.8001 11.44 20.8001 14.8C20.8001 18.16 18.1601 20.8 14.8001 20.8C11.4401 20.8 8.80007 18.16 8.80007 14.8Z" fill="black" />
              <path d="M19.0187 19.8562L19.8672 19.0077L25.3826 24.5231L24.5341 25.3716L19.0187 19.8562Z" fill="black" />
            </svg>
          </div>
        </form>
        <div className='mx-1'>
          <CartIcon />
        </div>
      </div>
      <div>
        <div className='ms-4 me-4'>
          <div className='mt-5 -ms-[15px] -me-[15px]'>
            <div className='flex ms-[15px] me-[15px] justify-between'>
              <h3 className='text-sm font-black'>최근 검색어</h3>
              <button className='inline h-auto text-[11px] font-normal text-gray-400'>전체삭제</button>
            </div>
            <div className='flex items-center justify-start flex-row overflow-x-auto mt-[10px] mb-[10px] ps-4 pe-4'>
              {/* 최근 검색어 들어갈 내용 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}