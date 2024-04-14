import React from 'react';

interface titleProps {
  title: string
}

export default function ProductDetailInfoTitle({title}: titleProps) {
  return (
    <div className='relative ml-4 text-[17px] mb-[15px] pt-10 shadow-inset shadow-gray-200 '>
      <h3 className='relative inline-block pt-[10px] font-bold border-b-2 border-gray-900'>
        {title}
      </h3>
    </div>
  )
}
