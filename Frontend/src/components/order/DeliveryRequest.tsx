'use client'

import { useState } from "react";

import DeliveryRequestModal from "@/components/modal/DeliveryRequestModal";

export default function DeliveryRequest(){

    const [ModalOpen, setModalOpen] = useState(false);
    const [deliveryRequest, setDeliveryRequest] = useState("문 앞에 놓아주세요");

    const handleOpen = () => {
        setModalOpen(true);  // 모달을 닫습니다.
    };

    const handleClose = () => {
        setModalOpen(false);  // 모달을 닫습니다.
    };

    return(
        <>
            <div className="bg-white m-4 p-4 rounded-xl">
                <div className="flex justify-between">
                    <h2 className="text-lg font-semibold ">
                        배송 요청사항
                    </h2>
                    <button className="border-[1px] px-2 text-xs border-[#d8d8d8]"
                    onClick={handleOpen}
                    >변경</button>
                    {ModalOpen &&<DeliveryRequestModal 
                    closeModal={handleClose}
                    // setDeliveryRequest={}
                    />}
                </div>
                <div>
                    <span className="text-xs text-[#888888] w-32 inline-block">
                        택배배송 요청사항
                    </span>
                    <span className="text-xs">
                        {deliveryRequest}
                    </span>
                </div>
            </div>
        </>
    )
}