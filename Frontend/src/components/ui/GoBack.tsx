'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

import LargeArrowIcon from '@/images/svgs/LargeArrowIcon';

export default function GoBack() {

  const router = useRouter();

  return (
    <div 
      onClick={() => {
        router.back();
      }}>
      <LargeArrowIcon/>
    </div>
  )
}
