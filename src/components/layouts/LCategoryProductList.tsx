'use client'

import React, { useState, useRef, useEffect, LegacyRef } from 'react';

import { largeCategoryType } from '@/types/largeCategoryType';
import InfinityProductList from '../infinityProduct/InfinityProductList';
import { set } from 'react-hook-form';

export default function LCategoryProductList() {

  const buttonRefs = useRef<HTMLParagraphElement[]>([]);
  const [categories, setCategories] = useState<largeCategoryType[]>([]);
  const [isSelected, setIsSelected] = useState('');
  const [ctgId, setCtgId] = useState(1);

  // const [isOpenCategory, setIsOpenCategory] = useState(false);

  useEffect(() => {
    const getLCategoryData = async () => {
      try {
        'use server'
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
    if ( buttonRefs.current[0]) {
      buttonRefs.current[0].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [categories]);

  const handleCategoryClick = (category: string, index: number) => {
    setIsSelected(category);
    setCtgId(index);
    if (buttonRefs.current[index] !== undefined) {
      buttonRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };
  
  return (
    <>
      <div className='col-start-2 col-end-auto ms-[(1rem)*-1] me-[(1rem)*-1] top-[46px] sticky z-[1000] bg-white'>
        <div className='flex-start flex-shrink-0 align-middle relative overflow-x-scroll'>
          <div className='h-[56px] overflow-hidden text-nowrap flex'>
            <ul className='flex flex-nowrap pt-[10px] pb-[10px] ps-3 pe-1 overflow-x-scroll'>
              {
                categories.map((category, index) => {
                  if (category.largeCategoryName === '') {
                    return null;
                  }
                  return (
                    <li key={index-1}>
                      <p
                        ref={buttonRefs.current[category.largeCategoryId] as object as LegacyRef<HTMLParagraphElement>}
                        onClick={() => handleCategoryClick(category.largeCategoryName, category.largeCategoryId)}
                        className={`min-w-min h-[36px] text-xs font-semibold border mr-[5px] pl-2 pr-2 pt-2 align-middle 
                        ${isSelected === category.largeCategoryName ? 'bg-black text-white border-black' : 'bg-white text-xs  text-black border-gray-200'}`}>
                        {category.largeCategoryName}
                      </p>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
      <InfinityProductList
        apiType={'large-category-paged'}
        id={ctgId}
      />
    </>
  )
}