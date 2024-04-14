'use client'

import React from 'react'
import CategoryProductListToolBar from './CategoryProductListToolBar'
import SubCategorySlideButton from '@/components/layouts/SubCategorySlideButton'
import SubCategoryTable from './SubCategoryTable'
import { usePathname } from 'next/navigation'

export default function CategoryProductListTopBanner() {

  const pathname = usePathname();

  return (
    <div className="contents">
      <CategoryProductListToolBar />
      {pathname.includes('all') ? '' : <SubCategorySlideButton />}
      <SubCategoryTable />
    </div>
  )
}
