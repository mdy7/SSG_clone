'use client'

import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, A11y } from 'swiper/modules';

import FillStarIcon from '@/images/svgs/FillStarIcon';
import SmallArrowIcon from '@/images/svgs/SmallArrowIcon';

export default function ReviewDetail() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [navigation, setNavigation] = useState(null);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const items = new Array(10).fill(null);
    return (
        <div className='px-[18.25px] py-5 z-0'>
            <div className='flex flex-row items-center justify-between'>
                <div className='font-bold text-xs mt-1 whitespace-nowrap flex items-center'>
                    <div className='w-[12px] mr-1'>
                        <FillStarIcon />
                    </div>
                    5
                    <span className='text-zinc-100 px-1'>|</span>일반</div>
                <div className='text-xs mt-1 whitespace-nowrap text-gray-400'>신고/차단</div></div>
            <div className='flex flex-row items-center justify-start text-xs whitespace-nowrap text-gray-400 mt-[7px] mb-5'>
                <span className='w-[67.813px] h-[15.2px] pr-[5px] py-0 whitespace-nowrap'>2024.03.12</span>
                <span className='text-zinc-100 px-'>|</span>
                <span className='w-[67.813px] h-[15.2px] pr-[5px] pl-[6px] whitespace-nowrap'>miz*******</span>
                <span className='text-zinc-100 px-'>|</span>
                <span className='w-[67.813px] h-[15.2px] pr-[5px] pl-[6px] whitespace-nowrap'>판매지점</span>
            </div>
            <div className='w-full h-[88vw] relative'>
                <Swiper
                    slidesPerView={1.03}

                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    // onSwiper={(swiper) => {
                    //     setNavigation(swiper.navigation);
                    //   }}
                    //   onReachEnd={() => {
                    //     if (navigation) {
                    //       navigation.nextEl.style.display = 'none';
                    //     }
                    //   }}
                    //   onReachBeginning={() => {
                    //     if (navigation) {
                    //       navigation.prevEl.style.display = 'none';
                    //     }
                    //   }}
                    //   onSlideChange={(swiper) => {
                    //     if (navigation) {
                    //       navigation.nextEl.style.display = swiper.isEnd ? 'none' : '';
                    //       navigation.prevEl.style.display = swiper.isBeginning ? 'none' : '';
                    //     }
                    //   }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"

                >
                    {items.slice(0, 10).map((_, index) => (
                        <SwiperSlide key={index} className='flex justify-center items-center'><Link href='#' className='relative block w-[88vw] h-[88vw] bg-lime-400 rounded-lg overflow-hidden text-white font-sans text-9xl object-cover'>{index}</Link></SwiperSlide>
                    ))}
                </Swiper>
                {/* <div className='swiper-pagination absolute w-[50px] h-[22px] rounded-xl bg-slate-500 opacity-50 text-center text-white text-[13px] font-bold right-8 top-2'><span>1</span>/<span>10</span></div> */}
                {/* <div className='absolute right-0 top-1/2 transform -translate-y-1/2 w-[40px] h-[40px] z-20'>
                    <span className='w-full h-full'><SmallArrowIcon /></span>
                </div> */}

            </div>
            <div className='mt-[15px]'><p className='whitespace-nowrap text-sm'>내용</p></div>
        </div>
    )
}
