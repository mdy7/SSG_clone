'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import LargeArrowIcon from '@/images/svgs/LargeArrowIcon';
import ShareIcon from '@/images/svgs/ShareIcon';
import SmallArrowIcon from '@/images/svgs/SmallArrowIcon';

export default function CategoryProductListToolBar() {
  const [standardCtg, setStandardCtg] = useState<string | null>(null);
  const [subCtg, setSubCtg] = useState<string | null>(null);

  const router = useRouter();
  const search = useSearchParams();

  const lCtgName = search.get('lCtgName');
  const mCtgName = search.get('mCtgName');
  const sCtgName = search.get('sCtgName');
  const dCtgName = search.get('dCtgName');

  useEffect(() => {
    if (dCtgName) {
      setStandardCtg(sCtgName);
      setSubCtg(dCtgName);
    } else if (sCtgName) {
      setStandardCtg(mCtgName);
      setSubCtg(sCtgName);
    } else if (mCtgName) {
      setStandardCtg(lCtgName);
      setSubCtg(mCtgName);
    } else if (lCtgName) {
      setStandardCtg(lCtgName);
      setSubCtg('전체보기');
    }
  }, [lCtgName, mCtgName, sCtgName, dCtgName]);

  return (
    <div className="flex flex-row w-full h-[46px] bg-white items-center pl-3 pr-3 sticky top-0 z-10">
      <div className="items-center h-full">
        <Link
          href='#'
          className="h-full flex flex-wrap justify-center items-center"
          onClick={(e) => {
            e.preventDefault();
            router.back();
          }}>
          <span className="w-[1px] h-[1px] -mx-[1px] -my-[1px] p-0 overflow-hidden text-nowrap absolute">이전 페이지</span>
          <div className="w-6 h-6 inline-block flex-shrink-0 align-middle">
            <LargeArrowIcon />
          </div>
        </Link>
      </div>
      <div className="pl-5 pr-3 items-center flex">
        <div className="inline-flex flex-wrap content-center">
          <p className="text-gray-600 text-[12px] text-ellipsis">
            {standardCtg}
          </p>
        </div>
        <div className="w-3 h-3 inline-block flex-shrink-0 align-middle mx-1">
          <SmallArrowIcon />
        </div>
        <button
          // onClick={() => setIsOpenModal(!isOpenModal)}
          className="inline-flex h-8 justify-center items-center">
          <p className="text-[12px] font-bold overflow-hidden text-ellipsis">
            {subCtg}
            <span className="w-[1px] h-[1px] overflow-hidden text-nowrap absolute p-0 -ms-[1px] -me-[1px]">열기</span>
          </p>
          {/* <div
            className={`w-4 h-4 inline-block ${isOpenModal ? "rotate-180" : ""}`}>
            <TriangleIcon />
          </div> */}
        </button>
      </div>
      <div className="flex-grow flex-shrink basis-0 justify-stretch self-stretch"></div>
      <div className="w-8 h-8 flex justify-center items-center flex-grow-0 flex-shrink-0 basis-auto">
        <button 
        className="flex"
        onClick={() => alert('준비 중인 기능입니다.')}>
          <div className="w-6 h-6 inline-block flex-shrink-0 align-middle">
            <ShareIcon />
          </div>
        </button>
      </div>
    </div>
  )
}
