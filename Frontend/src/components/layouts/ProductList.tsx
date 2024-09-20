import React, { Suspense } from 'react';

import { exampleProductData } from '@/lib/exampleProductData';
import PopularProduct from './PopularProduct';

export default async function ProductList() {

  return (
    <div className='grid-cols-custom grid gap-y-0 gap-x-2 ms-4 me-4'>
      {exampleProductData.map((item) => {
        return (
          <Suspense
            key={item.id}
            fallback={<div>Loading...</div>}>
            <PopularProduct
              id={item.id}
              src={item.src}
              store={item.store}
              brand={item.brand}
              name={item.name}
              subtitle={item.subtitle}
              price={item.price}
              sale={item.sale}
              salePrice={item.salePrice}
              reviewRating={item.reviewRating}
              reviewCount={item.reviewCount}
            />
          </Suspense>
        )
      })}
    </div>
  );
}
