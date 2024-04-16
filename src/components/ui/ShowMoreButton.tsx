import Link from 'next/link';
import React from 'react';

export default function ShowMoreButton({ title, count }: { title: string, count: number | string }) {
  return (
    <div className='h-11 mt-[26px] rounded-md border-[1px] border-gray-300 mx-4'>
      <Link
        href={'/ready'}
        className='relative inline-block w-full h-full text-sm text-center font-medium leading-10 text-gray-500'
      >
        {title}
        <span>
          ({count})
        </span>
        <span className='top-1/2 -right-3 inline-block align-middle w-5 h-5 bg-sp_product bg-[position:-425px_-248px] bg-[size:524px_479px]'></span>
      </Link>
    </div>
  )
}
