'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import RedButton from '../Buttons/RedButton';
import { RequestAuthType } from '@/types/RequestAuthType';
import { VerifyAuthType } from '@/types/VerifyAuthType';

export default function AuthInput() {

    const router = useRouter();
    const [isCodeInputVisible, setIsCodeInputVisible] = useState(false);
    const [buttonTitle, setButtonTitle] = useState('인증번호 요청');

    const [requestPayload, setRequestPayload] = useState<RequestAuthType>({
        email: '',
    })

    const [verifyPayload, setVerifyPayload] = useState<VerifyAuthType>({
        email: '',
        authCode: ''
    })

    const requestAuthCode = async (e: React.FormEvent<HTMLFormElement>) => {
        // 인증번호 요청 API 호출 코드...
        e.preventDefault()
        if (!requestPayload.email) {
            return alert('이메일을 입력해주세요.')
        }
        console.log(requestPayload)
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: requestPayload.email,
            })
        });

        if (response.ok) {
            // 응답 처리
            const data = await response.json();
            console.log(data);

        } else {
            // 오류 처리
            console.error('HTTP error', response.status);
        }
    }

    const verifyAuthCode = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // 인증번호 확인 API 호출 코드...
        await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/email?email=${requestPayload.email}&code=${verifyPayload.authCode}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.success === true) {
                    alert('인증에 성공했습니다.')
                    router.push(`/join/formemail?email=${requestPayload.email}`)
                }
            })
            .catch(error => console.error('Error:', error));
    }

    const handleClick = (e: React.FormEvent<HTMLFormElement>) => {

        if (buttonTitle === '인증번호 요청') {
            requestAuthCode(e);
            setIsCodeInputVisible(true);
            setButtonTitle('확인');
        } else if (buttonTitle === '확인') {
            verifyAuthCode(e);
        }

    }

    const onChangeRequestPayload = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRequestPayload({
            ...requestPayload,
            [e.target.name]: e.target.value
        })
    }

    const onChangeVerifyPayload = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVerifyPayload({
            ...verifyPayload,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='w-full h-[253.2px] mt-5'>
            <div className=''>
                <form onSubmit={handleClick}>
                    <div className='w-full h-[50px] table pt-[13px] pb-[15px]'>
                        <span>
                            <input type='email' placeholder='이메일' className='w-full text-[14px] pt-[13px] pb-3 px-[15px] border-b-[1.5px]' onChange={onChangeRequestPayload} name="email" />
                        </span>
                        {isCodeInputVisible && (
                            <span>
                                <input type='text' placeholder='인증번호' className='w-full text-[14px] pt-[13px] pb-3 px-[15px] border-b-[1.5px]' onChange={onChangeVerifyPayload} name="authCode" />
                            </span>
                        )}
                            <RedButton title={buttonTitle} />
                    </div>
                </form>
            </div>
        </div>
    )
}
