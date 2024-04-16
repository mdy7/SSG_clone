'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="w-[100vw] h-[100vw] relative">
      <div className="absolute top-[28%] bottom-[50%] transform text-center w-full px-[30px]">
        <div className="max-w-[140px] mx-auto">
          <Image src="https://sui.ssgcdn.com/ui/ssg/img/common/notice/err_404.png" alt="404" width={140} height={140} />
        </div>
        <div className="font-sans leading-none">
          <h1 className="text-xl font-bold mt-[30px]">원하셨던<br />페이지가 아닌가요?</h1>
          <p className="text-[15px] font-normal mt-[15px] text-zinc-400">방문하신 페이지가<br /> 변경 혹은 삭제되었을 수 있어요.<br /> 이전 페이지에서 다시 한번 시도해 주세요.</p>
          <Link href="/"
            className="flex justify-center items-center bg-black rounded-[8px] text-[15px] h-[52px] mt-[30px] m-auto max-w-[315px] text-white"><button onClick={(e) => {
              e.preventDefault();
              router.back()
            }}>이전페이지로 돌아가기</button></Link>
        </div>
      </div>
    </div>
  );
}