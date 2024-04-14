import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'

export default function ClipModal({ closeModal }: any) {
    const [name, setFolderName] = useState('');
    const [animate, setAnimate] = useState(false);
    const session = useSession();
    const token = session.data?.user?.accessToken;

    useEffect(() => {
        setAnimate(true); // 모달이 마운트되면 애니메이션 시작
    }, []);

    const AddClipFolder = (accessToken: string): void => { // Specify the return type as void
        // console.log("token:", token);
        const response = fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/like/folder`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + accessToken,
            },
            body: JSON.stringify({ name }),
        });
    };

    return (
        <>
            <div className='fixed inset-0 bg-black opacity-50 z-10' onClick={closeModal}></div>
            <div className={`w-full h-[314.8px] transform ${animate ? 'translate-y-0' : 'translate-y-full'} absolute bottom-0 font-sans transition-transform ease-out duration-500 z-20 bg-white rounded-lg`}>
                <div className='h-[46px] border-b-[1.5px] flex items-center justify-center'>
                    <h2 className='font-bold text-[14px] text-center space-x-[-0.5px] tracking-tighter'>새 폴더</h2>
                </div>
                <div className='flex-col items-center justify-center'>
                    <p className='mt-10 text-[17px] text-center tracking-tighter'>
                        폴더를 추가하여 좋아요를
                        <br />
                        내맘대로 관리해보세요!
                    </p>
                    <div className='mt-5 px-5 relative'>
                        <input type='text'
                            className='w-full h-[50px] border-[1px] border-[#E5E5E5] p-[15px] pr-[45px] text-[17px]'
                            placeholder='폴더명을 입력해주세요.'
                            maxLength={6}
                            value={name}
                            onChange={(e) => setFolderName(e.target.value)}
                        />
                        <span className='absolute top-1/2 right-10 transform -translate-y-1/2 text-[13px] font-bold text-zinc-300'>
                            {`${name.length} / 6`}
                        </span>
                    </div>
                    <div className='py-[30px] flex justify-center'>
                        <button className='w-[96px] h-11 rounded-full bg-zinc-300 px-[27px] text-[14px] whitespace-nowrap' 
                        onClick={async () => {
                            await AddClipFolder(token);
                            closeModal();
                        }}>만들기</button>
                    </div>
                </div>
            </div>
        </>
    )
}
