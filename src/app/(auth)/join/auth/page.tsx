'use client'
import Link from 'next/link'
import React, { useState } from 'react'

import AuthModal from '@/components/modal/AuthModal';

export default function AuthPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            {isModalOpen && <AuthModal closeModal={closeModal} />}
            <div className='w-full h-[450px] whitespace-nowrap text-wrap font-sans'>
                <div className='w-full h-[51px] py-[15px] px-5 bg-zinc-100'>
                    <h3 className='text-[13px] text-neutral-500 text'>본인인증</h3>
                </div>
                <div className='w-full h-[234px] my-[30px] px-5'>
                    <p className='text-[12px] text-center'>자주 사용하시는 인증 수단으로 본인인증을 진행해주세요.</p>
                    <div className='w-full h-[110px] mt-[10px]' onClick={openModal}>
                        <span className='w-full h-[112.4px]'>
                            <Link href={'#'} className='w-full h-[102.4px] block text-[14px] text-center border-zinc-100 border-2 box-border pt-[18px]'>
                                <p className='block w-[35px] h-11 bg-[url("https://sui.ssgcdn.com/ui/m_ssg/img/sp_cmem_certi.png")] bg-[length:83px_44px] bg-[position:0px_0px] mb-[10px] mx-auto' />이메일 인증</Link>
                        </span>
                    </div>
                    <ul className='mt-5 text-[11px] text-left list-disc px-4'>
                        <li className='text-zinc-500'>법인폰 사용자는 법인폰 개인인증 서비스 신청 후 휴대폰 인증을 하실 수 있습니다.</li>
                        <li className='text-zinc-500'>본인인증이 잘 되지 않으시면 본인인증기관 고객센터로 문의 해주세요.
                            <br />
                            <span className='font-bold'>NICE평가정보(주) 고객센터 : 1600-1522
                                <br />
                                코리아크레딧뷰로(주) 고객센터 : 02-708-1000
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
