import Link from "next/link"

function MyPoint() {
    return (
        <section className="mt-3 px-4">
            <div className="flex justify-between text-center space-x-2">
                <div className="border border-gray-300 rounded-lg p-3 w-full">
                    <p className="text-lg mb-1">쿠폰</p>
                    <p className="text-lg">0장</p>
                    <div className="flex justify-center">
                        <p className="mt-3 py-0.5 w-20 h-7 bg-black rounded font-bold text-white  text-center"><Link href="/ready">
                            쿠폰함
                        </Link>
                        </p>
                    </div>
                </div>
                <div className="border border-gray-300 rounded-lg p-3 w-full">
                    <p className="text-lg mb-1">SSG MONEY</p>
                    <p className=" text-lg">0원</p>
                    <div className="flex mt-3 space-x-1  justify-center items-center">
                        {/* <p className=" py-0.5 w-20 h-7 bg-red-500 rounded font-bold text-white ">상품권</p>
                        <p className=" py-0.5 w-16 h-7 bg-black rounded font-bold text-white ">계좌</p>
                        <p className=" py-0.5 w-20 h-7 bg-gray-600 rounded font-bold text-white  ">포인트</p> */}
                    </div>
                </div>
                <div className=" border border-gray-300 rounded-lg p-3 w-full">
                    <p className="text-lg mb-1 whitespace-nowrap">신세계포인트</p>
                    <p className=" text-lg">0p</p>
                </div>
            </div>
        </section>
    )
}

export default MyPoint
