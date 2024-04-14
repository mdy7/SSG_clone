import Link from 'next/link';
import React from 'react';

import SmallArrowIcon from '@/images/svgs/SmallArrowIcon';

function page() {
    return (
        <div className='w-full h-[680px] pb-5 pt-5 pr-[30px] pl-[30px]'>
            <div className='w-full h-[371px]'>
                <ul className='w-full h-[21px] mt-5 text-center'>
                    <li className='ml-[15px] mr-[15px]'>
                        <span className='text-center text-[15px] pl-[26px]'>
                            <input type='radio'></input>
                            <label>주문배송조회</label>
                        </span>
                    </li>
                </ul>

                <div className='w-full h-[310px]'>
                    <div className='w-full h-[310px] mt-10'>
                        <div className='w-full h-[310px]'>
                            <div className='w-full h-35 flex-col'>
                                <span className='w-full h-10 mt-[10px]'>
                                    <input className="w-full h-[40px] bg-white border border-stone-300 mt-[10px] flex pt-[10px] pb-[10px] pl-[11px] pr-[11px]" placeholder='주문자명'></input>
                                </span>
                                <span className='w-full h-10 mt-[10px]'>
                                    <input className="w-full h-[40px] bg-white border border-stone-300 mt-[10px] flex pt-[10px] pb-[10px] pl-[11px] pr-[11px]" placeholder='휴대폰 번호 (＂-＂ 없이 입력)'></input>
                                </span>
                                <span className='w-full h-10 mt-[10px]'>
                                    <input className="w-full h-[40px] bg-white border border-stone-300 mt-[10px] flex pt-[10px] pb-[10px] pl-[11px] pr-[11px]" placeholder='주문번호(＂-＂ 없이 입력)'></input>
                                </span>
                            </div>

                            <div className='w-full h-[50px] mt-[30px] flex justify-center conitems-center'>
                                <button className="w-full bg-white text-black border border-black py-2">취소</button>
                                <button className="w-full bg-black text-white border border-black py-2">조회하기</button>
                            </div>

                            <div className='w-full h-15 mt-5'>
                                <ul className='list-disc list-outside text-neutral-500 font-sans text-xs font-normal leading-[17px] pl-5'>
                                    <li className='pl-2 pt-2'>상품 주문 시 입력한 주문자 정보로 조회가 가능합니다.</li>
                                    <li className='pl-2 pt-2'>여행 상품은 [여행 예약 조회]에서 확인하실 수 있습니다.</li>
                                    <li className='pl-2 pt-2'>주문번호를 모르시는 경우 고객센터(1577-3419)로 문의해주세요.</li>
                                </ul>
                            </div>

                            <div className='w-full h-[62.4px] mt-[100px] text-center'>
                                <div className='w-full h-10 text-neutral-500 font-sans text-xs font-normal whitespace-nowrape'>
                                    SSG.COM 회원가입을 하시면 더 많은 혜택을 받으실 수 있습니다.
                                </div>
                                <div className='flex justify-center'>
                                    <Link href='/join' className='w-[74.09px] h-5 border-b border-black text-xs flex gap-1 items-center justify-center'>
                                        <span>회원가입</span>
                                        <div className='w-3 h-3'>
                                            <SmallArrowIcon />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page
