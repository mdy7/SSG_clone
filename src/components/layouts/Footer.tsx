'use client'

import Link from 'next/link';

import { signOut, useSession } from 'next-auth/react';

export default function Footer() {
  const { data:session } = useSession();
  // console.log("session:",session);

  return (
    <footer className='pb-[120px] text-left justify-center items-center'>
      <div className="w-full h-[53px] bg-zinc-500">
        <div className='w-full h-[53px] flex justify-between p-3 items-center'>
          <div className="text-white text-[10px] font-sans">
            <p className='flex justify-center gap-2'>
              <span className='block w-[29px] h-[27px] bg-[url("https://sui.ssgcdn.com/ui/m_ssg/img/v2/sp_footer.png")] bg-no-repeat bg-[length:50px_auto] bg-[position:0px_0px]]'></span>
              <span>
              <span>
                SSG.COM 고객센터 / 전자금융거래 분쟁처리
              </span>
              <br />
              <span>1577-3419 /</span>
              <span>ssg@ssg.com</span>
              </span>
            </p>
          </div>
          <div className="flex justify-center p-1 flex-wrap font-sans">
            <div className="w-[58.38px] h-[22px] bg-neutral-500 rounded-[3px] border border-zinc-600 flex justify-center items-center text-center text-white text-[10px]" >
              <a>전화걸기</a>
            </div>
            <div className="w-[71.99px] h-[22px] bg-neutral-500 rounded-[3px] border border-zinc-600 flex justify-center items-center text-white text-[10px]">
              <a>1:1 고객센터</a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[32.50px] bg-gray-300 bg-opacity-75 flex justify-center items-center">
        <ul className='flex text-neutral-500 text-[11px] font-sans p-1'>
          <li>
            {session ? <Link
              href={'/'}
              className='ml-3 mr-3 py-2'>
              홈
            </Link> : <Link
              href={'/memberlogin'}
              className='ml-3 mr-3 py-2'>
              로그인
            </Link>}
          </li>
          <span className='pl-1 mr-1'>|</span>
          <li>{session ? <span onClick={() => signOut()}
              className='ml-3 mr-3 py-2 cursor-pointer'>
              로그아웃</span> :
            <Link
              href={'/join'}
              className='ml-3 mr-3 py-2'>
              회원가입
            </Link>}
          </li>
          <span className='pl-1 mr-1'>|</span>
          <li>
            <Link
              href={'#'}
              className='ml-3 mr-3 py-2'>
              앱다운로드
            </Link>
          </li>
          <span className='pl-1 mr-1'>|</span>
          <li>
            <Link
              href={'#'}
              className='ml-3 mr-3 py-2'>
              PC버전
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full h-[284px] pl-5 pr-5">
        <div className="text-neutral-500 text-[10px] font-sans mt-2">
          <span className='text-[11px]'>
            (주)에스에스지닷컴
          </span>
          <address className='not-italic'>
            대표자: 이인영
            <span className='pl-1 pr-1'>|</span>
            사업자등록번호: 870-88-01143
            <br />
            통신판매업 신고번호: 제2022-서울강남-03751호
            <a
              href='#'
              className='pl-1 underline decoration-1'>
              사업자 정보확인
            </a>
            <br />
            개인정보보호 책임자: 김우진
            <span className='pl-1 pr-1'>|</span>
            주소: 서울특별시 강남구 테헤란로 231
            <br />
            호스팅서비스 사업자 : (주)에스에스지닷컴
          </address>
        </div>
        <div className="my-5 w-[350px] h-[43px] text-neutral-700 text-[10px] font-sans">
          <p className='text-[11px]'>
            우리은행 채무지급보증 안내
            <a
              href='#'
              className='pl-1 underline decoration-1'>
              서비스가입사실 확인
            </a>
          </p>
          <p className='w-[350px] h-3.5'>
            당사는 고객님이 현금 결제한 금액에 대해 우리은행과
            채무지급 보증 계약을 체결하여 안전거래를 보장하고 있습니다.
          </p>
        </div>
        <div className="w-full h-[30px]">
          <ul className='flex flex-row flex-wrap text-zinc-500 text-[9.5px] font-sans'>
            <li>
              <span>회사소개</span>
            </li>
            <span className='pl-1 mr-1'>|</span>
            <li>
              <span>이용약관</span>
            </li>
            <span className='pl-1 mr-1'>|</span>
            <li>
              <span className='text-red-600'>개인정보처리방침</span>
            </li>
            <span className='pl-1 mr-1'>|</span>
            <li>
              <span>청소년보호방침</span>
            </li>
            <span className='pl-1 mr-1'>|</span>
            <li>
              <span>소비자분쟁해결기준</span>
            </li>
            <span className='pl-1 mr-1'>|</span>
            <li>
              <span>입점상담</span>
            </li>
          </ul>
        </div>
        <div className="w-full h-[101px] mt-[10px] pr-[40px] text-zinc-500 text-[10px] font-normal font-['Nanum Gothic']">
          <div className="w-full h-[42px] ">
            <p>㈜에스에스지닷컴은 SSG.COM 실시간 항공권 서비스의 통신판매중개자로서 거래 당사자가 아니며, 입점 판매사가 등록한 상품 정보 및 거래에 대해 책임을 지지 않습니다.</p>
          </div>
          <div className="w-full h-[42px]">
            <p>㈜에스에스지닷컴 사이트의 상품/판매자/쇼핑정보, 컨텐츠, UI 등에 대한 무단 복제, 전송, 배포, 스크래핑 등의 행위는 저작권법, 콘텐츠사업 진흥법 등에 의하여 엄격히 금지됩니다.</p>
          </div>
          <div className="w-full h-[13px] mt-1">
            <p>Copyright ⓒ SSG.COM Corp. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
