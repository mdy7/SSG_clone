'use client';

import React, { useEffect, useState } from 'react';
import getCompleteProductId from '@/app/api/product/getCompleteProductId';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ProductOptionModal from '../pages/productDetail/new/ProductOptionModal';
import Clip from './Item/Clip';

interface selectedOptionProductType {
  optionSelectedProductId: number,
  productId: number,
  productName: string,
  productPrice: number,
  productDiscount: number,
  colorOptionId: number,
  color: string,
  sizeOptionId: number,
  size: string,
  addOptionId: number,
  addOption: string,
  stock: number
}

export default function PurchaseToolBar({
  // params,
  selectedOptionProductId,
  // getOptionList,
  // selectedOptionProductData,
  getOptionList,
  productOptionData,
}: {
  params: { productId: number };
  selectedOptionProductId: number;
  // getOptionList: (optionForm: FormData) => void;
  // selectedOptionProductData: selectedOptionProductType[];
  // productOptionData:
}) {

  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [completeProduct, setCompleteProduct] = useState<selectedOptionProductType | null>(null);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  
  useEffect(() => {
    const completeProduct = async () => {
      const productId: selectedOptionProductType = await getCompleteProductId(selectedOptionProductId) as selectedOptionProductType;
      setCompleteProduct(productId);
    }
    completeProduct();
  }, [openModal, selectedOptionProductId]);

  console.log(selectedOptionProductId)


  return (
    <>
      <div className="fixed z-[9] bg-white left-0 right-0 bottom-0">
        <div className="flex border-1 justify-center ">
          {openModal ? (
            <>
              <div
                className="w-full h-[52px] pt-4 flex bg-black justify-center">
                <Link
                  href={{
                    pathname: `/cart`,
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
            </>
          ) : (
            <>
              <div className="px-3 py-2 border-gray-300 border">
                <div className="w-7 pt-1">
                <Clip productId={params.productId}/>
                </div>
              </div>
              <div
                onClick={handleOpenModal}
                className="flex flex-grow items-center justify-center bg-[#ff5452]"
              >
                <span className="text-white">구매하기</span>
              </div>
            </>
          )}
        </div>
      </div>
      <div
        className={`fixed z-[10] left-0 right-0 pb-3 transition-all
        ${openModal ? 'bottom-10 ease-in-out' : '-bottom-[500px] easy-out-in'}`}
      >
        <ProductOptionModal
          params={params}
          modalClose={handleCloseModal}
          getOptionList={getOptionList}
          productOptionData={productOptionData} 
          setProductCnt={setProductCnt}
          />
      </div>
    </>
  );
}
