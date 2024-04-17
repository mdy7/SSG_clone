"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { Suspense, useEffect, useState } from "react";

import HeaderToHome from "@/components/ui/Headers/HeaderToHome";
import DetailsOfPaymoney from "@/components/order/DetailsOfPaymoney";
import { OrderInformationType } from "@/types/OrderInformation";

type DataWithTokenFunction = (token: string, url: string) => Promise<any>;

const getDataWithToken: DataWithTokenFunction = async (
  token: string,
  url: string
) => {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    if (res.ok) {
      const data = await res.json();
      return data.data;
    }
  } catch (error) {
    console.log("error:", error);
  }
};

export default function Complete() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <OrderComplete />
      </Suspense>
    );
  }

function OrderComplete() {
  const session = useSession();
  const token = session.data?.user.accessToken;
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const [toggle, setToggle] = useState(false);
  const [orderData, setOrderData] = useState<OrderInformationType | null>(null);

  useEffect(() => {
    const fetchData = async (token: string) => {
      try {
        if (token) {
          const data = await getDataWithToken(
            token,
            `/order/${orderId}/member-order-product/`
          );
          setOrderData(data);
        } else {
          console.error("No access token found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (token) {
      fetchData(token);
    }
  }, [orderId, token]);

  return (
    <>
      <HeaderToHome title="주문완료" />
        <div>
          <h1 className="text-center text-xl font-bold h-20 flex justify-center items-center">
            주문이 완료되었습니다.
          </h1>
        </div>
        <hr className="h-[10px] bg-[#f5f5f5] border-[#f5f5f5]" />
        <div className="m-3">
          <h2 className="font-bold text-md mb-3">받는 분 정보</h2>
          <p className="flex justify-between text-[14px]">
            <span className="font-bold">
              {orderData?.receiverName} /{" "}
              {orderData?.orderPhoneNumber.slice(0, 3)}-****-
              {orderData?.orderPhoneNumber.slice(7, 11)}
            </span>
          </p>
          <p className="text-[14px]">{orderData?.region}</p>
        </div>
        <hr className="h-[10px] bg-[#f5f5f5] border-[#f5f5f5]" />

        <div className="m-3">
          <div className="flex justify-between">
            <span className="font-bold text-[18px]">
              결제금액 : {orderData?.totalPrice.toLocaleString()}원
            </span>
            <div
              onClick={() => {
                setToggle(!toggle);
              }}
            >
            </div>
          </div>
          {toggle ? <DetailsOfPaymoney /> : null}
        </div>
        <hr className="border-[#f5f5f5] h-[10px]" />
        <div className="m-3">
          <div className="flex justify-between font-bold text-[16px]">
            <span>무통장입금</span>
            <div>
              <span>{orderData?.totalPrice.toLocaleString()}원</span>
              <span className="font-normal text-[#ff5452]">(입금대기)</span>
            </div>
          </div>
          <div className="flex justify-between text-[14px] my-1">
            <span className="text-[#666666]">{"농협중앙회"}</span>
            <span className="text-[#222222]">{"10200202405200"}</span>
          </div>
          <div className="flex justify-between text-[14px] my-1">
            <span className="text-[#666666]">입금 기한일</span>
            <span className="text-[#222222]">
              {new Date(orderData?.orderDate ?? "").toLocaleDateString()}
            </span>
          </div>
          <div className="flex justify-between text-[14px] my-1">
            <span className="text-[#666666]">입금자</span>
            <span className="text-[#222222]">{orderData?.receiverName}</span>
          </div>
          <div className="text-[13px] tracking-[-0.3px] font-normal">
            <p>
              ※ (주)에스에스지닷컴으로 발급되는 가상계좌로, 상품구매목적 이외의
              입금은 불가합니다.
            </p>
            <p>※ 입금 기한일까지 미 입금 시 자동 주문취소</p>
          </div>
        </div>
        <hr className="h-[10px] bg-[#f5f5f5] border-[#f5f5f5]" />
        <div className="m-3 ">
          <span className="font-bold">더 많은 혜택을 누리시려면</span>
          <Image
            alt="유니버스 클럽 가입하기"
            src={
              "https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/order/mnodr_universe_type_banner01.png&w=750"
            }
            width={500}
            height={500}
            className="mx-auto mt-[12px]"
          />
        </div>

        <div className="m-3 mt-[30px] h-[44px] mb-32">
          <Link href={"/"}>
            <button className="w-1/2 bg-black text-white text-[14px] px-2 h-full rounded-full">
              계속 쇼핑하기
            </button>
          </Link>
          <Link href={`/ready`}>
            <button className="w-1/2 text-[14px] text-[#444444] border-[1px] px-2 h-full rounded-full border-[#e5e5e5]">
              주문상품 상세보기
            </button>
          </Link>
        </div>
    </>
  );
}
