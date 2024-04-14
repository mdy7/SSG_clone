import Image from 'next/image';
import Link from 'next/link';

import SmallArrowIcon from '@/images/svgs/SmallArrowIcon';
function Order() {
    const OrderList = [
        { id: 1, name: '주문접수' },
        { id: 2, name: '결제완료' },
        { id: 3, name: '상품준비중' },
        { id: 4, name: '배송중' },
        { id: 5, name: '배송완료' },
    ]
    const OrderState = [
        { id: 1, name: '취소' },
        { id: 2, name: '교환' },
        { id: 3, name: '반품' },
        { id: 4, name: '구매확정' },
    ]
    return (
        <section className='relative'>
            <div className="absolute -top-2 h-5 inset-0  rounded-t-2xl bg-gradient-to-b from-white via-gray-200 to-gray-500" style={{ zIndex: -1 }}></div>
            <div className='bg-white rounded-xl'>
                <div className="p-4">
                    <div className="flex justify-between items-center">
                        <div className='flex justify-center items-center'>
                            <h1 className="font-extrabold text-[17px]">
                                주문/배송 조회
                            </h1>
                            <div className='w-3 h-3'>
                                <SmallArrowIcon />
                            </div>
                        </div>
                        <Link
                            href="/"
                            className="flex items-center justify-center border rounded-md px-3 text-[11px] whitespace-nowrap"
                        >
                            <Image
                                width={20}
                                height={20}
                                src="https://img.icons8.com/fluency-systems-regular/48/marker--v1.png"
                                alt="배송지관리"
                            />
                            배송지 관리
                        </Link>
                    </div>
                    <div className="flex justify-between items-end mt-3">
                        {OrderList.map((list, index) => (
                            <div key={list.id} className="mb-3">
                                <div className="flex items-center justify-center">
                                    <div className='flex justify-center items-center flex-col'>
                                        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-2xl text-gray-300 text-[15px] sm:w-20 sm:h-20 sm:rounded-3xl font-bold">
                                            0
                                        </div>
                                        <span className="text-[12px] text-gray-600 whitespace-nowrap overflow-ellipsis flex items-center justify-center">
                                            {list.name}
                                        </span>
                                    </div>
                                    {index !== OrderList.length - 1 && (
                                        <div className="w-3 h-3 ml-2 mb-3 opacity-30">
                                            <SmallArrowIcon />
                                        </div>
                                    )}
                                </div>

                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center items-center mt-2 border rounded-xl border-gray-100 bg-gray-100 text-[13px] h-10">
                        {OrderState.map((state, index) =>
                            index == OrderState.length - 1 ? (
                                <div key={state.id} className="flex flex-1 ml-4 mr-4 whitespace-nowrap">
                                    <span>{state.name}</span>
                                    <div className="text-gray-200 ml-auto">0 </div>
                                </div>
                            ) : (
                                <div key={state.id} className="flex flex-1 ml-4 whitespace-nowrap">
                                    <span>{state.name}</span>
                                    <div className="text-gray-200 ml-auto ">0 |</div>
                                </div>
                            ),
                        )}
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center mt-4 text-[13px] gap-1 font-semibold">
                주문/배송 조회 보러가기
                <div className='w-3 h-3'>
                    <SmallArrowIcon />
                </div>
            </div>
        </section>
    )
}
export default Order
