'use client'

import Link from 'next/link';
import React from 'react';

export default function TabListUi({
    title,
    subtitle,
    titleUrl,
    isExpanded,
}: {
    title: string,
    subtitle?: string,
    titleUrl: string,
    isExpanded: boolean,
}) {

    return (
        <li className='w-full'>
            <Link
                href={titleUrl} onClick={(e) => e.preventDefault()}
                className={`flex justify-center items-center ${isExpanded ? 'border-2 border-black font-bold' : 'bg-zinc-100'}`}>
                <p className='py-[8px] text-center font-sans'>{title}<br />{subtitle}</p>
            </Link>
        </li>
    )
}
