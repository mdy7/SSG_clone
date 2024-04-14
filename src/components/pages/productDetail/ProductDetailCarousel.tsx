'use client'

import React from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { productImageType } from '@/types/productImageType';

export default function ProductDetailCarousel({
  images,
  alt
}: {
  images: productImageType[],
  alt: string
}) {

  return (
    <div className='relative pt-[100%] z-[5]'>
      <div className='absolute overflow-hidden top-0 left-0 right-0'>
        <Swiper
          className='productDetailSwiper'
          slidesPerView={1}
          loop={true}
          modules={[Pagination, Navigation]}
          pagination={{
            type: 'fraction',
          }}
        >
          {images.map((item, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div className='relative w-full pt-[100%] h-full'>
                  <Image
                    src={item.url}
                    fill
                    alt={alt}
                    priority
                  />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}
