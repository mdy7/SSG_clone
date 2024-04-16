'use client';

import getOptionData from '@/app/api/product/getOptionData';
import getSelectedOptionProduct from '@/app/api/product/getSelectedOptionProduct';
import Clip from '@/components/ui/Item/Clip';
import { addOptionType, colorOptionType, sizeOptionType } from '@/components/ui/OptionList';
import OptionModalHandler from '@/components/ui/OptionModalHandler';
import OptionSelectedProduct from '@/components/ui/OptionSelectedProduct';
import ProductDetailTotalPrice from '@/components/ui/ProductDetailTotalPrice';
import { isLastOptionSelectedState, selectedOptionsState } from '@/state/optionState';
import { productType } from '@/types/productType';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

interface ProductOptionsAvailableType {
  Color: boolean;
  Size: boolean;
  AddOption: boolean;
};

interface selectedOptionProductFetchType {
  productId: string;
  colorId: string;
  sizeId: string;
  addOptionId: string;
};

const getData = (url: string) => {
  return fetch(
    `${process.env.API_BASE_URL}${url}`, //여러개 삭제 api 만들어달라하기
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  )
    .then(res => {
      if (!res.ok) {
        throw new Error('Response not OK');
      }
      return res.json();
    })
    .then(data => data.data)
    .catch(error => {
      console.log("error:", error)
      return null;
    });
}

function ProductOptionModal2({
  productId,
  modalClose,
}: {
  productId: number;
  modalClose: () => void;
}) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [productData, setProductData] = useState<productType | null>(null);
  const [productCnt, setProductCnt] = useState(0);
  
  useEffect(() => {
    const fetchProductData = async () => {
      const productData = await getData(`/product/${productId}`);
      setProductData(productData as productType);
    };
    fetchProductData();
  });

  return (
    <div className="fixed z-[9] bg-white left-0 right-0 bottom-0">
      <div className="flex border-1 justify-center ">
        <div className='bg-white shadow rounded-xl'>
          <OptionModalHandler rotate={'rotate-90'} onClose={() => modalClose()} />
          <div className='w-full px-5 py-3 bg-white'>
          </div>
          <div className='overflow-y-scroll max-h-[200px]'>
            {productData && <OptionSelectedProduct productData={productData} setTotalPrice={setTotalPrice} setProductCnt2={setProductCnt} />}
          </div>
          <ProductDetailTotalPrice totalPrice={totalPrice} />
        </div>
      </div>
      <div
        className="w-full h-[52px] pt-4 flex bg-black justify-center">
        <Link
          href={{
            pathname: `/ready`,
            query: {
              productId: productId,
              cnt: productCnt
            }
          }}
          passHref>
          <span className="text-white text-[16px]">장바구니</span>
        </Link>
      </div>
      <div
        className="w-full flex justify-center pt-4 bg-[#ff5452] border-[#ff5452]">
        <Link
          href={{
            pathname: `/order`,
            query: {
              productId: productId,
              cnt: productCnt
            }
          }}
          passHref>
          <span className="text-white text-[16px]">바로 구매</span>
        </Link>
      </div>
    </div>
  );
}

export default ProductOptionModal2;