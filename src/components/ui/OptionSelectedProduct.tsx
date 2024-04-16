'use client'

import { productDataType } from '@/types/productDataType';
import { productType } from '@/types/productType';
import React, { useState } from 'react';

export default function OptionSelectedProduct({ productData, setTotalPrice, setProductCnt2 }: { productData: productType, setTotalPrice: any, setProductCnt2: any }) {

  const [productCnt, setProductCnt] = useState(0);

  const calculatedPrice = Math.round((productData.price - (productData.price * (productData.discount / 100))));

  const handlePlus = () => {
    setProductCnt(prevCnt => {
      const newCnt = prevCnt + 1;
      setTotalPrice(calculatedPrice * newCnt);
      setProductCnt2(newCnt);
      return newCnt;
    });
  };

  const handleMinus = () => {
    if (productCnt > 1) {
      setProductCnt(prevCnt => {
        const newCnt = prevCnt - 1;
        setTotalPrice(calculatedPrice * newCnt);
        setProductCnt2(newCnt);
        return newCnt;
      });
    }
  }

  return (
    <div className='mx-4 px-3 pt-2 pb-4 mb-2 bg-[#f8f8f8] h-auto rounded-lg border-black border'>
      <span className='text-xs'>{productData.name}</span>
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
            {(calculatedPrice * productCnt).toLocaleString()}
          </span>
          <span>원</span>
        </div>
      </div>
    </div >
  )
}
