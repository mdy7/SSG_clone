'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function AuthTermsList({ terms }: { terms: string[] }) {
    const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(terms.length).fill(false));
    const [allChecked, setAllChecked] = useState<boolean>(false);

    useEffect(() => {
        setAllChecked(checkedItems.every(Boolean));
    }, [checkedItems]);

    const handleCheckChange = (index: number) => {
        setCheckedItems(prev => prev.map((v, i) => (i === index ? !v : v)));
    };

    const handleAllCheckChange = () => {
        setAllChecked(prev => !prev);
        setCheckedItems(new Array(terms.length).fill(!allChecked));
    };
    return (
        <ul className='w-full h-[230px] bg-white font-sans'>
            {terms.map((term, index) => (
        <li key={index} className='w-full h-[45.4px] block py-[14px] px-[15px] text-[12px] border-b-[1.5px] relative'>
            <span className=''>
                <input type='checkbox'checked={checkedItems[index]} onChange={() => handleCheckChange(index)}/>
                <label>
                    <span className='pl-2'>{term}</span>
                </label>
            </span>
            <Link href='#' className='absolute text-[9px] text-zinc-500 top-[14px] right-5 border-2 px-1'>내용보기</Link>
        </li>
            ))}
        <li className='w-full h-[45.4px] block py-[14px] px-[15px] text-[12px]'>
            <span><input type='checkbox' checked={allChecked} onChange={handleAllCheckChange}/>
                <label>
                    <span className='text-red-400 pl-2'>전체 동의</span>
                </label>
                </span>
        </li>
        </ul>
    )
}
