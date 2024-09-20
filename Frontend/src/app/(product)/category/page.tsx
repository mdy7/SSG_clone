'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { largeCategoryType } from "@/types/largeCategoryType";
import { commonResType } from "@/types/commonResType";
import { categoryType } from "@/types/categoryType";

export default function CategoryPage() {

  const [selectedLCategory, setSelectedLCategory] = useState<number>(0);
  const [lCategories, setLCategories] = useState<largeCategoryType[]>([]);
  const [isOpen, setIsOpen] = useState<Boolean[]>([]);

  useEffect(() => {
    const getLCategoryData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/category/large`, { cache: 'no-cache' });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const lCtgData: commonResType = await response.json();
        const data: largeCategoryType[] = lCtgData.data as largeCategoryType[];
        setLCategories(data);
        setIsOpen(Array(data.length).fill(false));
      } catch (error) {
        console.error("Failed to fetch large categories:", error);
      }
    };

    getLCategoryData();
  }, []);

  const handleOpen = (e: React.MouseEvent<HTMLLIElement>) => {
    const role = e.currentTarget.getAttribute('role');
    if (role) {
      const index = parseInt(role);
      if (!isOpen[index]) {
        setIsOpen((prev) => {
          return prev.map((item, idx) => {
            return index === idx ? !item : false;
          })
        })
      }
    }
  };

  return (
    <div>
      <hr className="h-[2px] bg-gradient-to-r from-red-400 from-0% via-orange-500 to-purple-600" />
      <div className="h-screen">
        <div className="pt-[15px] pr-[10px] pb-[25px] pl-[10px]">
          {lCategories.reduce((acc: largeCategoryType[][], item, index) => {
            const groupIndex = Math.floor(index / 5);
            if (!acc[groupIndex]) {
              acc[groupIndex] = [];
            }
            acc[groupIndex].push(item);
            return acc;
          }, []).map((group, groupIndex) => (
            <div
              className="py-2 min-h-[80px]"
              key={groupIndex}>
              <GroupNav
                group={group}
                gx={groupIndex}
                handleOpen={(e) => {
                  handleOpen(e);
                  setSelectedLCategory(parseInt(e.currentTarget.getAttribute('value') ?? '0'));
                }}
                selectedLCategoryId={selectedLCategory}
                selectedLCategoryName={lCategories.find((item) => item.largeCategoryId === selectedLCategory)?.largeCategoryName}
                isOpen={isOpen[groupIndex]}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const GroupNav = ({
  group,
  gx,
  handleOpen,
  selectedLCategoryId,
  selectedLCategoryName,
  isOpen
}: {
  group: largeCategoryType[],
  gx: number,
  handleOpen: React.MouseEventHandler<HTMLLIElement>,
  selectedLCategoryId: number,
  selectedLCategoryName: string | undefined,
  isOpen: Boolean
}) => {

  const [mCategories, setMCategories] = useState<categoryType[]>([]);

  useEffect(() => {
    const getMCategoryData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/category/${selectedLCategoryId}/medium`, { cache: 'no-cache' });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const mCtgData: commonResType = await response.json();
        const data: categoryType[] = mCtgData.data as categoryType[];
        setMCategories(data);
      } catch (error) {
        console.error("Failed to fetch large categories:", error);
      }
    };

    getMCategoryData();
  }, [selectedLCategoryId]);

  return (
    <div className='relative left-0 overflow-hidden w-full ' >
      <ul className={isOpen ? "grid grid-cols-5 h-full relative" : "grid grid-cols-5 relative"}>
        {group.map((item) => (
          <NavItem key={item.largeCategoryId} item={item} value={item.largeCategoryId} handleOpen={handleOpen} gx={gx} />
        ))}
      </ul>
      {isOpen && (
        <ul className="text-xs flex w-full flex-wrap px-3 py-3 bg-gray-100 my-[5px] box-border">
          <li className="w-1/2 min-h-[38px] flex items-center pl-3 pr-[13px]">
            <p>
              <Link
                href={{
                  pathname: `/category/all`,
                  query: {
                    lCtgId: selectedLCategoryId,
                    lCtgName: selectedLCategoryName
                  }
                }}
                passHref>
                상품 전체보기
              </Link>
            </p>
          </li>
          {
            mCategories.map((item, idx) => (
              <li
                key={idx} // 데이터 id를 사용하려고 했는데 1부터 대분류 상관없이 쭈욱 이어지기에 일단은 idx로 대체
                className="w-1/2 min-h-[38px] flex items-center pl-3 pr-[13px]">
                <p>
                  <Link
                    href={{
                      pathname: `/category/part`,
                      query: {
                        lCtgId: selectedLCategoryId,
                        lCtgName: selectedLCategoryName,
                        mCtgId: item.id,
                        mCtgName: item.name
                      }
                    }}
                    passHref>
                    {item.name}
                  </Link>
                </p>
              </li>
            ))
          }
        </ul>
      )}
    </div>
  )
}

const NavItem = ({
  item,
  value,
  handleOpen,
  gx
}: {
  item: largeCategoryType,
  value: largeCategoryType['largeCategoryId'],
  handleOpen: React.MouseEventHandler<HTMLLIElement>,
  gx: number
}) => {

  return (
    <li className="relative flex flex-col justify-center items-center" onClick={handleOpen} role={gx.toString()} value={value}>
      <Image
        src={item.imageUrl}
        alt={item.largeCategoryName}
        width={64}
        height={64}
        priority={true}
      />
      <p className="text-[10px] text-gray-500">{item.largeCategoryName}</p>
    </li>
  )
}
