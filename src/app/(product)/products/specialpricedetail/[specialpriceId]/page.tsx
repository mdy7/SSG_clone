import ProductDetailBottom from '@/components/pages/productDetail/ProductDetailBottom'
import ProductDetailNavToolBar from '@/components/pages/productDetail/ProductDetailNavToolBar'
import ProductDetailReviewInfo from '@/components/pages/productDetail/ProductDetailReviewInfo'
import Item from '@/components/specialprice/Item'
import GoBack from '@/components/ui/GoBack'
import PurchaseToolBar from '@/components/ui/PurchaseToolBar'
import { SpecailPriceDetailType } from '@/types/SpecailPriceDetailType'
import { commonResType } from '@/types/commonResType'
import Image from 'next/image'
import React from 'react'

type DataFunction = (url: string) => Promise<any>;

const getData: DataFunction = async (url: string) => {
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
      const data: commonResType = await res.json()
      // console.log("data:", data)
      return data.data
    }
  } catch (error) {
    console.log("error:", error)
  }
}

export default async function SpecialPriceDetailPage({ params }: { params: { specialpriceId: number } }) {
  // console.log("url:", (params.specialpriceId));
  const SpecialPriceData: SpecailPriceDetailType = await getData(`/special/${params.specialpriceId}/product-list`) as SpecailPriceDetailType;
  console.log("SpecialPriceData:", SpecialPriceData);
  return (
    <div>
      <ProductDetailNavToolBar
        reviewCnt={0}
        qnaCnt={0} />
      <div className='z-[500] w-6 absolute py-0 mx-4 top-[70px] text-white'>
        <GoBack />
      </div>
      <div className='relative pt-[100%]'>
        <div className='absolute overflow-hidden top-0 left-0 right-0'>
          <Image src={SpecialPriceData.thumbnailUrl} alt={SpecialPriceData.specialPriceName} width={600} height={600} priority />
        </div>
      </div>
      <div className='my-[15px] mx-0 px-4 py-0'>
        <h2 className='overflow-hidden break-all text-[15px] font-normal text-gray-900'>
          <span
            className='block break-all font-bold text-lg'
          >
            {SpecialPriceData.specialPriceName}
          </span>
        </h2>
        <div className='mt-[5px]'>
          <div>
            <div className='inline-block text-gray-900 align-middle'>
              <span className='overflow-hidden absolute w-[1px] h-[1px] -m-[1px] p-0 border-0 whitespace-normal break-all'>판매가격</span>
              <em className='not-italic text-[26px] font-semibold'>{(SpecialPriceData.lowestPrice).toLocaleString()}</em>
              <span className='text-[26px] font-semibold'>원~</span>
            </div>
          </div>
        </div>
      </div>
      <ProductDetailReviewInfo
        reviewRate={4.9}
        reviewCnt={0} />
      <ProductDetailBottom />
      <PurchaseToolBar selectedOptionProductId={SpecialPriceData.specialPriceProductList[0].productId} />
      <div className='px-4'>
        <div className='pt-6 pb-3 text-[13px] font-sans text-zinc-400'>상품번호:10101010</div>
        {SpecialPriceData.specialPriceProductList.map((item, index) => (
          <div key={index}>
            <Item productId={item.productId} index={index} />
          </div>
        ))}
      </div>
    </div>
  )
}
