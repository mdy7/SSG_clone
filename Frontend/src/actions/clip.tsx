"use server"

import { revalidateTag } from "next/cache";

//좋아요 여러 개 취소
export async function deleteManyClips(token: string, itemIds: number[]) {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/like/product/list`, //여러개 삭제 api 만들어달라하기
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          productId: itemIds,
        }),
      },
    )
    if (res.ok) {
      const data = await res.json()
      revalidateTag("manyClipCancle")
      return data
    }
  } catch (error) {
  }
}

//좋아요 폴더 추가
export async function addProductInFolder(token: string, itemIds: number[]) {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/like/product/list`, //여러개 삭제 api 만들어달라하기
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          productId: itemIds,
        }),
      },
    )
    if (res.ok) {
      const data = await res.json();
      revalidateTag("manyClipCancle");
      return data
    }
  } catch (error) {
  }
}