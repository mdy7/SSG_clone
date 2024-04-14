'use client'

import React, { useState } from 'react';

export default function OptionSelectedProduct() {

  const [productCnt, setProductCnt] = useState(1);

  const handlePlus = () => {
    setProductCnt(productCnt + 1);
  };

  const handleMinus = () => {
    if (productCnt > 1) {
      setProductCnt(productCnt - 1);
    }
  }

  return (
    <div className='mx-4 px-3 pt-2 pb-4 mb-2 bg-[#f8f8f8] h-auto rounded-lg border-black border'>
      <span className='text-xs'>r</span>
      <div className='flex justify-between pt-1'>
        <div className='flex bg-white'>
          <span
            onClick={handleMinus}
            className='px-3'>-</span>
          <span className='px-2 text-xs items-center flex'>{productCnt}</span>
          <span
            onClick={handlePlus}
            className='px-3'>+</span>
        </div>
        <div
          className='font-bold'>
          <span>
            {10000 * productCnt}
          </span>
          <span>원</span>
        </div>
      </div>
    </div >
  )
}
