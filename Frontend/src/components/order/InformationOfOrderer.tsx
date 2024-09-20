'use client'
import { useState } from "react";
import ChangeOrdererInformModal from "@/components/modal/ChangeOrdererInformModal";
import { OrderMemberInfoType } from "@/types/OrderMemberInfo";


export default function InformationOfOrderer({ memberInfo }: { memberInfo: OrderMemberInfoType }) {

    const [ModalOpen, setModalOpen] = useState(false);

    const handleOpen = () => {
        setModalOpen(true);  // 모달을 닫습니다.
    };

    const handleClose = () => {
        setModalOpen(false);  // 모달을 닫습니다.
    };

    return (
        <>
            <div className="bg-white m-4 p-4 rounded-xl tracking-[-0.3px]">
                <div className="flex justify-between mb-2">
                    <span className="text-lg font-bold">
                        주문자 정보
                    </span>
                    {ModalOpen && <ChangeOrdererInformModal closeModal={handleClose} />}
                </div>
                <div className="bg-white rounded-xl p-[10px 16px 20px 16px] ">
                    <dl className="flex mt-[3px] text-[14px]">
                        <dt className="w-[120px] text-[#666666]">
                            <span>주문자명</span>
                        </dt>
                        <dd>
                            <span>{memberInfo.orderName}</span>
                        </dd>
                    </dl>
                    <dl className="flex mt-[3px] text-[14px]">
                        <dt className="w-[120px] text-[#666666]">
                            <span>연락처</span>
                        </dt>
                        <dd>
                            <span>{memberInfo.phoneNumber}</span>
                        </dd>
                    </dl>
                    <dl className="flex mt-[3px] text-[14px]">
                        <dt className="w-[120px] text-[#666666]">
                            <span>이메일</span>
                        </dt>
                        <dd>
                            <span>{memberInfo.email}</span>
                        </dd>
                    </dl>
                    <dl className="flex mt-[3px] text-[14px]">
                        <dt className="w-[120px] text-[#666666]">
                            <span>품절시 환불</span>
                        </dt>
                        <dd>
                            <span>{"주문 시 결제수단으로 환불받기"}</span>
                        </dd>
                    </dl>
                </div>
            </div>
        </>
    )
}