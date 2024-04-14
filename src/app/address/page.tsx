'use client'
import { use, useState } from 'react';

import Postcode from '../../components/pages/address/add';
import SimpleHeader from '@/components/layouts/SimpleHeader';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function Address() {
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [fullAddress, setFullAddress] = useState('')
    const [detailAddress, setDetailAddress] = useState('')
    const [zipCode, setZipCode] = useState<string>()
    // console.log(fullAddress, detailAddress, zipCode) // detailAddress 출력
    const [ addressName, setAddressName ] = useState<string>('')
    const [ recipient, setRecipient ] = useState<string>('')
    const [ phoneNumber, setPhoneNumber ] = useState<string>('')

    const session = useSession();
    const token = session.data?.user.accessToken;
    // console.log(session);
    const router = useRouter();

    const handleSubmit = async () => {

        const userData = {
          addressName,
          recipient,
          phoneNumber,
          street: fullAddress + detailAddress,
          post:zipCode,
          zip: fullAddress + detailAddress
        };
        
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/delivery-address`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
          },
          body: JSON.stringify(userData)
        });
        console.log(userData)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        const data = await response.json();
        console.log(data);
      };
    

    return (
        <div>
            <Postcode
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                setFullAddress={setFullAddress}
                setDetailAddress={setDetailAddress}
                setZipCode={setZipCode}
            />

            <SimpleHeader title="배송지 추가" />
            <form onSubmit={handleSubmit}>
            <div className="px-3">
                <ul>
                    <li className="relative  py-3 pl-10 text-sm " style={{ borderBottom: '1px solid #f0f0f0' }}>
                        <span className="inline-block absolute font-bold leading-5 left-0">
                            <label className="leading-9">주소별칭</label>
                        </span>
                        <div className="relative pl-20">
                            <span
                                className="block p-2 w-auto leading-5"
                                style={{ border: '1px solid #ccc', borderRadius: '2px' }}
                            >
                                <input className="w-full h-4 " type="text" placeholder="주소별칭 입력" onChange={(e) => setAddressName(e.target.value)} />
                            </span>
                        </div>
                    </li>
                    <li className="relative  py-3 pl-10 text-sm " style={{ borderBottom: '1px solid #f0f0f0' }}>
                        <span className="inline-block absolute font-bold leading-5 left-0">
                            <label className="leading-9">받는 분</label>
                        </span>
                        <div className="relative pl-20">
                            <span
                                className="block p-2 w-auto leading-5"
                                style={{ border: '1px solid #ccc', borderRadius: '2px' }}
                            >
                                <input className="w-full h-4 " type="text" placeholder="받는 분 성함 입력" onChange={(e) => setRecipient(e.target.value)}/>
                            </span>
                        </div>
                    </li>
                    <li className="relative  py-3 pl-10 text-sm " style={{ borderBottom: '1px solid #f0f0f0' }}>
                        <span className="inline-block absolute font-bold leading-5 left-0">
                            <label className="leading-9">휴대폰</label>
                        </span>
                        <div className="relative pl-20">
                            <span
                                className="block p-2 w-auto leading-5"
                                style={{ border: '1px solid #ccc', borderRadius: '2px' }}
                            >
                                <input
                                    className="w-full h-4 "
                                    type="number"
                                    placeholder="휴대폰(숫자만 입력)"
                                    max-length="20"
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </span>
                        </div>
                    </li>
                    <li className="relative  py-3 pl-10 text-sm " style={{ borderBottom: '1px solid #f0f0f0' }}>
                        <span className="inline-block absolute font-bold leading-5 left-0">
                            <label className="leading-9">배송주소</label>
                        </span>
                        <div className="relative pl-20 flex items-center">
                            <span className="inline-block flex-1 pr-2">
                                <span
                                    className="inline-block p-2 w-full leading-5"
                                    style={{ border: '1px solid #ccc', borderRadius: '2px' }}
                                >
                                    {/* <Link href="/cart/address"/> */}
                                    <input type="number" className="w-full" value={zipCode} readOnly/>
                                </span>
                            </span>

                            {/* <Link href={'/address/Addaddress'}> */}
                            <button
                                type='button'
                                className="inline-block h-9 w-20 ml-2 text-sm font-bold text-red-500 border border-red-500 bg-white rounded-md"
                                onClick={() => setModalOpen(true)}
                            >
                                우편번호
                            </button>
                        </div>
                    </li>
                    {fullAddress && (
                        <div className="mt-2 text-sm leading-5  ">
                            <div className="flex">
                                <div
                                    className=" w-10 mt-1 mr-3 mb-1 pt-1 text-xs leading-5 font-normal text-center "
                                    style={{ backgroundColor: '#f6f6f6', color: '#888 ' }}
                                >
                                    도로명
                                </div>
                                <span className="mt-2">
                                    {fullAddress} {detailAddress}<br />
                                </span>
                            </div>
                        </div>
                    )}
                </ul>
                <div className="py-3 text-center flex justify-between w-full mb-6">
                    <button type="button" className="h-10 flex-1 mr-2 text-xs" style={{ color: '#666', border: '1px solid #ccc' }}>
                        초기화
                    </button>
                    <button type="button" className="h-10 flex-1 mr-2 text-xs" style={{ color: '#666', border: '1px solid #ccc' }}>
                        취소
                    </button>
                    <button type='submit' className="h-10 flex-1 text-xs" style={{ color: '#666', border: '1px solid #ccc' }} onClick={() => router.back()}>
                        등록
                    </button>
                </div>
            </div>
           </form>
        </div>
        
    )
}
export default Address