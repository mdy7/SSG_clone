'use client'

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { categoryType } from '@/types/categoryType';
import getSCategoryData from '@/app/api/category/getsCategoryData';
import getDCategoryData from '@/app/api/category/getDcategoryData';
import getMCategoryData from '@/app/api/category/getMCategoryData';

export default function SubCategoryTable() {

  const currentUrl = useSearchParams();
  const [categoryList, setCategoryList] = useState<categoryType[]>([]);

  const fetchCtgData = async (ctgId: string | null, lastParamId: string) => {
    if (lastParamId === 'lCtgId') {
      const mCtgData: categoryType[] = await getMCategoryData(Number(ctgId)) as categoryType[];
      setCategoryList(mCtgData);
    }
    if (lastParamId === 'mCtgId') {
      const sCtgData: categoryType[] = await getSCategoryData(Number(ctgId)) as categoryType[];
      setCategoryList(sCtgData);
    }
    if (lastParamId === 'sCtgId') {
      const dCtgData: categoryType[] = await getDCategoryData(Number(ctgId)) as categoryType[];
      setCategoryList(dCtgData);
    }
  }

  let lastParamId = '';
  let postParamId = '';
  let postParamName = '';

  const params = currentUrl;
  const entries = Array.from(params.entries());
  for (let [name] of entries) {
    if (name.endsWith('CtgId')) {
      lastParamId = name;
    }
  }

  if (lastParamId === 'lCtgId') {
    postParamId = 'mCtgId';
    postParamName = 'mCtgName';
  } else if (lastParamId === 'mCtgId') {
    postParamId = 'sCtgId';
    postParamName = 'sCtgName';
  }

  useEffect(() => {
    const ctgId = params.get(lastParamId);
    fetchCtgData(ctgId, lastParamId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUrl.toString()]);

  return (
    <div className="col-start-2 col-end-auto ms-1 me-1">
      <div className="grid-cols-3 grid border-t-[1px] border-gray-200 ">
        {categoryList.map((category, index) => {
          const currentQuery = new URLSearchParams(currentUrl.toString());

          currentQuery.set(`${postParamId}`, category.id.toString());
          currentQuery.set(`${postParamName}`, category.name);
          return (
            <Link
              key={index}
              href={{
                pathname: `/category/part`,
                search: currentQuery.toString()
              }}
              className="relative flex text-[11px] items-center text-ellipsis ps-[13px] pe-[13px] h-[46px] overflow-hidden border-b-[1px] border-r-[1px]">
              <div className="overflow-hidden text-ellipsis">
                {category.name}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}