'use client'

import React from 'react';

import TriangleIcon from '@/images/svgs/TriangleIcon';

export default function ProductDetailQnA() {

  const [openIndexes, setOpenIndexes] = React.useState<number[]>([]);

  const handleClick = (idx: number) => {
    const currentIndex = openIndexes.indexOf(idx);
    const newIndexes = [...openIndexes];
    if (currentIndex === -1) {
      newIndexes.push(idx);
    } else {
      newIndexes.splice(currentIndex, 1);
    }

    setOpenIndexes(newIndexes);
  };

  const exampleData = [
    {
      title: "소제목1",
      content: "내용1",
      date: "2024.04.01",
      userId: "가려진 아이디1",
      status: "답변완료"
    },
    {
      title: "소제목2",
      content: "내용2",
      date: "2024.04.02",
      userId: "가려진 아이디2",
      status: "답변완료"
    },
    {
      title: "소제목3",
      content: "내용3",
      date: "2024.04.03",
      userId: "가려진 아이디3",
      status: "답변완료"
    },
    {
      title: "소제목4",
      content: "내용4",
      date: "2024.04.04",
      userId: "가려진 아이디4",
      status: "답변완료"
    },
    {
      title: "소제목5",
      content: "내용5",
      date: "2024.04.05",
      userId: "가려진 아이디5",
      status: "답변완료"
    }
  ];

  return (
    <div className='mt-5 py-0 px-4'>
      <ul className='mt-5 relative'>
        <div className='m-0 p-0'>
          {
            exampleData.map((data, idx) => {
              return (
                <li key={idx} className='mt-0 relative pl-[15px]'>
                  <span className='absolute top-0 left-[3px] -bottom-[15px] w-[1px] bg-[#dadde2]'></span>
                  <div className='ml-[1px] pt-[2px]'>
                    <div>
                      <span className='absolute top-0 left-[1px] w-[5px] h-[5px] rounded-[5px] border-[2px] bg-[#dadde2]'></span>
                      {/* <span className='mb-[5px] text-[13px] text-gray-900 hidden'></span> */}
                    </div>
                    <div className='mt-[5px]'>
                      <div className='block relative border-[1px] border-gray-300 rounded-md text-sm text-gray-900'>
                        <div className='p-[15px]'>
                          <div>
                            <div className='inline-block relative align-middle'>
                              <span className='inline-block -mr-3 bg-sp_product bg-[position:-257px_-230px] bg-[size:524px_479px] w-[25px] h-[18px] align-top'></span>
                              <span className='inline-block relative h-4 mt-[1px] pr-[7px] rounded-tr-lg rounded-br-lg text-[10px] font-bold box-border align-top z-[1] bg-[#ff5452] text-white leading-4'>
                                {data.status}
                              </span>
                            </div>
                            <div className='inline-block ml-[5px] align-middle'>
                              <span className='relative inline-block py-0 pl-[5px] pr-[6px] text-[10px] text-gray-500 border-r-[1px] border-gray-100'>
                                {data.date}
                              </span>
                              <span className='relative inline-block py-0 pl-[5px] pr-[6px] text-[10px] text-gray-500'>
                                {data.userId}
                              </span>
                            </div>
                          </div>
                          <div className='mt-[7px] text-sm text-gray-900'>
                            <button
                              onClick={() => handleClick(idx)}
                              className='block w-full text-left whitespace-normal text-[100%]'>
                              <em className='not-italic font-bold overflow-hidden block max-w-full text-ellipsis pr-[30px]'>{data.title}</em>
                              {
                                openIndexes.includes(idx) &&
                                <p className='mt-[3px] pr-[30px] text-gray-600'>
                                  {data.content}
                                </p>
                              }
                              <div className={`absolute top-[47px] right-[15px] w-4 text-gray-400 
                              ${openIndexes.includes(idx) ? 'rotate-180' : ''}`}>
                                <TriangleIcon />
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </div>
      </ul>
    </div>
  )
}
