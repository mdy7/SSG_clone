'use client'
import React, { useState } from 'react';

export default function ReviewForm({ h3color }: any) {
  const [text, setText] = useState('');

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <div className='w-full h-[246.6px] px-[15px] bg-white mt-3'>
      <h3 className={`font-sans text-[13px] font-semibold pb-[10px] ${h3color}`}>이 상품의 어떤 점이 좋았나요?</h3>
      <div className='w-full h-[191.6px] border-[0.8px] border-black rounded-lg'>
        <textarea className='w-full h-full rounded-lg font-sans text-[13px] py-[15px] pl-[11px] pr-[23px]'
          placeholder='• 텍스트/사진을 추가 등록하면 SSG MONEY 50원을 바로 적립해 드립니다.(월 40건 제한, 동일옵션 30일 이내 미적립)' 
          value={text}
          onChange={handleTextChange}></textarea>
        <div className='flex justify-between text-zinc-400 text-[11px] font-sans'>
          <div className='w-full h-[18px] flex gap-1 items-center'>
            <div className='w-[14px] h-[14px] bg-sp_myssg_review bg-[position:-204px_-125px] bg-[length:220px_179px]'>
            </div>리뷰 등록/해택 안내</div>
          <div className='w-full h-[18px] text-right'><em className='font-normal'>{text.length}</em> / 2000 (10자 이상)</div>
        </div>
      </div>
    </div>
  )
}
