'use client'

import Link from 'next/link';
import React from 'react';

import TriangleIcon from '@/images/svgs/TriangleIcon';
import parse from 'html-react-parser';

export default function ProductDetailInfoContent({ id, content }: { id: number, content: string }) {

  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const parse = require('html-react-parser').default;

  return (
    <div className='relative pb-5'>
      <div className='mt-[19px] py-0 px-4'>
        <span className='text-xs text-gray-500'>상품번호 : {id}</span>
        <div className='relative mt-5 flex flex-wrap items-center'>
          <div className='bg-sp_product bg-[position:-50px_-280px] bg-[size:524px_479px] w-10 h-10 mr-2'></div>
          <p className='flex-grow fkex-shrink basis-0 block text-xs'>
            상품정보에
            <br />
            문제가 있나요?
          </p>
          <Link
            href={'#'}
            className='inline-block min-w-20 h-10 leading-10 rounded-[20px] border-solid border-[1px] border-[#e5e5e5] text-[11px] font-bold text-center'
          >
            <span>신고하기</span>
          </Link>
        </div>
      </div>
      <div className='block max-h-none overflow-hidden relative mt-5 border-t-[1px]'>
        <div className='my-0 mx-4 py-5 px-0'>
          <div className={`relative block my-4 mx-0 w-auto h-auto ${isExpanded ? '' : 'max-h-dvh'}`}>
            {/* <div dangerouslySetInnerHTML={{ __html: content}} /> */}
            <div>
              {parse(content)}
            </div>
          </div>
        </div>
        <div className='absolute left-0 right-0 bottom-0 z-[2] bg-[#fff]'>
          <button
            onClick={toggleExpand}
            className='relative z-[1] w-full h-[50px] text-xs text-center flex justify-center items-center'>
            {
              isExpanded ?
                <>
                  <span>상세정보 접기</span>
                  <div className='w-4 h-auto rotate-180'>
                    <TriangleIcon />
                  </div>
                </> :
                <>
                  <span>상세정보 펼쳐보기</span>
                  <div className='w-4 h-auto'>
                    <TriangleIcon />
                  </div>
                </>
            }
          </button>
        </div>
      </div>
    </div >
  )
}
