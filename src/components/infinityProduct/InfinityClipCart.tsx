import CartIcon from "@/images/svgs/CartIcon";
import HeartIcon from "@/images/svgs/HeartIcon";
import React from "react";
import SsgDeliverIcon from "./SsgDeliverIcon";
import ClipCart from "../ui/Item/ClipCart";

function InfinityClipCart({ productId }: { productId: number }) {
  return (
    <div className=" flex items-center pt-[0.125rem] pb-[0.125rem] ">
      {/* <p className='text-xs'>
        SSG
      </p> */}
      {/* <SsgDeliverIcon /> */}
      <div className="flex-grow flex-shrink basis-[0%] self-stretch justify-self-stretch"></div>
      {/* <Clip productId={productId} session={session}/> */}
      <ClipCart productId={productId} />
    </div>
  );
}

export default InfinityClipCart;
