'use client'

import React, { Suspense } from 'react';
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

  console.log('lastParamId:', lastParamId, 'ctgId:', ctgId)

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
          <Suspense>
            <InfinityProductList apiType={apiType} id={Number(ctgId)} />
          </Suspense>
        </div>
    </>
  )
}