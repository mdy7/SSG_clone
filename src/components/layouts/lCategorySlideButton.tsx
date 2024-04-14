'use client'

import React, { useState, useRef, useEffect } from 'react';

import { largeCategoryType } from '@/types/largeCategoryType';
import InfinityProductList from '../infinityProduct/InfinityProductList';

export default function LCategoryProductList() {

  const buttonRefs = useRef<HTMLButtonElement[]>([]);
  const [categories, setCategories] = useState<largeCategoryType[]>([]);
  const [isSelected, setIsSelected] = useState('');
  // const [isOpenCategory, setIsOpenCategory] = useState(false);

  useEffect(() => {
    const getLCategoryData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/category/large`, { cache: 'no-cache' });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const categoryData = await response.json();
        setCategories(categoryData.data);
        if (categoryData.data.length > 0) {
          setIsSelected(categoryData.data[0].largeCategoryName);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    getLCategoryData();
  }, []);

  useEffect(() => {
    buttonRefs.current = buttonRefs.current.slice(0, categories.length);
  }, [categories]);

  const handleCategoryClick = (category: string, index: number) => {
    setIsSelected(category);
    buttonRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  };


  return (
    <>
      <div className='col-start-2 col-end-auto ms-[(1rem)*-1] me-[(1rem)*-1] top-[46px] sticky z-[1000] bg-white'>
        <div className='flex-start flex-shrink-0 align-middle relative overflow-x-scroll'>
          <div className='h-[56px] overflow-hidden text-nowrap flex'>
            <div className='flex-nowrap pt-[10px] pb-[10px] ps-3 pe-1 overflow-scroll'>
              {
                categories.map((category) => {
                  if (category.largeCategoryName === '') {
                    return;
                  }
                  return (
                    <button
                      key={category.largeCategoryId}
                      ref={el => buttonRefs.current[category.largeCategoryId] = el!}
                      onClick={() => { handleCategoryClick(category.largeCategoryName, category.largeCategoryId) }}
                      className={`min-w-min h-[36px] text-xs font-semibold border mr-[5px] pl-2 pr-2 
                    ${isSelected === category.largeCategoryName ? 'bg-black text-white border-black' : 'bg-white text-xs  text-black border-gray-200'}`}>
                      {category.largeCategoryName}
                    </button>
                  )
                })
              }
            </div>
            {/* <div className='bg-white top-[10px] absolute  bottom-[10px] right-0 pr-4'>
            <button
              onClick={handleOpenCategoryList}
              className='min-w-9 min-h-9 rotate-90 inline-flex items-center justify-center text-sm border border-gray-200'>
              <div className='w-[18px] h-[18px] text-black font-bold'>
                <SmallArrowIcon />
              </div>
              {/* {isOpenCategory && <LargeCategoryList onClose={handleCloseCategoryList} />} */
            /* </button> *}
          </div> */}
          </div>
        </div>
      </div>
    </>
  )
}