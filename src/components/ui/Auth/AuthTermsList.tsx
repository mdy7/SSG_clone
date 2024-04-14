import Link from 'next/link';
import React from 'react';

export default function AuthTermsList({ terms }: { terms: string[] }) {
    return (
        <ul className='w-full h-[230px] bg-white font-sans'>
            {terms.map((term, index) => (
        <li key={index} className='w-full h-[45.4px] block py-[14px] px-[15px] text-[12px] border-b-[1.5px] relative'>
            <span className=''>
                <input type='checkbox'/>
                <label>
                    <span className='pl-2'>{term}</span>
                </label>
            </span>
            <Link href='#' className='absolute text-[9px] text-zinc-500 top-[14px] right-5 border-2 px-1'>내용보기</Link>
        </li>
            ))}
        <li className='w-full h-[45.4px] block py-[14px] px-[15px] text-[12px]'>
            <span><input type='checkbox' />
                <label>
                    <span className='text-red-400 pl-2'>전체 동의</span>
                </label>
                </span>
        </li>
        </ul>
    )
}
