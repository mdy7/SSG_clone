'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Rank from './Rank'
import Link from 'next/link'
import { ThumnailType } from '@/types/ThumnailType';

const getThumnailImageData = async (productId: number) => {
    
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/product/${productId}/thumbnail`, {cache: 'no-cache'});
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // console.log(data);
        return data.data;
    } catch (error) {
        console.error('Error:', error);
    }
};

export default function Thumnail({id}: {id: number}) {
  const [thumnail, setThumnail] = useState<ThumnailType | null>(null);
  useEffect(() => {
    getThumnailImageData(id).then(data => {
        setThumnail(data);
    });
}, [id]);
    if (!thumnail) {
        return <div className='animate-pulse bg-gray-200 w-full h-[400px]'></div>;
    }
    // console.log(thumnail);

  return (
    <div className='relative'>
          <Link
            href={`/products/detail/${id}`}>
            <div className='relative'>
              <div className='overflow-hidden justify-center items-center w-full h-auto object-cover'>
                <Image
                    src={thumnail.url}
                    width={800}
                    height={800}
                    alt='name'
                />
              </div>
            </div>
          </Link>
          {/* <Rank /> */}
        </div>
  )
}
