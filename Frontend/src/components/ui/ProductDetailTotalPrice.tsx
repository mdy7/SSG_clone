import React from 'react';

export default function ProductDetailTotalPrice({totalPrice}: {totalPrice: number}) {
  return (
    <div className='bg-white flex justify-end items-center pt-5 pr-4 pb-5'>
      <strong className='text-sm mt-1 mr-1'>총 합계</strong>
      <strong className='text-[23px] text-[#ff5452]'>
        <span>{totalPrice.toLocaleString()}</span>
        <span>원</span>
      </strong>
    </div>
  )
}
