'use client'
import { useEffect, useState } from "react";
import SelectAddressModal from "../modal/SelectAddressModal";
import { DeliveryType } from "@/types/delivery/DeliveryListType";

type DataWithTokenFunction = (token: string, url: string) => Promise<any>;

const getDataWithToken: DataWithTokenFunction = async (token: string, url: string) => {
    try {
        const res = await fetch(
            `${process.env.API_BASE_URL}${url}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                },
            },
        )
        if (res.ok) {
            const data = await res.json()
            // console.log("data:", data)
            return data.data
        }
    } catch (error) {
        console.log("error:", error)
    }
}

export default function DeliveryAddress({ token }: { token: string }) {
    const [SelectAddressModalOpen, setSelectAddressModalOpen] = useState(false);
    const [Delivery, setDelivery] = useState<DeliveryType | null>(null);

    const handleOpen = () => {
        setSelectAddressModalOpen(true);  // 모달을 닫습니다.
    };

    const handleClose = () => {
        setSelectAddressModalOpen(false);  // 모달을 닫습니다.
    };

    useEffect(() => {
        const fetchData = async (token: string) => {
            try {
                if (token) {
                    const data: DeliveryType = await getDataWithToken(token, '/delivery-address/default');
                    setDelivery(data);
                } else {
                    console.error('No access token found');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (token) {
            fetchData(token);
        }
    }, []);

    if (!Delivery) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="bg-white m-4 p-4 rounded-xl">
                <div className="flex justify-between">
                    <h2 className="text-lg font-semibold">
                        배송지 : {Delivery.addressName}
                    </h2>
                    <button className="border-[1px] border-[#d8d8d8] px-2 text-xs"
                        onClick={
                            handleOpen
                        }>
                        변경
                    </button>
                    {SelectAddressModalOpen && <SelectAddressModal handleClose={handleClose} setDelivery={setDelivery}/>}
                </div>
                <div className="my-4 text-sm">
                    {`[${Delivery.post}] ${Delivery.street}`}
                </div>
                <div className="flex justify-between text-[#888888]">
                    <span className="text-xs">
                        {Delivery.recipient} / {Delivery.phoneNumber}
                    </span>
                    <div className="flex justify-center items-center">
                        <input type="checkbox" className="w-8 h-4 rounded-sm accent-red-500" />
                        <span className="text-xs " >
                            안심번호사용
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}