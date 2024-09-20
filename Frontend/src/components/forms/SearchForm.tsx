import React from 'react';

import MagnifyingGlassIcon from '@/images/svgs/MagnifyingGlassIcon';

export default function SearchForm() {
  return (
    <form className='relative w-full isolate flex'>
      <label className='w-[1px] h-[1px] absolute overflow-hidden p-0 -m-px text-nowrap'>검색</label>
      <input
        type="text"
        className='min-w-0 ps-4 pe-10 pl-4 bg-gray-100 w-full h-10  pr-11 rounded-3xl select-all' />
      <div
        className='"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
        <MagnifyingGlassIcon />
      </div>
    </form>
  );
}
