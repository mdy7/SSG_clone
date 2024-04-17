'use client';

import getOptionData from '@/app/api/product/getOptionData';
import getSelectedOptionProduct from '@/app/api/product/getSelectedOptionProduct';
import { addOptionType, colorOptionType, sizeOptionType } from '@/components/ui/OptionList';
import OptionModalHandler from '@/components/ui/OptionModalHandler';
import OptionSelectedProduct from '@/components/ui/OptionSelectedProduct';
import ProductDetailTotalPrice from '@/components/ui/ProductDetailTotalPrice';
import { isLastOptionSelectedState, selectedOptionsState } from '@/state/optionState';
import { productType } from '@/types/productType';
import React, { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

interface ProductOptionsAvailableType {
  Color: boolean;
  Size: boolean;
  AddOption: boolean;
};

interface selectedOptionProductFetchType {
  productId: string;
  colorId: string;
  sizeId: string;
  addOptionId: string;
};

const getData = async (url: string) => {
  const res = await fetch(
    `${process.env.API_BASE_URL}${url}`, //여러개 삭제 api 만들어달라하기
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  )

  if (!res.ok) {
    throw new Error('Response not OK');
  }
  const data = await res.json();
  return data.data;
}

function ProductOptionModal({
  params,
  modalClose,
  getOptionList,
  productOptionData,
  setProductCnt,
}: {
  params: { productId: number };
  modalClose: () => void;
  getOptionList: (optionForm: FormData) => void;
  productOptionData: ProductOptionsAvailableType;
  setProductCnt: any;
}) {
  // const [selectValues, setSelectValues] = useState({
  //   select1: "",
  //   select2: "",
  //   select3: "",
  // });

  //   return (
  //     <div className='absolute bottom-20'>
  //       <select onChange={(e) =>
  //         setSelectValues((prevValues) => ({
  //           ...prevValues,
  //           select1: e.target.value,
  //         }))
  //       }>
  //         <option value="option1">Option 1</option>
  //         <option value="option2">Option 2</option>
  //         <option value="option3">Option 3</option>
  //       </select>
  //       <select onChange={(e) =>
  //         setSelectValues((prevValues) => ({
  //           ...prevValues,
  //           select2: e.target.value,
  //         }))
  //       }>
  //         <option value="option1">Option 4</option>
  //         <option value="option2">Option 5</option>
  //         <option value="option3">Option 6</option>
  //       </select>
  //       <select onChange={(e) => {
  //         const newValues = {
  //           ...selectValues,
  //           select3: e.target.value,
  //         };

  //         setSelectValues(newValues);
  //         console.log(newValues);

  //         setSelectValues({
  //           select1: "",
  //           select2: "",
  //           select3: "",
  //         });
  //       }}
  //       >
  //         <option value="option1">Option 7</option>
  //         <option value="option2">Option 8</option>
  //         <option value="option3">Option 9</option>
  //       </select>
  //     </div>
  //   )
  // }

  const [colorData, setColorData] = useState<colorOptionType[]>([]);
  const [sizeData, setSizeData] = useState<sizeOptionType[]>([]);
  const [addOptionData, setAddOptionData] = useState<addOptionType[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [productData, setProductData] = useState<productType | null>(null);
  //   const [currentSelection, setCurrentSelection] = useRecoilState(selectedOptionsState);
  //   const setIsLastOptionSelected = useSetRecoilState(selectedOptionsState); // 선택된 옵션들을 저장하는 상태
  //   const [isLastOption, setIsLastOption] = useState(false);

  //   // console.log(currentSelection);
  useEffect(() => {
    const fetchProductData = async () => {
      const productData = await getData(`/product/${params.productId}`);
      setProductData(productData as productType);
    };
    fetchProductData();
  },[productData, params.productId]);

  useEffect(() => {
    const fetchOptionData = async () => {
      if (productOptionData.Color) {
        const colorData = await getOptionData(params.productId, 'color');
        setColorData(colorData as colorOptionType[]);
      }
      if (productOptionData.Size) {
        const sizeData = await getOptionData(params.productId, 'size');
        setSizeData(sizeData as sizeOptionType[]);
      }
      if (productOptionData.AddOption) {
        const addOptionData = await getOptionData(params.productId, 'add-option');
        setAddOptionData(addOptionData as addOptionType[])
      }
    };
    fetchOptionData();
  }, [params.productId, productOptionData.Color, productOptionData.Size, productOptionData.AddOption]);

  // useEffect(() => {
  //   const selectedOptionProductFetch = async () => {
  //     if (currentSelection.color && currentSelection.size && currentSelection.addOption) {
  //       const productData: selectedOptionProductFetchType = await getSelectedOptionProduct(
  //         params.productId,
  //         currentSelection.color || '1',
  //         currentSelection.size || '1',
  //         currentSelection.addOption || '1'
  //       ) as selectedOptionProductFetchType;
  //       setProductData(productData);
  //     }
  //     selectedOptionProductFetch();
  //   }
  // }, [currentSelection, params.productId])

  // const handleOptionChange = (optionType: string, value: string) => {
  //   setCurrentSelection(prev => ({
  //     ...prev,
  //     [optionType]: value
  //   }));
  //   const updatedValue = value === 'none' || value === null ? '1' : value;
  //   setCurrentSelection(prev => ({
  //     ...prev,
  //     [optionType]: updatedValue
  //   }));
  // };

  //   useEffect(() => {
  //     // 모든 옵션이 선택되었는지 확인
  //     const allOptionsSelected = Object.values(currentSelection).every(selection => selection !== null);
  //     // setIsLastOptionSelected(allOptionsSelected); // 마지막 옵션 선택 상태 업데이트
  //   }, [currentSelection, setIsLastOptionSelected]);
  //   const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  //   console.log(currentSelection);
  //   console.log(productOptionData);

  //   const handleOptionChange = (optionType: string, value: string) => {
  //     setCurrentSelection((prev: any) => ({
  //       ...prev,
  //       [optionType]: value === 'none' ? null : value // 'none' 선택 시 null로 설정
  //     }));
  //     setSelectedOptions(prevOptions => [...prevOptions, value]);
  //   };

  //   // console.log(currentSelection)

  return (
    <div className='bg-white shadow rounded-xl'>
      <OptionModalHandler rotate={'rotate-90'} onClose={() => modalClose()} />
      <div className='w-full px-5 py-5 bg-white'>
        {/* <form className='flex justify-center flex-col gap-3'>
          {productOptionData.Color && (
            <select
              className='border rounded-md py-2 border-gray-300 text-xs'
              name="color"
              onChange={(e) =>
                        setSelectValues((prevValues) => ({
                          ...prevValues,
                          select1: e.target.value,
                        }))
                      }
              defaultValue={'none'}
            >
              <option value='none' disabled>선택하세요.(color)</option>
              {colorData.map((color, idx) => (
                <option key={idx} value={color.id}>
                  {color.color}
                </option>
              ))}
            </select>
          )}
          {productOptionData.Size && (
            <select
              className='border rounded-md py-2 border-gray-300 text-xs'
              name="size"
              onChange={(e) =>
                setSelectValues((prevValues) => ({
                  ...prevValues,
                  select2: e.target.value,
                }))
              }
              defaultValue={'none'}
            >
              <option value='none' disabled>선택하세요.(size)</option>
              {sizeData.map((size, idx) => (
                <option key={idx} value={size.id}>
                  {size.size}
                </option>
              ))}
            </select>
          )}
          {productOptionData.AddOption && (
            <select
              className='border rounded-md py-2 border-gray-300 text-xs'
              name="addOption"
              onChange={(e) => {
                setSelectValues((prevValues) => ({
                  ...prevValues,
                  select3: e.target.value,
                }));
            
                if (productOptionData.AddOption) {
                  console.log(selectValues);
                  setSelectValues({
                    select1: "",
                    select2: "",
                    select3: "",
                  });
                }
              }}
              defaultValue={'none'}
            >
              <option value='none' disabled>선택하세요.(add-option)</option>
              {addOptionData.map((addOption, idx) => (
                <option key={idx} value={addOption.id}>
                  {addOption.optionName}
                </option>
              ))}
            </select>
          )}
        </form> */}
      </div>
      <div className='overflow-y-scroll max-h-[200px]'>
        {productData && <OptionSelectedProduct productData={productData} setTotalPrice={setTotalPrice} setProductCnt2={setProductCnt}/>}
      </div>
      <ProductDetailTotalPrice totalPrice={totalPrice} />
    </div>
  );
}

export default ProductOptionModal;