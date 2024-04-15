'use client'
import React from 'react';

import LargeCategorySlideButton from '@/components/layouts/LCategoryProductList';
import SpecailPrice from '@/components/widgets/SpecailPrice';
import TabList from '@/components/widgets/TabList';
import ProductList from '@/components/layouts/ProductList';
import InfinityProductList from '@/components/infinityProduct/InfinityProductList';

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
      <InfinityProductList apiType={'large-category-paged'} id={1}/>
    </div>
  )
}
