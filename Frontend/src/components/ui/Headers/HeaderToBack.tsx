import Link from "next/link";

export default function HeaderToBack({title}:{title:string}){
    return(
        <>
            <header
                className="h-[45px] flex items-center border-b-[1px] border-[rgba(0, 0, 0, 0.07)] sticky top-0 shadow-md bg-white z-50"
            >
                <Link
                    className="w-[50px] h-full items-center flex justify-center"
                    href={"#"}
                >
                    <div className='w-[25px] h-[18px] bg-[url("https://sui.ssgcdn.com/ui/m_ssg/img/com_v2/sp_top_cate.png")] bg-no-repeat bg-[position:0px_0px] bg-[length:100px_100px]'></div>
                </Link>
                <h3 className="text-[14px] w-[calc(100vw-44px)] text-center mx-auto relative right-[25px]">{title}</h3>
            </header>
        </>
    )
}