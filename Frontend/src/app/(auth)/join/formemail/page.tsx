'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

function JoinPage() {
  const router = useRouter();
  const email = useSearchParams();
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedOption, setSelectedOption] = useState('010');
  const [passwordCheck, setPasswordCheck] = useState('')
  const [passwordError, setPasswordError] = useState(false)

  const handlePasswordCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(e.target.value);
    if (password !== e.target.value) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (passwordError) {
      alert('비밀번호가 일치하지 않습니다.');
      return 0;
    }
    const fullPhoneNumber = `${selectedOption}${phoneNumber}`;

    const userData = {
      email: email.get('email'),
      password,
      name,
      phoneNumber: fullPhoneNumber,
    };

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/join`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if(data.success){
      router.push('/memberlogin');
    }
  };

  function openPopup(url: string) {
    window.open(url, 'newwindow', 'width=615,height=689');
    return false;
  }

  return (
    <div className='w-full h-[948.6px] flex-col justify-center items-center'>
      <form onSubmit={handleSubmit}>
        <div className='w-full h-[51px] px-5 py-[15px] text-zinc-600 text-[13px] font-nomal font-sans-serif bg-zinc-100'><h3>약관동의</h3></div>
        <div className='w-full h-[166.6px] px-5'>
          <div className='w-full h-[55px] py-[15px]'>
            <div className='w-full h-[25px] flex justify-between'>
              <span className='w-full h-[18px] mr-22 flex'>
                <input type='checkbox' id="ssgagree1" className='w-[18px] h-[18px] rounded-sm'></input>
                <label className='w-full h-full pl-2 font-sans-serif text-[12px]'>(필수) SSG.COM 회원 이용약관</label>
              </span>
              <a href='' onClick={() => openPopup('/policies')} className='w-[68px] h-[22px] border-[0.8px] border-neutral-800 font-sans-serif text-[11px] text-center flex items-center justify-center tracking-tighter'>내용보기</a>
            </div>
          </div>
          <div className='w-full h-[55px] py-[15px] border-t-[0.8px] border-neutral-200'>
            <div className='w-full h-[25px] flex justify-between'>
              <span className='w-full h-[18px] mr-22 flex'>
                <input type='checkbox' id="ssgagree1" className='w-[18px] h-[18px] rounded-sm'></input>
                <label className='w-full h-full pl-2 font-sans-serif text-[12px]'>(필수) SSG.COM 회원 개인정보 수집 및 이용동의</label>
              </span>
              <a href='' target='_blank' className='w-[68px] h-[22px] border-[0.8px] border-neutral-800 font-sans-serif text-[11px] text-center flex items-center justify-center tracking-tighter'>내용보기</a>
            </div>
          </div>
          <div className='w-full h-[55px] py-[15px] border-t-[0.8px] border-neutral-200'>
            <div className='w-full h-[25px] flex justify-between'>
              <span className='w-full h-[18px] mr-22 flex'>
                <input type='checkbox' id="ssgagree1" className='w-[18px] h-[18px]'></input>
                <label className='w-full h-full pl-2 font-sans-serif text-[12px]'>(필수) 만 14세 이상 회원입니다.</label>
              </span>
            </div>
          </div>
        </div>
        <div className='w-full h-[51px] px-5 py-[15px] text-zinc-600 text-[13px] font-normal font-sans-serif bg-zinc-100'><h3>회원정보</h3></div>
        <div className='w-full h-[318.4px] px-2 flex-col justify-center items-center'>
          <div className='w-full h-14 py-2'>
            <dl className='w-full h-10 font-sans-serif text-zinc-600 font-normal text-[13px] flex'>
              <dt className='w-[87px] h-10 pl-[7px] pt-[9px]'><span className='text-red-500 font-sans-serif'>*</span>아이디</dt>
              <dd className='w-full'>
                <div className='w-full h-10 justify-between items-center pl-4'>
                  <span className='flex gap-2'>
                    <input type='email'
                      value={email.get('email') || ''}
                      name="email"
                      className="w-full h-10 py-[10px] px-[11px] border-[0.8px] border-neutral-300 font-sans-serif"
                      placeholder='이메일주소 입력'
                      disabled={true}></input>
                  </span>
                </div>
              </dd>
            </dl>
          </div>
          <div className='w-full h-[130.8px] pt-[10px] pb-[20px] flex justify-center items-center border-t-[0.8px] border-neutral-200'>
            <dl className='w-full h-[90px] font-sans-serif text-zinc-600 font-normal text-[13px] flex'>
              <dt className='w-[87px] h-10 pl-[7px] pt-[9px] font-sans-serif'><span className='text-red-500 font-sans-serif'>*</span>비밀번호</dt>
              <dd className='w-full flex-col justify-between items-center'>
                <div className='w-full h-10 pr-25 justify-center items-center mb-[10px] pl-4'>
                  <span><input type='text'
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    className="w-full h-10 py-[10px] px-[11px] border-[0.8px] border-neutral-300 font-sans-serif"
                    placeholder='영문, 숫자 조합 8~20자리'></input></span>
                </div>
                <div className='w-full h-10 pr-25 justify-center items-center pl-4'>
                  <span><input type='text'
                    onChange={handlePasswordCheckChange}
                    className="w-full h-10 py-[10px] px-[11px] border-[0.8px] border-neutral-300 font-sans-serif"
                    placeholder='비밀번호 재확인'></input></span>
                  {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
                </div>

              </dd>
            </dl>
          </div>

          <div className='w-full h-[70.8px] py-[15px] flex justify-center items-center border-t-[0.8px] border-neutral-200'>
            <dl className='w-full h-10 font-sans-serif text-zinc-600 font-normal text-[13px] flex'>
              <dt className='w-[87px] h-10 pl-[7px] pt-[9px] font-sans-serif'><span className='text-red-500 font-sans-serif'>*</span>이름</dt>
              <dd className='w-full'>
                <div className='w-full h-10 pr-25 justify-center items-center pl-4'>
                  <span><input type='text'
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    className="w-full h-10 py-[10px] px-[11px] border-[0.8px] border-neutral-300"></input></span>
                </div>
              </dd>
            </dl>
          </div>

          <div className='w-full h-[70.8px] py-[15px] flex justify-center items-center border-t-[0.8px] border-neutral-200'>
            <dl className='w-full h-10 font-sans-serif text-zinc-600 font-normal text-[13px] flex'>
              <dt className='w-[87px] h-10 pl-[7px] pt-[9px] pr-2 font-sans-serif whitespace-nowrap'><span className='text-red-500 font-sans-serif'>*</span>휴대폰 번호</dt>
              <dd className='w-full'>
                <div className='w-full h-10 justify-center items-center'>
                  <span className='flex gap-2'>
                    <select
                      name="selectedOption"
                      className="w-[100px] h-10 py-[10px] px-[11px] border-[0.8px] border-neutral-300 font-sans-serif"
                      value={selectedOption}
                      onChange={(e) => setSelectedOption(e.target.value)}>
                      <option value="010">010</option>
                      <option value="011">011</option>
                      <option value="016">016</option>
                      <option value="017">017</option>
                      <option value="018">018</option>
                      <option value="019">019</option>
                    </select>
                    <input type='text'
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      name="phoneNumber"
                      className="w-full h-10 py-[10px] px-[11px] border-[0.8px] border-neutral-300 font-sans-serif"
                      placeholder='휴대폰 뒷자리'></input></span>
                </div>
              </dd>
            </dl>
          </div>
        </div>
        <div className='w-full h-[51px] px-5 py-[15px] text-zinc-600 text-[13px] font-nomal font-sans-serif bg-zinc-100'><h3>마케팅 정보 수신 동의</h3></div>
        <div className='w-full h-[206.6px] px-5'>
          <div className='w-full h-[55px] py-[15px]'>
            <div className='w-full h-[25px] flex justify-between'>
              <span className='w-full h-[18px] mr-22 flex'>
                <input type='checkbox' id="infoRcvAgree" name="mbrAddtInfoAgreeDto.agreeYn" className='w-[18px] h-[18px] rounded-sm'></input>
                <label className='w-full h-full pl-2 font-sans-serif text-[12px]'><strong>(선택)</strong> 마케팅 정보 제공을 위한 개인정보 수집 및 이용 동의</label>
              </span>
              <a href=''
                className='w-[68px] h-[22px] border-[0.8px] border-neutral-800 font-sans-serif text-[11px] text-center flex items-center justify-center tracking-tighter'>내용보기</a>
            </div>
            <ul className='w-full h-[46.8px] pt-[15px] pl-[17px] border-t-[0.8px] border-neutral-300 mt-[15px]'>
              <li>
                <span className='w-[55.13px] h-[18px] pl-2 flex-row'>
                  <input type='checkbox' id="email" name="emxailRcYn" value="Y" className='w-[18px] h-[18px] rounded-sm'></input>
                  <label className='text-[12px] pl-1 font-sans-serif text-center items-center justify-center pr-2 font-sans-serif'>이메일</label>
                  <input type='checkbox' id="sms" name="smsRcYn" value="Y" className='w-[18px] h-[18px] rounded-sm'></input>
                  <label className='text-[12px] pl-1 font-sans-serif text-center items-center justify-center pr-2 font-sans-serif'>문자</label>
                </span>
              </li>
            </ul>
            <p className='w-full h-[39px] mx-[6px]'>
              <em className='h-[34.7px] text-[12px] text-red-500 leading-[17px] font-sans-serif'>마케팅 정보 수신 동의를 하시면 SSG.COM 상품 · 서비스 및 이벤트 정보를 받으실 수 있습니다.</em>
            </p>
            <div className='w-full h-[69.8px] py-[15px] border-t-[0.8px] border-neutral-300 mt-[15px] font-sans-serif text-[12px]'><p><strong>선택 항목에 동의하지 않더라도 SSG.COM 회원가입 및 기본 서비스를 이용하실 수 있습니다.</strong></p></div>
          </div>
        </div>
        <div className="w-full h-full mb-[30px]">
            <button type='submit' className="w-full h-[50px] bg-rose-500 flex justify-center items-center">
              <div className="text-white text-base font-medium font-sans-serif">확인</div>
            </button>
        </div>
      </form>
    </div>
  )
}

export default JoinPage
