import CartIcon from "@/images/svgs/CartIcon";
import React from "react";
import Clip from "./Clip";

export default function ClipCart({
  productId,
}: {
  productId: number;
}) {

  const handleClickCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    alert('준비 중인 기능입니다.')
  }

  return (
    <div className=" flex items-center pt-[0.125rem] pb-[0.125rem] ">
      <div className="flex-grow flex-shrink basis-[0%] self-stretch justify-self-stretch"></div>
      <Clip productId={productId}/>
      <button 
      onClick={(e) => handleClickCart(e)}
      className="inline-flex justify-center items-center w-7 h-7">
        <CartIcon />
      </button>
    </div>
  );
}
