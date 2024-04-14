"use client"

import FillHeartIcon from "@/images/svgs/FillHeartIcon";
import HeartIcon from "@/images/svgs/HeartIcon";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Clip({productId}: {productId: number;}) {
  const [liked, setLiked] = useState(false);
  const router = useRouter();
  const session = useSession();
  const token = session?.data?.user?.accessToken;
  // console.log("token:", token);
  useEffect(() => {
    if (!token) return;
    // 좋아요를 누른 상품의 목록을 가져오는 API 호출
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/like/product/${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // 좋아요 상태 설정
        // console.log('API response:', data);
        // console.log("itemId:", data.data?.productId);
        // console.log("liked:", data.data?.like);
        setLiked(data.data?.like);
      });
  }, [productId, token]);

  const AddClip = (productId: number, accessToken: string) => {
    // console.log("token:", token);
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/like/product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
      body: JSON.stringify({ productId }),
    });
  };

  const handleHeartIconClick = (productId: number, accessToken: string) => {
    const usertoken = accessToken;
    // console.log("usertoken:", usertoken);
    if (!session) {
      router.push("/memberlogin");
      return true;
    }

    if (liked) {
      // 좋아요 삭제 API 호출
      fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/like/product`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + usertoken,
        },
        body: JSON.stringify({ productId }),
      }).then(() => {
        // 좋아요 상태 변경
        setLiked(false);
      });
    } else {
      AddClip(productId, usertoken)
      setLiked(true);
    }
  };
  return (
    <div>
      <button
        className="inline-flex justify-center align-middle items-center w-7 h-7"
        onClick={() => handleHeartIconClick(productId, token)}
      >
        <div className="w-[20px] h-[20px]">
          {liked ? <FillHeartIcon /> : <HeartIcon />}
        </div>
      </button>
    </div>
  );
}
