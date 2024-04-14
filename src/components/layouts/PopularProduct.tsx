import React from 'react'
import { productDataType } from '@/types/productDataType'
import Product from '../ui/Item/Product'
import Thumnail from '../ui/Item/Thumnail'
import ClipCart from '../ui/Item/ClipCart'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'

export default async function PopularProduct({
  id,
  src,
  store,
  brand,
  name,
  price,
  sale,
  salePrice,
  reviewRating,
  reviewCount
}: productDataType
)
{
  // const session = await getServerSession(options)
  // console.log(session)
  // const usersession = session
  // console.log("Token:" ,session?.user?.accessToken)
  return (
    <div>
      <div className='relative pt-[0.625rem] pb-5'>
        <Thumnail id={id}/>
        {/* --------좋아요/장바구니-------- */}
        <ClipCart productId={id}/>
        {/* --------좋아요/장바구니-------- */}
        <Product id={id}/>
      </div>
    </div>
  )
}
