import ReviewForm from '@/components/layouts/ReviewForm'
import SimpleHeader from '@/components/layouts/SimpleHeader'
import ReviewProduct from '@/components/ui/Review/ReviewProduct'
import React from 'react'

export default function page() {
    return (
        <div>
            <ReviewProduct />
            <div className='h-[68.5px] py-8 px-12 font-sans font-bold'>
                <div className='flex gap-2 mb-8 items-center justify-center'>
                    <span className='w-[18px] h-[18px] bg-sp_myssg_review bg-[position:-27px_-161px] bg-[length:220px_179px]'></span>
                    <span className='w-[18px] h-[18px] bg-sp_myssg_review bg-[position:-27px_-161px] bg-[length:220px_179px]'></span>
                    <span className='w-[18px] h-[18px] bg-sp_myssg_review bg-[position:-56px_-161px] bg-[length:220px_179px]'></span>
                    <span className='w-[18px] h-[18px] bg-sp_myssg_review bg-[position:-56px_-161px] bg-[length:220px_179px]'></span>
                    <span className='w-[18px] h-[18px] bg-sp_myssg_review bg-[position:-56px_-161px] bg-[length:220px_179px]'></span>
                </div>
            </div>
            <ReviewForm h3color='text-red-500'/>
        </div>
    )
}
