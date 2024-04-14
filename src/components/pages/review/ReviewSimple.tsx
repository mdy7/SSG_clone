import Link from 'next/link';
import React from 'react';

import FillStarIcon from '@/images/svgs/FillStarIcon';

export default function ReviewSimple() {

  const exampleData = [
    {
      rating: 4,
      type: '일반',
      date: '2022.01.01',
      id: 'user1',
      images: ['image1_url', 'image2_url'],
      content: '옷이 너무 예뻐요!!'
    },
    {
      rating: 5,
      type: '일반',
      date: '2022.01.02',
      id: 'user2',
      images: ['image3_url', 'image4_url'],
      content: '배송이 빨라요!! 잘 입을게요'
    },
    {
      rating: 3,
      type: '일반',
      date: '2022.01.03',
      id: 'user3',
      images: ['image5_url', 'image6_url'],
      content: '좋네요. 무난하게 입을만 한거 같아요.'
    },
    {
      rating: 4,
      type: '일반',
      date: '2022.01.04',
      id: 'user4',
      images: ['image7_url', 'image8_url'],
      content: '너무 마음에 들네요'
    },
    {
      rating: 5,
      type: '일반',
      date: '2022.01.05',
      id: 'user5',
      images: ['image9_url', 'image10_url'],
      content: '굿'
    }
  ];

  return (
    <>
      <div className='mt-[30px] py-0 px-4 leading-none'>
        <div className='inline-block  text-right whitespace-nowrap'>
          <span className='float-left text-base font-bold leading-normal clear-both whitespace-nowrap text-right'>
            전체 리뷰
          </span>
        </div>
        <ul className='relative border-t-[1px]'>
          {exampleData.map((data, index) => {
            return (
              <li key={index} className='mt-5 pl-0 border-t-0 border-b-[1px] pb-5'>
                <div className='pr-5 block'>
                  <div className='flex items-center'>
                    <div className='flex items-center relative align-middle text-[12px]'>
                      <div className='w-[12px] mr-1'>
                        <FillStarIcon />
                      </div>
                      <em className='not-italic pr-1 text-xs font-bold'>{data.rating}</em>
                    </div>
                    <span className='border-l-[1px] border-r-[1px] border-zinc-100 px-2 text-xs'>일반</span>
                    <div className='flex flex-row items-center justify-start text-[11px] whitespace-nowrap text-gray-400'>
                      <span className='w-[67.813px] h-[15.2px] pr-[5px] pl-[6px] py-0 whitespace-nowrap border-r-[1px] border-zinc-100'>{data.date}</span>
                      <span className='w-[67.813px] h-[15.2px] pr-[5px] pl-[6px] whitespace-nowrap'>{data.id}</span>
                    </div>
                  </div>
                  {/* <div className='mt-3 -mr-5 mb-3 ml-0'>
                    <ul className='flex p-0'>
                      {
                        data.images.map((image, index) => {
                          return (
                            <li key={index} className='bg-red-300 w-[90px] h-[90px] rounded-lg mr-3'>이미지{index + 1}</li>
                          )
                        })
                      }
                    </ul>
                  </div> */}
                  <Link
                    href={'#'}
                    className='text-inherit'
                  >
                    <p className='mt-[5px] whitespace-nowrap text-sm overflow-hidden break-all leading-normal'>
                      {data.content}
                    </p>
                  </Link>
                </div>
                <Link
                  href={'#'}
                  className='w-[30px] h-[30px] absolute -right-[14px] top-[14px]'
                >
                  <div className='absolute top-1/2 left-1/2 w-3 h-3 ml-0 bg-sp_product bg-[position:-509px_-262px] bg-[size:524px_479px]'></div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
