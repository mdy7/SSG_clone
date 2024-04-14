import Link from "next/link";
import React from "react";
import ReviewStat from "../ui/Item/ReviewStat";
import Clip from "../ui/Item/Clip";
import { commonResType } from "@/types/commonResType";
import { productDataType } from "@/types/productDataType";
import { productType } from "@/types/productType";
import { detailProductType } from "@/types/detailProductType";
import Image from "next/image";

interface ItemProps {
  productId: number;
  index: number;
}

export async function getData(url: string) {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}${url}`, //여러개 삭제 api 만들어달라하기
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
    if (res.ok) {
      const data = await res.json();
      // console.log("data:", data)
      return data.data
    }
  } catch (error) {
    console.log("error:", error)
  }
}

export default async function Item({productId, index}: ItemProps) {
  const result = await getData(`/product/${productId}`)
  const thumbnail = await getData(`/product/${productId}/thumbnail`)
  // console.log("result:", thumbnail)
  return (
    <div className="w-full h-[273px] font-sans">
      <div className="font-bold pt-[6px] pb-1 border-t-[1.5px] border-zinc-200 text-[12px]">
        <span>상품 번호 {String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="flex justify-center">
        <div className="">
          <Link href="#">
            <div className="w-[150px] h-[150px]">
              <Image src={thumbnail.url} alt='' width={500} height={500} />
              {/* <div className="w-full h-full bg-blue-500" /> */}
            </div>
          </Link>
        </div>
        <div className="w-full h-full ml-4">
          <Link href={`/products/detail/${productId}`} className="">
            <div className="text-[12px] line-clamp-2 pt-[6px] pr-2 flex gap-1">
              {/* <span className="font-bold">브랜드</span> */}
              {result.name}
            </div>
            <div className="mt-1">
              <span className="text-[15px] line-clamp-2 font-bold">{(result.price).toLocaleString()}원</span>
            </div>
            <ReviewStat />
          </Link>
        </div>
      </div>
      <div className="flex justify-end items-end">
        <div className="flex justify-center items-center">
          <button className="w-[146px] h-8 border-black border-[1px] text-[12px]">
            <span>상품 선택하기</span>
          </button>
          <Clip productId={productId}/>
        </div>
      </div>
    </div>
  );
}
