'use client'

import Link from 'next/link';
import React from 'react';

import { mainNavMenuData } from '@/lib/initData';
import { navType } from '@/types/navType';

export default function BottomHeader() {

  const [selectedMenu, setSelectedMenu] = React.useState<string>('홈');

  const handleMenuClick = (menu: string) => {
      setSelectedMenu(menu);
    };

    return (
      <nav className='flex left-0 top-0 w-full justify-stretch sticky z-[1100] bg-white shadow-inset'>
        <ul className='flex flex-row justify-between text-nowrap min-w-full overflow-x-auto overflow-y-hidden'>
          {
            mainNavMenuData.map((menu: navType) => {
              const isSelected = selectedMenu === menu.title;
              return (
                <li key={menu.id} className='px-[10px] py-[13px] text-[14px] ml-1'>
                  <Link
                    onClick={() => handleMenuClick(menu.title)}
                    href={menu.url}
                    passHref>
                    <p className={`${isSelected ? 'font-black border-b-4 border-black' : ''}`}>
                      {menu.title}
                    </p>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </nav >
    );
  }
