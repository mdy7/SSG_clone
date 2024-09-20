import Link from 'next/link';
import React from 'react';

import CategoryIcon from '@/images/svgs/CategoryIcon';
import EyeIcon from '@/images/svgs/EyeIcon';
import GiftboxIcon from '@/images/svgs/GiftboxIcon';
import HomeIcon from '@/images/svgs/HomeIcon';
import HumanIcon from '@/images/svgs/HumanIcon';

export default function Navigation() {

  const navigationData = [
    {
      id: 1,
      icon: <CategoryIcon />,
      text: '카테고리',
      link: '/category'
    },
    {
      id: 2,
      icon: <GiftboxIcon />,
      text: '선물하기',
      link: '/ready'
    },
    {
      id: 3,
      icon: <HomeIcon />,
      text: '홈',
      link: '/'
    },
    {
      id: 4,
      icon: <HumanIcon />,
      text: 'MY',
      link: '/mypage'
    },
    {
      id: 5,
      icon: <EyeIcon />,
      text: '최근본',
      link: '/ready'
    }
  ]

  return (
    <div className='w-full z-[1000] bg-white shadow-sm box-border border-t border-neutral-100 bottom-0 fixed'>
      <div className='h-[50px] flex justify-between items-center text-center text-[10px] text-neutral-500'>
        {
          navigationData.map((item) => {
            return (
              <Link
                key={item.id}
                href={item.link}
                className='flex flex-col items-center flex-grow flex-shrink basis-12'>
                <div>
                  {item.icon}
                </div>
                <span>{item.text}</span>
              </Link>
            )
          })}
      </div>
    </div>
  )
}
