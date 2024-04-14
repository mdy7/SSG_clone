import React from 'react';
import Image from 'next/image';

export default function ProductDetailDeliveryInfo() {
  return (
    <>
      <div className='text-xs pt-[5px] pr-4 pl-4 text-gray-900'>
        <dl className='mx-0 my-5 flex flex-row'>
          <dt className='float-left w-20 text-gray-600'>배송정보</dt>
          <dd className='block text-xs'>
            <em className='not-italic font-bold inline-block pr-[1px]'>택배배송</em>
            <span className='text-xs text-gray-600'>배송업체</span>
            <span className='block text-xs text-gray-600'>
              당일 도착 예정
              <br />
              배송비 무료 (3만원 이상 무료)
            </span>
          </dd>
        </dl>
      </div>
      <div className='text-xs pt-[5px] pr-4 pb-[25px] pl-4 text-gray-900'>
        <dl className='mx-0 my-5 block'>
          <dt className='relative float-left w-20 text-gray-600'>포장안내</dt>
          <dd className='mt-5 ml-20 block ms-10'>
            <div className='flex items-start'>
              <div className='block m-0 p-0'>
                <div className='w-9 h-9 absolute'>
                  <Image
                    src={'https://sui.ssgcdn.com/ui/m_ssg/img/product/bn_shopping_bag.png'}
                    alt='포장안내'
                    fill
                    sizes='(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw'
                    priority
                  />
                </div>
                <div className='ml-[px] block text-xs overflow-hidden pl-11'>
                  선물하기로 주문 시 신세계백화점 쇼핑백이 동봉되며, 전용 선물박스로 배송됩니다.
                </div>
              </div>
            </div>
          </dd>
        </dl>
      </div>
    </>
  )
}
