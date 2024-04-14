import React from 'react';
import Image from 'next/image';

export default function AdImage({
  src, alt, width, height
}: {
  src: string,
  alt: string,
  width: number,
  height: number
}) {
  return (
    <div className=''>
      <Image
        priority
        width={width}
        height={height}
        src={src}
        alt={alt} />
    </div>
  )
}
