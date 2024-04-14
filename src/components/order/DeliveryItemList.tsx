import Image from "next/image";

interface DeliveryProps {
    productId: number;
    productname: string;
    productprice: number;
    productdiscount: number;
    quantity: number;
}

export async function getData(url: string) {
    try {
      const res = await fetch(
        `${process.env.API_BASE_URL}${url}`, //여러개 삭제 api 만들어달라하기
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
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

export default async function DeliveryItemList({ productId, productname, productprice, productdiscount, quantity }: DeliveryProps) {

    const calculatedPrice = Math.round((productprice - (productprice * (productdiscount / 100))));
    const thumnail = await getData(`/product/${productId}/thumbnail`);
    const brand = await getData(`/product/${productId}/brand`);
    // console.log("result:", brand);
    return (
        <>
            <div className="flex px-[16px] py-[15px]">
                <div className="flex justify-between">
                    <Image src={thumnail.url} alt="한우" width={150} height={150} style={{ width: "80px", height: "80px" }} />
                </div>
                <div className="w-full flex flex-col justify-around text-xs mx-2">
                    <div className="mt-6">
                        <span className="font-extrabold mr-1">{brand.brandName}</span>
                        <span>{productname}</span>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <span className="line-through mr-2 text-[#666666]">{(productprice).toLocaleString()}원</span>
                            <span className="font-extrabold">{(calculatedPrice).toLocaleString()}원</span>
                        </div>
                        
                    </div>
                    <span className="text-[#666666] text-right">수량{quantity}개</span>
                </div>
            </div>
            <hr />
        </>
    )
}