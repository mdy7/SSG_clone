import Link from 'next/link';
import React from 'react';

import SmallArrowIcon from '@/images/svgs/SmallArrowIcon';
import getProductCategoryData from '@/app/api/product/getProductCategoryData';
import { productCategoryDataType } from '@/types/productCategoryDataType';


export default async function ProductDetailCategoryInfo({ params }: { params: { productId: number } }) {

  const productCategoryData: productCategoryDataType = await getProductCategoryData(params.productId) as productCategoryDataType;

  return (
    <div className='border-t-[15px]'>
      <div className='py-5 px-4 text-[14px]'>
        <dl>
          <dt className='relative float-left w-20 mt-[2px] text-gray-600 leading-tight'>카테고리</dt>
          <dd className='ml-20 ms-10 flex'>
            <div>
              <Link
                href={'#'}
                className='font-bold text-[#222] mr-[2px]'
              >{productCategoryData.largeCategoryName}
                <div className='relative inline-block w-[15px] h-[15px] ml-[3px]'>
                  <SmallArrowIcon />
                </div>
              </Link>
            </div>
            <div>
              <Link
                href={'#'}
                className='font-bold text-[#222] mr-[2px]'
              >{productCategoryData.mediumCategoryName}
                <div className='relative inline-block w-[15px] h-[15px] ml-[3px]'>
                  <SmallArrowIcon />
                </div>
              </Link>
            </div>
            <div>
              <Link
                href={'#'}
                className='font-bold text-[#222] mr-[2px]'
              >{productCategoryData.smallCategoryName}
              </Link>
            </div>
          </dd>
        </dl>
      </div>
    </div>
  )
}
