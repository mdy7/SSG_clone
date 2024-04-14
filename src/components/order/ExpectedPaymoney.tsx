export default function ExpectedPaymoney({totalprice,discountprice}: {totalprice: number, discountprice: number}){
    return(
        <>
            <div className="bg-white m-4 p-4 rounded-xl tracking-[-0.3px]">
                <div className="flex justify-between text-lg mb-2 font-extrabold">
                    <span>
                        결제예정금액
                    </span>
                    <span>
                        {(totalprice-discountprice).toLocaleString()}원
                    </span>
                </div>
                <hr className="bg-[#9b9b9b] h-[0.3px]"/>
                <div className="mt-2 text-sm">
                    <div className="flex justify-between">
                        <span>주문금액</span>
                        <span>{totalprice.toLocaleString()}원</span>
                    </div>
                    <div className="flex justify-between my-1">
                        <span>배송비</span>
                        <span>+ {(3000).toLocaleString()}원</span>
                    </div>
                    <div className="flex justify-between my-1">
                        <span>할인금액</span>
                        <span className="text-[red]">- {(discountprice).toLocaleString()}원</span>
                    </div>
                    <div className="flex justify-between text-[#888888]">
                        <span className="">└ 상품할인</span>
                        <span>- {(discountprice).toLocaleString()}원</span>
                    </div>
                </div>
            </div>
        </>
    )
}