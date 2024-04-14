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

const items = [21]; // 이 배열은 실제 데이터에 따라 변경해야 합니다.

async function fetchItems(items:number[]) {
  try {
    const results = await Promise.all(items.map(async (item) => {
      const response = await fetch(`${process.env.API_BASE_URL}/product/${item}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        console.error(`Failed to fetch item ${item}`);
        return null;
      }

      const data = await response.json();
      // console.log('data:', data);
      return data;
    }));

    // results 배열에는 각 API 요청의 결과가 포함되어 있습니다.
    // console.log(results);
    return results.map(result => result.data);
  } catch (error) {
    // API 요청 중 하나라도 실패하면 이 블록이 실행됩니다.
    console.error(error);
    return null;
  }
}

export default async function OrderPage() {
  const session = await getServerSession(options);
  const token = session?.user?.accessToken;
  const memberInfo: OrderMemberInfoType = await getDataWithToken(token, '/order/member-info');
  const productData: productType[] = await fetchItems(items) as productType[];
  const deliveryData = await getDataWithToken(token, '/delivery-address/default');

  // const handleButtonClick = async () => {
  //   const response = await fetch('/api/order', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({})
  //   });

  
  //   if (!response.ok) {
  //     // Handle error
  //     console.error('Failed to place order');
  //   }
  // }

  const totalprice = productData.reduce((acc, cur) => acc + cur.price, 0);
  // console.log("totalprice:", totalprice);
  const discountprice = productData.reduce((acc, cur) => acc +(cur.price * (cur.discount / 100)), 0);
  // console.log("discountprice:", discountprice);
  const discountedPrices = productData.map(product => product.price * (1 - product.discount / 100));
  
  return (
    <>
      <SimpleHeader title="결제하기" />
      <div className="bg-[#f5f5f5]">
        <DeliveryAddress token={token}/>
        <DeliveryRequest />
        <TypeOfPayment />
        <ExpectedPaymoney totalprice={totalprice} discountprice={discountprice}/>
        <TermsOfService />
        <InformationOfOrderer memberInfo={memberInfo} />
        <div className="bg-white rounded-xl m-4 mb-20">
          <div className="flex justify-between pt-[15px] px-[16px]">
            <span className="text-lg font-semibold">택배배송</span>
          </div>
          {productData.map((product, index) => (
            <DeliveryItemList key={index} productId={product.id} productname={product.name} productprice={product.price} productdiscount={product.discount} quantity={1} />
          ))}
        </div>
        <ButtonOfOrder amount={totalprice-discountprice} token={token} memberInfo={memberInfo} discountedPrices={discountedPrices} deliveryData={deliveryData}/>
      </div>
    </>
  )
}
