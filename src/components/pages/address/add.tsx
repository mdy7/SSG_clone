'use client'
import React, { useState } from 'react';
import DaumPostcodeEmbed from 'react-daum-postcode';

import SimpleHeader from '@/components/layouts/SimpleHeader';

interface AddaddressProps {
    modalOpen: boolean
    setModalOpen: (value: boolean) => void
    setFullAddress: (value: string) => void
    setDetailAddress: (value: string) => void
    setZipCode: (value: string) => void
}
const Postcode = ({ modalOpen, setModalOpen, setFullAddress, setDetailAddress, setZipCode }: AddaddressProps) => {
    const [fullAddr, setFullAddr] = useState('')
    const [detailAddr, setDetailAddr] = useState('')
    const [zCode, setzCode] = useState('')
    const [jibunAddr, setJibunAddr] = useState('')

    const settingDetailAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDetailAddr(e.target.value)
    }
    let zonecode = ''
    let full = ''
    let extraAddress = ''
    let jibunAddress = ''

    const handleComplete = (data: any) => {
        zonecode = data.zonecode
        full = data.address
        extraAddress = ''
        jibunAddress = data.jibunAddress
        jibunAddress = data.jibunAddress

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname
            }
            if (data.buildingName !== '') {
                extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName
            }
            full += extraAddress !== '' ? ` (${extraAddress})` : ''
        }
        setFullAddr(full)
        setzCode(zonecode)
        setFullAddress(full)
        setZipCode(zonecode)
        setJibunAddr(jibunAddress)
        console.log(full, detailAddr, zonecode, jibunAddress) // detailAddress 출력
    }
    const closeModal = () => {
        setDetailAddr(detailAddr)
        setDetailAddress(detailAddr)
        setModalOpen(false)
    }

    return (
        modalOpen && (
            <div className="bg-white top-0 left-0 right-0 bottom-0 overflow-y-auto" style={{ zIndex: '1000', position: 'fixed' }}>
                <SimpleHeader title="배송지 추가" />
                <div className="p-10">
                    <DaumPostcodeEmbed onComplete={handleComplete} autoClose={false} />
                </div>
                <div className="flex justify-center">{zCode}</div>
                <div className="flex justify-center">{fullAddr}</div>
                <div className="flex justify-center">{jibunAddr}</div>
                <div className="m-10 ">
                    <input
                        type="text"
                        className=" w-full h-10 text-[12px] pl-2"
                        style={{ border: '1px solid ' }}
                        onChange={settingDetailAddress}
                        placeholder='상세주소를 입력해주세요.'
                    />
                    <div className="flex justify-center">
                        <button
                            className="w-25 h-10 mt-6 font-bold text-[13px] px-14"
                            onClick={() => {
                                closeModal()
                            }}
                            style={{ backgroundColor: 'black', color: 'white' }}
                        >
                            확인
                        </button>
                    </div>
                </div>
            </div>
        )
    )
}

export default Postcode
