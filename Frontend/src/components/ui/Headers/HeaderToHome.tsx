import Link from "next/link";

import HomeIcon from "@/images/svgs/HomeIcon";

export default function HeaderToHome({ title }: { title: string }) {
    return (
        <>
            <div className="flex justify-between w-full h-[45px] text-sm text-center text-black whitespace-nowrap border-b border-solid border-stone-300 sticky top-0 z-50 bg-white shadow-sm">
                <div className="flex justify-center items-center relative left-[25px] w-full ">{title}</div>
                <Link
                    href="/"
                    className="w-[50px] flex items-center justify-center">
                    <div className="w-6 h-[22px]">
                        <HomeIcon />
                    </div>
                </Link>
            </div>
        </>
    )
}