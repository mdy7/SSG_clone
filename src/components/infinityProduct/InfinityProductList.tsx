"use client";

import React, { useEffect, useRef, useState } from "react";
import ProductImage from "./ProductImage";
import InfinityClipCart from "./InfinityClipCart";
import ProductInfo from "./ProductInfo";
import getInfinityCtgProductList from "@/app/api/product/getInfinityCtgProductList";
import { useSearchParams } from "next/navigation";

interface InfinityProductListType {
  next: boolean;
  last: boolean;
  productIdList: InfinityProductDataType[];
}

interface InfinityProductDataType {
  id: number;
  productId: number;
}

function InfinityProductList({
  apiType,
  id
}: {
  apiType: string;
  id: number
}) {

  const url = useSearchParams();
  const currentUrl = url.toString();

  const divRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState<number>(0);
  const [productIdList, setProductIdList] = useState<number[]>([]);

  const getProductIdList = async () => {
    try {
      const productsData: InfinityProductListType = await getInfinityCtgProductList(apiType, id, page) as InfinityProductListType;
      if (productsData.next || productsData.last) {
        const productIds = productsData.productIdList.map(
          (product: { productId: number }) => product.productId
        );
        const updatedProductList = [...productIdList, ...productIds];
        console.log('짠')
        setProductIdList(updatedProductList);
      } else {
        console.log("데이터 없음");
      }
      return;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getProductIdList();
  }, [page, id, currentUrl]);

  useEffect(() => {
    setPage(1);
    setProductIdList([]);
  }, [id]);

  useEffect(() => {
    // Intersection Observer 생성
    const observer = new IntersectionObserver(
      ([entry]) => {
        // entry.isIntersecting 값이 true이면 요소가 화면에 나타난 것임
        if (entry.isIntersecting) {
          // setPage 함수를 호출하여 페이지 값을 1 증가시킴
          setPage((prevPage) => prevPage + 1);
        }
      },
      // Intersection Observer의 옵션 설정
      {
        // 요소가 뷰포트의 0% 이상 보이는 경우 콜백 함수 호출
        threshold: 0,
      }
    );
    // Intersection Observer에 감시할 요소 등록
    if (divRef.current) {
      observer.observe(divRef.current);
    }
    // 컴포넌트가 unmount될 때 Intersection Observer 해제
    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, [setPage]);

  return (
    <div className="grid-cols-custom grid gap-y-0 gap-x-2 ms-4 me-4 mb-10">
      {productIdList.map((item: number) => (
        <div key={item} className="my-8">
          <ProductImage id={item} />
          <InfinityClipCart productId={item} />
          <ProductInfo id={item} />
        </div>
      ))}
      <div ref={divRef}></div>
    </div>
  );
}

export default InfinityProductList;