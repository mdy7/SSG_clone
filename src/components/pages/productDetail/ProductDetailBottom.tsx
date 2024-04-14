import React from 'react';

import AdImage from '@/components/layouts/AdImage';

export default function ProductDetailBottom() {
  return (
    <>
      <section>
        <div className='border-t-[15px]'>
          <AdImage
            src={'https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202306/2023060809574180075551801655_598.jpg&w=750&t=aa8dcb01bf15e184376b817b3eed864b5fb2d071'}
            alt={'쓱머니제공'}
            width={720}
            height={156} />
        </div>
        <div className='border-t-[15px] border-b-[15px]'>
          <AdImage
            src={'https://sstatic.ssgcdn.com/promo/event/ssg/202403/42512815889732437.jpg'}
            alt={'반품 무료'}
            width={720}
            height={180} />
        </div>
      </section>
    </>
  )
}
