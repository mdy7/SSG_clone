'use client'

import { useRouter } from 'next/navigation';
import React from 'react';

function SimpleHeader({title, onClick}: {title: string, onClick?: () => void}) {

  const router = useRouter();

  return (
    <div className="relative w-full h-[42px] border-b border-stone-300 flex items-center justify-center px-[50px] box-border">
      <div className="w-[87px] h-[19.2px] text-[15px] text-center whitespace-nowrap font-sans font-bold font-['Nanum Gothic'] overflow-ellipsis items-center justify-center flex"><h2>{title}</h2></div>
      <div className='top-0 left-0 px-4 py-3 w-[65px] h-[42px] inline-block absolute'>
        <div
          onClick={() => {
            router.back();
          }}
          className='w-[25px] h-[18px] bg-[url("https://sui.ssgcdn.com/ui/m_ssg/img/com_v2/sp_top_cate.png")] bg-no-repeat bg-[position:0px_0px] bg-[length:100px_100px]'>
        </div>
      </div>
    </div>

  )
}

export default SimpleHeader
