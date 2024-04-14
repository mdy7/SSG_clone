import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ReviewProduct() {
    return (
        <div className='w-full h-[65.8px] pb-[15px] px-[15px] mt-[15px] border-b-2 border-zinc-100'>
            <div className='w-full h-[50px] flex flex-row items-center justify-left'>
                <Image src='https://sitem.ssgcdn.com/50/63/05/item/1000518056350_i1_100.jpg' alt='설명' width={50} height={50} />
                <div className='max-w-[85%] h-full pl-[15px] flex justify-center items-center'>
                    <div className='max-w-full flex-grow h-[18.4px] truncate'>
                        <Link href="/products/detail/1">
                            <span className='font-sans text-sm text-zinc-400'>브리츠 P20GX 게이밍 커널형 유선 이어폰 3.5mm 음악감상</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
