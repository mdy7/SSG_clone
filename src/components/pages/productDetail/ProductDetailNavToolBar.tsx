'use client'

import React, { useEffect, useState } from 'react';

import CartIcon from '@/images/svgs/CartIcon';
import MagnifyingGlassIcon from '@/images/svgs/MagnifyingGlassIcon';
import GoBack from '@/components/ui/GoBack';

export default function ProductDetailNavToolBar({ reviewCnt, qnaCnt }: { reviewCnt: number, qnaCnt: number }) {

  const [isScrolled, setIsScrolled] = useState(false);
  const [clickedItem, setClickedItem] = useState<string | null>(null);

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  const checkScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleDetailScroll = () => {
    setClickedItem('detail');
    const detailElement = document.getElementById('detail');
    if (detailElement) {
      detailElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReviewScroll = () => {
    setClickedItem('review');
    const reviewElement = document.getElementById('review');
    if (reviewElement) {
      reviewElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQnaScroll = () => {
    setClickedItem('qna');
    const qnaElement = document.getElementById('qna');
    if (qnaElement) {
      qnaElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`fixed top-0 z-[1000] w-full pt-[0.9rem] pb-[0.1rem] px-[14px] bg-white drop-shadow-md transition-all duration-800 ease-in-out transform
      ${isScrolled ? 'translate-y-0' : '-translate-y-full'}`}>
      <ul className='flex justify-between items-center font-extrabold text-[13px] pb-2'>
        <li className='w-1/12'>
          <div className='w-6 py-0 top-0'>
            <GoBack />
          </div>
        </li>
        <li className='flex w-1/2 ml-11 flex-row justify-around items-start'>
          <div
            onClick={handleDetailScroll}
            className={`text-black`}>
            <span>상세</span>
          </div>
          <div
            onClick={handleReviewScroll}
            className={`flex flex-col text-black`}>
            <span>리뷰</span>
            <span className={`text-[9px]  text-center -mt-[6px] text-gray-400`}>
              {reviewCnt}
            </span>
          </div>
          <div
            onClick={handleQnaScroll}
            className={`flex flex-col text-black`}>
            <span>Q&A</span>
            <span className={`text-[9px]  text-center -mt-[6px] text-gray-400`}>
              {qnaCnt}
            </span>
          </div>
        </li>
        <li className='flex w-1/6 justify-around'>
          <div
            onClick={() => alert('준비 중인 기능입니다.')}
          >
            <MagnifyingGlassIcon />
          </div>
          <div
            onClick={() => alert('준비 중인 기능입니다.')}
          >
            <CartIcon />
          </div>
        </li>
      </ul>
    </div>
  )
}
