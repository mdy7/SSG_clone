'use client'

import React from 'react';

import TabList from '@/components/widgets/TabList';
import LCategoryProductList from '@/components/layouts/LCategoryProductList';

export default function page() {

  const TablistTitles = [
    { title: '전체', subtitle: '베스트' },
    { title: '실시간', subtitle: '베스트' },
    { title: '장보기', subtitle: '상품' },
    { title: '백화점', subtitle: '상품' },
  ];

  return (
    <div className="w-full h-100">
      <TabList TablistTitles={TablistTitles} />
      <LCategoryProductList />
    </div>
  )
}
