"use client";
import { OrderMemberInfoType } from "@/types/OrderMemberInfo";
import { DeliveryType } from "@/types/delivery/DeliveryListType";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ButtonOfOrderProps {
  amount: number;
  token: string;
  memberInfo: OrderMemberInfoType;
  deliveryData: DeliveryType;
  discountedPrices: number[];
}

export default function ButtonOfOrder({
  amount,
  token,
  memberInfo,
  deliveryData,
  discountedPrices,
}: ButtonOfOrderProps) {
  const router = useRouter();
  const [orderId, setOrderId] = useState(null);
  const optionSelectProductIds = [49];
  const counts = [1];

  const orderProducts = optionSelectProductIds.map((id, index) => ({
    optionSelectedProductId: id,
    count: counts[index],
    price: discountedPrices[index],
  }));

  // console.log(orderProducts);
  const handleButtonClick = async () => {
    try {
      if (token) {
        const response = await fetch(
          `${process.env.API_BASE_URL}/order/member`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              orderProducts: orderProducts,
              region: deliveryData.street,
              name: deliveryData.recipient,
              orderName: memberInfo.orderName,
              phoneNumber: memberInfo.phoneNumber,
              email: memberInfo.email,
              totalPrice: amount,
            }),
          }
        );

        if (response.ok) {
          // API 호출 성공 시 처리할 로직 작성
          // console.log("API 호출 성공");
          const data = await response.json();
          // console.log("data:", data);
          // setOrderId(data.data.orderId);
          router.push(`/order/complete?orderId=${data.data.orderId}`)
        } else {
          console.error("API 호출 실패");
        }
      } else {
        console.error("No access token found");
      }
    } catch (error) {
      console.error("Error calling API:", error);
    }
  };

  return (
    <>
      {/* <Link href={`/order/complete?orderId=${orderId}`}> */}
        <button
          className="w-full bg-[#ff5452] p-4 sticky right-0 left-0 bottom-0 z-10 text-center"
          onClick={handleButtonClick}
        >
          <span className="text-white font-normal">
            <span className="font-bold">{amount.toLocaleString()}원</span>{" "}
            결제하기
          </span>
        </button>
      {/* </Link> */}
    </>
  );
}
