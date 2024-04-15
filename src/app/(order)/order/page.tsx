'use client'
import DeliveryAddress from "@/components/order/DeliveryAddress";
import DeliveryRequest from "@/components/order/DeliveryRequest";
import TypeOfPayment from "@/components/order/TypeOfPayment";
import ExpectedPaymoney from "@/components/order/ExpectedPaymoney";
import TermsOfService from "@/components/order/TermsOfService";
import InformationOfOrderer from "@/components/order/InformationOfOrderer";
import DeliveryItemList from "@/components/order/DeliveryItemList";
import ButtonOfOrder from "@/components/order/ButtonOfOrder";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { OrderMemberInfoType } from "@/types/OrderMemberInfo";
import SimpleHeader from "@/components/layouts/SimpleHeader";
import { productType } from "@/types/productType";
import { useSession } from "next-auth/react";
import { use, useEffect, useState } from "react";
import { DeliveryType } from "@/types/delivery/DeliveryListType";

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

const items = [31,22]; // 이 배열은 실제 데이터에 따라 변경해야 합니다.
const quantity = [1,2];

const fetchItems = (items: number[]) => {
  return Promise.all(items.map((item) => {
    return fetch(`${process.env.API_BASE_URL}/product/${item}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          console.error(`Failed to fetch item ${item}`);
          return null;
        }
        return response.json();
      })
      .then(data => data.data) // 결과에서 'data' 속성 추출
      .catch(error => {
        console.error('Error fetching item:', error);
        return null;
      });
  }));
}

export default function OrderPage() {
  const session = useSession();
  const token = session.data?.user?.accessToken;
  const [memberInfo, setMemberInfo] = useState<OrderMemberInfoType | null>(null);
  const [productData, setProductData] = useState<productType[]>([]);
  const [deliveryData, setDeliveryData] = useState<DeliveryType | null>(null);
  const [totalprice, setTotalPrice] = useState(0);
  const [discountprice, setDiscountPrice] = useState(0);
  const [discountedPrices, setDiscountedPrices] = useState<number[]>([]);

  useEffect(() => {
    if (token) {
      getDataWithToken(token, '/order/member-info')
        .then(data => {
          setMemberInfo(data);
          return fetchItems(items);
        })
        .then(data => {
          setProductData(data as productType[]);
          const productDataWithQuantity = data.map((cur, index) => {
            return { ...cur, quantity: quantity[index] };
          });

          const totalprice = productDataWithQuantity.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
          const discountprice = productDataWithQuantity.reduce((acc, cur) => acc + (cur.price * (cur.discount / 100)) * cur.quantity, 0);
          const discountedPrices = productDataWithQuantity.map(product => (product.price * (1 - product.discount / 100)) * product.quantity);
          setTotalPrice(totalprice);
          setDiscountPrice(discountprice);
          setDiscountedPrices(discountedPrices);
          
          return getDataWithToken(token, '/delivery-address/default');
        })
        .then(data => {
          setDeliveryData(data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });

    }
  }, [token]);

  return (
    <>
      <SimpleHeader title="결제하기" />
      {memberInfo && (
      <div className="bg-[#f5f5f5]">
        <DeliveryAddress token={token} setDeliveryData={setDeliveryData} />
        <DeliveryRequest />
        <TypeOfPayment />
        <ExpectedPaymoney totalprice={totalprice} discountprice={discountprice} />
        <TermsOfService />
        <InformationOfOrderer memberInfo={memberInfo as OrderMemberInfoType} />
        <div className="bg-white rounded-xl m-4 mb-20">
          <div className="flex justify-between pt-[15px] px-[16px]">
            <span className="text-lg font-semibold">택배배송</span>
          </div>
          {productData.map((product, index) => (
            <DeliveryItemList key={index} productId={product.id} productname={product.name} productprice={product.price} productdiscount={product.discount} quantity={quantity[index]} />
          ))}
        </div>
        <ButtonOfOrder amount={totalprice - discountprice} token={token} memberInfo={memberInfo as OrderMemberInfoType} discountedPrices={discountedPrices} deliveryData={deliveryData as DeliveryType} />
      </div>
      )}
    </>
  )
}
