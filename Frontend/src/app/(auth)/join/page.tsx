import Link from 'next/link';
import React, { Suspense } from 'react';

import Footer from '@/components/layouts/Footer';
import SimpleHeader from '@/components/layouts/SimpleHeader';
import SocialLoginButton from '@/components/ui/Buttons/SocialLoginButton';

export default function page() {
    return (
        <Suspense>
            <div>
                <SimpleHeader title='회원가입' />
                <div className="w-full h-[900px] font-sans leading-tight mb-10">
                    <div className="w-full h-[704px]">
                        <div className='w-full h-[122px] pt-10 pb-[30px] px-5'>
                            <p className='block whitespace-nowrap text-[18px] font-bold font-["Pretendard"]'>믿고 사는 즐거움</p>
                            <p className='block whitespace-nowrap text-[18px] font-bold font-["Pretendard"]'>SSG.COM에 오신것을 환영합니다.</p>
                        </div>
                        <div className='w-full h-[51px] py-[15px] px-5 bg-zinc-100'>
                            <h3 className='text-[13px] text-neutral-500 text'>신세계포인트 통합회원</h3>
                        </div>
                        <p className='text-[13px] px-5 mt-5 text-wrap text-slate-950 whitespace-nowrap'>
                            신세계 유니버스 클럽 3개월 무료 체험이 제공됩니다.
                            <br />
                            매월 제공되는 쿠폰 받으시고 알뜰하게 쇼핑하세요!
                        </p>
                        <p className='text-[13px] px-5 mt-2 text-wrap text-slate-950 whitespace-nowrap'>* 멤버십은 3개월 후 자동 해지 됩니다.</p>
                        <div className='w-full h-[436px] px-5'>
                            <ul className='w-full h-[302px] mt-4 mb-5 px-10 pt-8 pb-[30px] bg-zinc-100'>
                                <li className='flex items-center'>
                                    <span className='w-[109px] h-20 bg-[url("https://sui.ssgcdn.com/ui/m_ssg/img/member/img_member_intro_asset_03@3x.png")] bg-no-repeat bg-[postion:0px_0px] bg-[length:109px_80px]'></span>
                                    <span className='h-auto block text-[13px]'>
                                        멤버십 신규 가입 축하
                                        <br />
                                        1만원 할인 쿠폰
                                    </span>
                                </li>
                                <li className='flex items-center'>
                                    <span className='w-[109px] h-20 bg-[url("https://sui.ssgcdn.com/ui/m_ssg/img/member/img_member_intro_asset_01@3x.png")] bg-no-repeat bg-[postion:0px_0px] bg-[length:109px_80px]'></span>
                                    <span className='h-auto block text-[13px]'>
                                        매월 전상품
                                        <br />
                                        7% 할인 쿠폰
                                    </span>
                                </li>
                                <li className='flex items-center'>
                                    <span className='w-[109px] h-20 bg-[url("https://sui.ssgcdn.com/ui/m_ssg/img/member/img_member_intro_asset_02@3x.png")] bg-no-repeat bg-[postion:0px_0px] bg-[length:109px_80px]'></span>
                                    <span className='h-auto block text-[13px]'>
                                        매월 전상품
                                        <br />
                                        5% 할인 쿠폰
                                    </span>
                                </li>
                            </ul>
                            <div className='w-full h-[114px] mt-[10px] mb-[30px]'>
                                <Link href='#' className='w-full h-[52px] px-3 bg-red-500 text-white text-center font-bold text-[16px] box-border py-2 flex items-center justify-center'>멤버십 혜택 받고 통합회원 가입하기</Link>
                                <Link href='/join/auth' className='w-full h-[52px] px-3 bg-gray-300 text-white text-center font-bold text-[16px] box-border py-2 flex items-center justify-center mt-[10px]'>통합회원만 가입하기</Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[166px]'>
                        <div className='w-full h-[51px] py-[15px] px-5 bg-zinc-100 mt-[30px]'>
                            <h3 className='text-[13px] text-neutral-500 text'>간편회원</h3>
                        </div>
                        <SocialLoginButton />
                    </div>
                </div>
                <Footer />
            </div>
        </Suspense>
    )
}
