'use client'
import Link from 'next/link';
import { DeliveryListType, DeliveryType } from '@/types/delivery/DeliveryListType';
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

type DataWithTokenFunction = (token: string, url: string) => Promise<any>;

const getDataWithToken: DataWithTokenFunction = (token: string, url: string) => {
  return fetch(
    `${process.env.API_BASE_URL}${url}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  )
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Response not OK');
      }
    })
    .then(data => data.data)
    .catch(error => {
      console.log("error:", error)
    })
}

function SelectAddressModal2({
  handleClose
}: {
  handleClose: () => void;
}) {
  const [DeliveryList, setDeliveryList] = useState<DeliveryListType | null>(null);
  const session = useSession();
  const token = session?.data?.user?.accessToken;
  const [selectedDeliveryAddressId, setSelectedDeliveryAddressId] = useState(1);

  // API 호출 코드를 여기에 작성합니다.
  const handleButtonClick = async () => {
    try {
      if (token) {
        const response = await fetch(`${process.env.API_BASE_URL}/delivery-address/${selectedDeliveryAddressId}/default`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ deliveryAddressId: selectedDeliveryAddressId }),
        });

        if (response.ok) {
          // API 호출 성공 시 처리할 로직 작성
          // console.log('API 호출 성공');
          handleClose();
        } else {
          console.error('API 호출 실패');
        }
      } else {
        console.error('No access token found');
      }
    } catch (error) {
      console.error('Error calling API:', error);
    }
  };

  useEffect(() => {
    if (token) {
      getDataWithToken(token, '/delivery-address')
        .then(data => {
          setDeliveryList(data);
        })
        .catch(error => {
          console.error('Error fetching delivery addresses:', error);
        });
    }
  }, []);

  if (!DeliveryList) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="h-screen bg-black/60 absolute inset-0 z-[2000]">
        <div className="fixed inset-x-0 top-0 bottom-0 flex flex-col border  bg-white">
          <header
            className="h-[45px] flex items-center border-b-[1px] border-[rgba(0, 0, 0, 0.07)] sticky top-0 bg-white z-50"
          >
            <button
              className="w-[50px] h-full"
              onClick={handleClose}
            >
              <Image width="24" height="22" className='mx-auto' src="https://img.icons8.com/ios/50/left--v1.png" alt="backButton" />
            </button>
            <h3 className="text-[14px] w-[calc(100vw-44px)] text-center mx-auto relative right-[25px]">배송지 선택</h3>
          </header>
          <div className='pt-[40px] px-[16px] mb-[16px]'>
            <h1 className='text-[24px] tracking-[-0.3px] font-bold'>어디로 보내드릴까요?</h1>
          </div>
          <Link href={"/address"} className='flex text-[14px] ml-2 mt-2'>
            + 신규배송지등록
          </Link>
          <div className="flex w-full max-w-full max-h-full">
            <ul className="block w-full">
              {DeliveryList.map((delivery: DeliveryType) => (
                <li
                  key={delivery.deliveryAddressId}
                  className=" py-5 px-4 border"
                  style={{ display: 'flex', fontSize: '13px' }}
                >
                  <label className="flex items-center">
                    <div className="py-5">
                      <input
                        type="radio"
                        name="deliveryAddress"
                        value={delivery.deliveryAddressId}
                        onChange={() => {
                          setSelectedDeliveryAddressId(delivery.deliveryAddressId);
                        }
                        }
                        className="block relative w-5 h-5" />
                    </div>
                    <div className="flex-col ml-4">
                      <div>
                        <strong>{delivery.addressName}</strong>
                      </div>
                      <p className="mt-1">
                        [{delivery.zip}] {delivery.street}
                      </p>
                      <p className="mt-1">
                        {delivery.recipient} / {delivery.phoneNumber}
                      </p>
                    </div>
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <button
            className='bottom-0 left-0 right-0 fixed h-14 bg-[#ff5452] text-white font-semibold'
            onClick={
              handleButtonClick}>
            변경하기
          </button>
        </div>
      </div>
    </div>
  )
}
export default SelectAddressModal2
