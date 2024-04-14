import FillStarIcon from '@/images/svgs/FillStarIcon'
import React from 'react'

export default function ReviewStat() {
    return (
        <div className='flex flex-row items-center text-xs mt-1 whitespace-nowrap text-gray-400'>
            <div className='w-3'>
                <FillStarIcon />
            </div>
            <p className='mt-0 me-0 mb-0 ms-1'>
                <span className='border-0 w-[1px] h-[1px] -my-px -mx-px px-0 py-0 overflow-hidden whitespace-nowrap absolute'>리뷰 별점</span>
                4.5
                <span className='border-0 w-[1px] h-[1px] -my-px -mx-px px-0 py-0 overflow-hidden whitespace-nowrap absolute'>점</span>
            </p>
            <div className='w-[1px] h-[11px] pr-2'></div>
            <p>
                <span className='border-0 w-[1px] h-[1px] -my-px -mx-px px-0 py-0 overflow-hidden whitespace-nowrap absolute'>리뷰 갯수</span>
                61건
            </p>
        </div>
    )
}
