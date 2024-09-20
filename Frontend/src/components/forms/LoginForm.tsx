'use client'
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

import { LoginFormType } from "@/types/formType";
import SocialLoginButton from "../ui/Buttons/SocialLoginButton";

export default function LoginForm() {
  const { data: session } = useSession();
  const param = useSearchParams();
  const router = useRouter();
  // console.log(param.get('callbackUrl'))
  const callbackUrl = param.get('callbackUrl');
  // console.log('session:', session);
  
  if(session) {
    alert('이미 로그인 되어있습니다.')
    router.push(callbackUrl ? callbackUrl : '/')
  }
  useEffect(() => {
    // console.log("session:",session)
  }, [session])

  const [payload, setPayload] = useState<LoginFormType>({
    email: '',
    password: ''
  })

  const logInSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!payload.email && !payload.password) {
      return alert('아이디와 비밀번호를 입력해주세요.')
    }
    // console.log("payload:", payload)
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    // console.log("res:", res)
    const data = await res.json()
    if(!data.success) {
      return alert('아이디와 비밀번호를 확인해주세요.')
    }

    signIn('credentials', {
      email: payload.email,
      password: payload.password,
      redirect: true,
      callbackUrl: callbackUrl ? callbackUrl : '/',
    })
  }

  const onChangePayload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value
    })
  }
  return (
    <Suspense>
      <div className="w-full h-[641.5px] flex-col flex justify-center items-center pt-10 pl-5 pb-5 pr-5">
        <div className="w-full h-[239.7]">
          <form onSubmit={logInSubmit}>
            <input type="email"
              className="w-full h-[48.50px] bg-white border border-stone-300 flex pt-[15px] pb-[15px] pl-3 pr-3 text-sm"
              placeholder="아이디" onChange={onChangePayload} name="email" />
            <input type="password"
              className="w-full h-[48.50px] bg-white border border-stone-300 flex pt-[15px] pb-[15px] pl-3 pr-3 text-sm"
              placeholder="비밀번호" onChange={onChangePayload} name="password" />
            <div className="flex mt-[10px] pl-[15px]">
              <input type="checkbox" />
              <div className="text-neutral-800 text-sm font-normal font-['Inter'] pl-[7px]">아이디 저장</div>
            </div>

            <div className="w-full">
              <button type="submit" className="w-full h-[50px] bg-rose-500 flex justify-center items-center mt-[30px]">
                <div className="text-white text-base font-medium font-['Inter']">로그인</div>
              </button>

              <div className="w-full h-[38px] bg-white flex justify-center items-center mt-13">
                <div className="text-neutral-600 text-sm font-normal font-['Nanum Gothic'] pl-[7px] pr-[7px]">아이디 찾기</div>
                <div className="text-neutral-600 text-sm font-normal font-['Nanum Gothic']">|</div>
                <div className="text-neutral-600 text-sm font-normal font-['Nanum Gothic'] pl-[7px] pr-[7px]">비밀번호 찾기</div>
                <div className="text-neutral-600 text-sm font-normal font-['Nanum Gothic']">|</div>
                <div className="text-neutral-600 text-sm font-normal font-['Nanum Gothic'] pl-[7px] pr-[7px]"><Link href={"/join"}>회원가입</Link></div>
              </div>
            </div>
          </form>
        </div>
        <SocialLoginButton />
        <div className="w-full h-[126.8px] mt-[60px]">
          <button className="w-full h-[40px] bg-black flex justify-center items-center pb-[12px] pt-[12px]">
            <Link href="/nonmemberlogin">
              <div className="text-center text-white text-[13px] font-semibold font-['Nanum Gothic']">비회원 조회하기</div>
            </Link>
          </button>
        </div>
      </div>
    </Suspense>
  );
}