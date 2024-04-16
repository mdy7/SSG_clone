"use client";
import { brandType } from "@/types/brandType";
import { productType } from "@/types/productType";
import React, { useEffect, useState } from "react";

function ProductInfo({ id }: { id: number }) {
  const [brandName, setBrandName] = useState<brandType>();
  const [productData, setProductData] = useState<productType>();

  const getproductBrandData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/product/${id}/brand`,
        { cache: "no-cache" }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const brandData = await response.json();
      setBrandName(brandData.data);
      return brandData.data;
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const getproductData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/product/${id}`,
        { cache: "no-cache" }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const productData = await response.json();
      setProductData(productData.data);
      return productData.data;
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    getproductBrandData();
    getproductData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {brandName && productData && (
        <div>
          <p className="font-bold text-xs">{brandName.brandName}</p>{" "}
          <p className="text-slate-600 text-[0.8rem] line-clamp-2">
            {productData.name}
          </p>
          {productData.discount === 0 ? (
            <p className="pt-[1.5rem] text-[1.0rem] font-bold">{productData.price.toLocaleString()}원</p>
          ) : (
            <>
              <del className="text-[0.8rem] text-slate-300 ">
                {productData.price.toLocaleString()}원
              </del>
              <p className="text-[1.0rem] font-bold">
                <span className=" text-[#FF5452]">
                  {productData.discount}%{" "}
                </span>
                <span>
                  {Math.round(
                    productData.price -
                    (productData.price * productData.discount) / 100
                  ).toLocaleString()}
                  원
                </span>
              </p>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default ProductInfo;
