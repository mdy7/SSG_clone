'use client'
import { ThumnailType } from "@/types/ThumnailType";
import { brandType } from "@/types/brandType";
import Image from "next/image";
import { useEffect, useState } from "react";

interface DeliveryProps {
  productId: number;
  productname: string;
  productprice: number;
  productdiscount: number;
  quantity: number;
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
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Response not OK');
      }
    })
    .then(data => data.data)
    .catch(error => {
      console.log("error:", error)
    });
}

export default function DeliveryItemList({ productId, productname, productprice, productdiscount, quantity }: DeliveryProps) {

  const calculatedPrice = Math.round((productprice - (productprice * (productdiscount / 100))));
  const [thumnail, setThumbnail] = useState<ThumnailType | null>(null);
  const [brand, setBrand] = useState<brandType | null>(null);

  useEffect(() => {
    getData(`/product/${productId}/thumbnail`)
      .then(data => {
        setThumbnail(data);
        return getData(`/product/${productId}/brand`);
      })
      .then(data => {
        setBrand(data);
      })
      .catch(error => {
        console.log("error:", error)
      });
  }, [productId]);

  return (
    <>
      <div className="flex px-[16px] py-[15px]">
        {thumnail && (
          <div className="flex justify-between">
            <Image src={thumnail.url} alt="한우" width={150} height={150} style={{ width: "80px", height: "80px" }} />
          </div>
        )}
        <div className="w-full flex flex-col justify-around text-xs mx-2">
          <div className="mt-6">
            <span className="font-extrabold mr-1">{brand?.brandName}</span>
            <span>{productname}</span>
          </div>
          <div className="flex justify-between">
            <div>
              <span className="line-through mr-2 text-[#666666]">{(productprice).toLocaleString()}원</span>
              <span className="font-extrabold">{(calculatedPrice).toLocaleString()}원</span>
            </div>

          </div>
          <span className="text-[#666666] text-right">수량{quantity}개</span>
        </div>
      </div>
      <hr />
    </>
  )
}