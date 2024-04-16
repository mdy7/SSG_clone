'use client'

import React, { useState } from 'react';

import TabListUi from '../ui/TabListUi';

export default function TabList({TablistTitles}:{ TablistTitles: {title: string, subtitle?:string}[] }) {
  const [expandedTab, setExpandedTab] = useState<number | null>(0);

  return (
    <div className='w-full h-[76px]'>
      <div className='w-full h-[76px] px-4'>
        <div className='w-full h-full py-[10px]'>
          <ul className='w-full h-full flex justify-center items-center list-none text-[12px] gap-2'>
            {TablistTitles.map((item, index) => (
              <TabListUi 
              key={index} 
              title={item.title}
              subtitle={item.subtitle}
              titleUrl='/specialprice'
              isExpanded={expandedTab === index}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
