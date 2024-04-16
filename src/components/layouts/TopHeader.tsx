'use client'

import React, { useState } from 'react';
import Link from 'next/link';

import CircleArrow from '@/images/svgs/CircleArrow';
import SsgLogo from '@/images/svgs/SsgLogo';
import SearchForm from '../forms/SearchForm';
import AlarmIcon from '@/images/svgs/AlarmIcon';
import CartIcon from '@/images/svgs/CartIcon';
import SearchModal from '../modal/SearchModal';


export default function TopHeader() {
  const [isSearchModal, setIsSearchModal] = useState(false);

  const handleOpenSearchModal = () => {
    setIsSearchModal(true);
  };

  const handleCloseSearchModal = () => {
    setIsSearchModal(false);
  };

  return (
    <div className='w-full flex justify-between items-center py-[10px] pl-[16px] pr-[15px] gap-3'>
      <div className='flex gap-[3px] items-center w-[113px] h-[16px]'>
        <Link
          href='/'>
          <SsgLogo />
        </Link>
        <CircleArrow />
        <h1 className='text-[0px]'>SSG.com</h1>
      </div>
      <div className='flex' onClick={handleOpenSearchModal}>
        <SearchForm />
      </div>
      {isSearchModal && <SearchModal onClose={handleCloseSearchModal} />}
      <div className='flex items-center justify-end'>
        <Link href={'/ready'}><AlarmIcon /></Link>
        <Link href={'/ready'}><CartIcon /></Link>
      </div>
    </div>
  )
}
