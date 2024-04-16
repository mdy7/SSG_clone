'use client'

import React, { useState } from 'react';

import SimpleHeader from '@/components/layouts/SimpleHeader';
import ReviewProduct from '@/components/ui/Review/ReviewProduct';
import ReviewButton from '@/components/ui/Review/ReviewButton';
import ReviewWriteModal from '@/components/modal/ReviewWriteModal';

export default function Writereview() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [rating, setRating] = useState(0);

  const handleClick = (index: any) => {
    setRating(index + 1);
  };


  return (
    <div>
      <SimpleHeader title="리뷰 쓰기" />
      <div><ReviewProduct /></div>
      {isModalOpen && <ReviewWriteModal
        closeModal={closeModal}
        rating={rating} />}
      <div className='h-[445px] pt-16 py-72 px-12 font-sans font-bold flex flex-col items-center justify-center'>
        <p className='text-[18px] mb-1'>구매하신 상품은 어떠셨나요?</p>
        <p className='text-[15px] mb-4'>별점으로 먼저 평가해보세요.</p>
        <div className='flex gap-2'>
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={index < rating ? 'w-[18px] h-[18px] bg-sp_myssg_review bg-[position:-28px_-161px] bg-[length:220px_179px]' : 'w-[18px] h-[18px] bg-sp_myssg_review bg-[position:-56px_-161px] bg-[length:220px_179px]'}
              onClick={() => handleClick(index)}
            ></span>
          ))}
        </div>
      </div>
      <div onClick={openModal}>
        <ReviewButton buttonText="등록" disabled={rating === 0} />
      </div>
    </div>
  )
}
