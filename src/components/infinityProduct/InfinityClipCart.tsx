import React from "react";
import ClipCart from "../ui/Item/ClipCart";

function InfinityClipCart({ productId }: { productId: number }) {
  return (
    <div className=" flex items-center pt-[0.125rem] pb-[0.125rem] ">
      <div className="flex-grow flex-shrink basis-[0%] self-stretch justify-self-stretch"></div>
      <ClipCart productId={productId} />
    </div>
  );
}

export default InfinityClipCart;
