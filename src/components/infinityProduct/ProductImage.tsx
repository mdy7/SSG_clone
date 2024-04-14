"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Rank from "../ui/Item/Rank";

function ProductImage({ id }: { id: number }) {
  const [imageUrl, setImageUrl] = useState<string>("");
  const getThumnailImageData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/product/${id}/thumbnail`,
        { cache: "no-cache" }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setImageUrl(data.data.url);
      //   console.log(data);
      return data.data;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getThumnailImageData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {imageUrl !== "" ? (
        <div className="relative">
          <Link href={`/products/detail/${id}`}>
            <div className="relative">
              <div className="overflow-hidden justify-center items-center w-full h-auto object-cover">
                <Image
                  src={imageUrl}
                  width={800}
                  height={800}
                  alt="name"
                  priority
                />
              </div>
            </div>
          </Link>
          {/* <Rank /> */}
        </div>
      ) : (
        <div className="animate-pulse bg-gray-200 w-full h-[400px]"></div>
      )}
    </>
  );
}

export default ProductImage;
