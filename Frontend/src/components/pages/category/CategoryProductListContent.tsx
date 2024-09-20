'use client'

import React from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

import SubCategorySlideButton from '@/components/layouts/SubCategorySlideButton';
import SubCategoryTable from './SubCategoryTable';
import InfinityProductList from '@/components/infinityProduct/InfinityProductList';

export default function CategoryProductListContent() {

  const pathname = usePathname();
  const search = useSearchParams();

  let lastParamId = '';

  const entries = Array.from(search.entries());
  for (let [name] of entries) {
    if (name.endsWith('CtgId')) {
      lastParamId = name;
    }
  }
  const ctgId = search.get(lastParamId);

  let apiType = '';

  if (lastParamId == 'lCtgId') {
    apiType = 'large-category-paged';
  }
  if (lastParamId == 'mCtgId') {
    apiType = 'medium-category-paged';
  }
  if (lastParamId == 'sCtgId') {
    apiType = 'small-category-paged';
  }
  if (lastParamId == 'dCtgId') {
    apiType = 'detail-category-paged';
  }

  return (
    <>
      {pathname.includes('all') ? '' : <SubCategorySlideButton />}
      <SubCategoryTable />
      <div className="col-start-2 col-end-auto">
        {pathname.includes('all') ?
          <InfinityProductList apiType={apiType} id={Number(ctgId)} />
          :
          <div className='w-full mt-5 bg-white max-h-[800px] h-[200px] flex justify-center items-center flex-col'>
            <div className='text-9xl text-yellow-500'>⚠</div>
            <p className='text-xl font-bold'>상품 준비 중</p>
          </div>}
      </div>
    </>
  )
}