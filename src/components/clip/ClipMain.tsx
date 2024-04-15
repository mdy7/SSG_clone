"use client"
import { use, useEffect, useState } from "react"
import Checkbox from "../ui/Checkbox"
import ClipCancleButton from "./ClipCancleButton"
import ClipEditButton from "./ClipEditButton"
import EditBar from "./EditBar"
import ClipInfoButton from "./ClipInfoButton"
import { deleteManyClips } from "@/actions/clip"
import Link from "next/link"
import Product from "../ui/Item/Product"
import Thumnail from "../ui/Item/Thumnail"
import { useSession } from "next-auth/react"
import ClipCart from "../ui/Item/ClipCart"

//itemIds는 서버에서 받아와야함
type ClipMainPropsType = {
  itemIds: number[]
}

type ItemType = {
  productId: number;
  // other properties...
};

export default function ClipMain({folderId}: {folderId: number}) {
  const session = useSession()
  // console.log("session:", session)
  const token = session.data?.user.accessToken;
  const [count, setCount] = useState(0)
  const [likeListData, setLikeListData] = useState([]);
  const [clicks, setClicks] = useState({} as { [key: number]: boolean });

  useEffect(() => {
    if (!token) return;
    const url = folderId === 0 ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/like/product` : `${process.env.NEXT_PUBLIC_API_BASE_URL}/like/${folderId}/product`
    fetch(
      url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json())
      .then((data) => {
        setLikeListData(data.data); // likeListData state를 업데이트합니다.
        // console.log("likeListData:", likeListData);
        const initialClicks = data?.reduce((acc: { [x: string]: boolean }, item: { id: string | number }) => {
          acc[item.id] = false;
          return acc;
        }, {} as { [key: number]: boolean });
        setClicks(initialClicks);
      });
  }, [token]);

  const [allCheck, setAllCheck] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)

  //개별 체크박스 클릭
  const handleClick = (itemId: number) => {
    const updatedClicks = { ...clicks, [itemId]: !clicks[itemId] }

    const newCount = Object.values(updatedClicks).filter(
      (click) => click,
    ).length
    setCount(newCount)

    const isAllChecked = Object.values(updatedClicks).every((click) => click)
    setAllCheck(isAllChecked)

    setClicks(updatedClicks)
  }

  //전체 체크박스 클릭
  const handleAllClicks = () => {
    const newAllCheck = !allCheck // 현재 allCheck의 반대 값
    const updatedClicks = Object.keys(clicks).reduce((acc, key) => {
      acc[parseInt(key)] = newAllCheck
      return acc
    }, {} as { [key: number]: boolean })
    setAllCheck(newAllCheck)
    setClicks(updatedClicks)
    setCount(newAllCheck ? likeListData.length : 0)
  }

  //편집 클릭
  const handleEditMode = () => {
    const updatedMode = !isEditMode
    setCount(0)
    const iniClicks = Object.keys(clicks).reduce((acc, key) => {
      acc[parseInt(key)] = false
      return acc
    }, {} as { [key: number]: boolean })
    setClicks(iniClicks)
    setIsEditMode(updatedMode)
  }

  const clickItemIds = (clicks ? Object.keys(clicks) : [])
    .filter((itemId) => clicks[parseInt(itemId)] === true)
    .map((itemId) => parseInt(itemId))

  return (
    <section className="relative">
      <div className="mt-3 px-4 text-sm">
        {isEditMode ? (
          <div className="flex flex-row justify-between items-center mb-2">
            <Checkbox
              id="editClip"
              text={count.toString() + "/" + likeListData.length.toString()}
              onChange={() => handleAllClicks()}
              checked={allCheck}
              isDisabled={false}
              checkboxShape="squre w-[19px] h-[19px]"
            />
            <ClipCancleButton onEditMode={() => handleEditMode()}
            />
          </div>
        ) : (
          <div className="flex flex-row justify-between items-center mb-2">
            <ClipInfoButton />
            <ClipEditButton onEditMode={() => handleEditMode()} />
          </div>
        )}
        {isEditMode && <EditBar token={token} clickItemIds={clickItemIds} />}
        {likeListData?.length === 0 ? (
          <div className="flex justify-center items-center h-40 text-sm text-[#959595]">
            <p>아직 좋아요한 상품이 없습니다.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 justify-between">
            {likeListData.map((item: ItemType) => (
              <div key={item.productId} className="w-full h-full relative">
                {isEditMode && (
                  <Checkbox
                    id={"item" + String(item.productId)}
                    text=""
                    onChange={() => handleClick(item.productId)}
                    checked={allCheck || clicks[item.productId]}
                    isDisabled={false}
                    checkboxShape="square absolute mt-2 w-[19px] h-[19px] z-10"
                  />
                )}
                <Thumnail id={item.productId} />
                <ClipCart productId={item.productId} />
                <Product id={item.productId} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
