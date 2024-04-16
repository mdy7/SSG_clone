'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function page() {
    const router = useRouter();

    return (
        <div className="w-[100vw] h-[100vw] relative">
            <div className="absolute top-[28%] bottom-[50%] transform text-center w-full px-[30px]">
                <div className="max-w-[140px] mx-auto">
                    <div className='text-9xl text-yellow-500'>⚠</div>
                </div>
                <div className="font-sans leading-none">
                    <h1 className="text-xl font-bold">준비중인<br />페이지입니다.</h1>
                    <Link href="/"
                        className="flex justify-center items-center bg-black rounded-[8px] text-[15px] h-[52px] mt-[30px] m-auto max-w-[315px] text-white"><button onClick={(e) => {
                            e.preventDefault();
                            router.back()
                        }}>이전페이지로 돌아가기</button></Link>
                </div>
            </div>
        </div>
    )
}
