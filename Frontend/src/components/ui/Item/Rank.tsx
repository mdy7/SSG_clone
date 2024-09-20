import React from 'react'

export default function Rank() {
  return (
    <div className='flex absolute justify-between pointer-events-none top-0 right-0 left-0'>
            <div className='flex-shrink-0 max-w-[100%] ml-auto'>
              <div className='flex flex-row items-center'>
                <div className='flex items-center align-top h-[1.25rem] pr-[0.25rem] text-[10px] bg-white text-red-600'>
                  ▲1
                  <span className='border-0 h-[1px] w-[1px] -my-[1px] -ml-[1px] -mr-[1px] overflow-hidden text-nowrap absolute p-0 collapse'>순위변동정보</span>
                </div>
                <div className='flex justify-center items-center w-5 h-5 p-[6px] bg-gray-600 text-white text-[11px] font-medium'>
                  1
                  <span className='border-0 h-[1px] w-[1px] -my-[1px] -ml-[1px] -mr[1px] p-0 overflow-hidden absolute'>위</span>
                </div>
              </div>
            </div>
          </div>
  )
}
