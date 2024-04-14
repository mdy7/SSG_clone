'use client'
import Link from 'next/link';
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

import NaverIcon from '@/images/svgs/NaverIcon';
import { signIn } from 'next-auth/react';

export default function SocialLoginButton() {
  const param = useSearchParams();
  console.log(param.get('callbackUrl'))
  const callbackUrl = param.get('callbackUrl');

  return (
    <Suspense>
      <div className="w-full h-[75px] flex items-center justify-center mb-10 mt-10">
        {/* <div className="cursor-pointer w-full h-[75px] flex flex-col items-center justify-center">
          <Link href="/join/formemail">
            <div className="w-[51px] h-[51px] rounded-full bg-loginIcon bg-[position:-61px_0px] bg-[length:173px_173px]">
            </div>
            <div className="text-center text-neutral-600 text-xs font-normal font-['Nanum Gothic'] mt-[6px]">이메일</div>
          </Link>
        </div> */}
        <div className="cursor-pointer w-full h-[75px] flex flex-col items-center justify-center">
          <div onClick={() => signIn('kakao', {
            redirect: true,
            callbackUrl: callbackUrl ? callbackUrl : '/',
          })}>
            <div className="w-[51px] h-[51px] rounded-full bg-loginIcon bg-[position:-61px_-61px] bg-[length:173px_173px]">
            </div>
            <div className="text-center text-neutral-600 text-xs font-normal font-['Nanum Gothic'] mt-[6px]">카카오</div>
          </div>
        </div>
        {/* <div className="w-full h-[75px] flex flex-col items-center justify-center">
          <div className="w-[51px] h-[51px] rounded-full">
            <NaverIcon />
          </div>
          <div className="text-center text-neutral-600 text-xs font-normal font-['Nanum Gothic'] mt-[6px]">네이버</div>
        </div> */}
      </div>
    </Suspense>
  )
}
