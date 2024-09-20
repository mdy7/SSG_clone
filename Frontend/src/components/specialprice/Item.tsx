'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ReviewStat from "../ui/Item/ReviewStat";
import Clip from "../ui/Item/Clip";
import { productType } from "@/types/productType";
import Image from "next/image";
import { ThumnailType } from "@/types/ThumnailType";
import ProductOptionModal2 from "../pages/productDetail/new/ProductOptionModal2";

interface ItemProps {
  productId: number;
  index: number;
}

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

export default function Item({ productId, index }: ItemProps) {
  const [product, setProduct] = useState<productType | null>(null);
  const [thumnail, setThumbnail] = useState<ThumnailType | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  }

  useEffect(() => {
    getData(`/product/${productId}/thumbnail`)
      .then(data => {
        setThumbnail(data);
        return getData(`/product/${productId}`);
      })
      .then(data => {
        setProduct(data);
      })
      .catch(error => {
        console.log("error:", error)
      });
  }, [productId]);

  return (
    <div className="w-full h-[273px] font-sans">
      <div className="font-bold pt-[6px] pb-1 border-t-[1.5px] border-zinc-200 text-[12px]">
        <span>상품 번호 {String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="flex justify-center">
        <div className="">
          <Link href="#">
            <div className="w-[150px] h-[150px]">
              {thumnail && <Image src={thumnail.url} alt='' width={500} height={500} />}
              {/* <div className="w-full h-full bg-blue-500" /> */}
            </div>
          </Link>
        </div>
        <div className="w-full h-full ml-4">
          <Link href={`/products/detail/${productId}`} className="">
            <div className="text-[12px] line-clamp-2 pt-[6px] pr-2 flex gap-1">
              {/* <span className="font-bold">브랜드</span> */}
              {product && product.name}
            </div>
            <div className="mt-1">
              <span className="text-[15px] line-clamp-2 font-bold">{product && (product.price).toLocaleString()}원</span>
            </div>
            <ReviewStat />
          </Link>
        </div>
      </div>
      <div className="flex justify-end items-end">
        <div className="flex justify-center items-center">
          <button className="w-[146px] h-8 border-black border-[1px] text-[12px]" onClick={handleOpenModal}>
            <span>상품 선택하기</span>
          </button>
          <Clip productId={productId} />
          {openModal && <ProductOptionModal2
          productId={productId}
          modalClose={handleCloseModal}
          />}
        </div>
      </div>
    </div>
  );
}
