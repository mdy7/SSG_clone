'use client';

import React, { useEffect, useState } from 'react';

import OptionList, { colorOptionType } from '../ui/OptionList';
import OptionModalHandler from '../ui/OptionModalHandler';
import ProductDetailTotalPrice from '../ui/ProductDetailTotalPrice';
import OptionSelectorList from '../pages/productDetail/OptionSelectorList';
import { productOptionsAvailableType } from '@/types/productOptionAvailableType';
import { optionAvailableType } from '@/types/optionAvailableType';
import { useRecoilValue } from 'recoil';
import { optionSelectorOpenState } from '@/state/optionState';
import { useRecoilState } from 'recoil';
import { optionState } from '@/state/optionState';
import { optionListType } from '@/types/optionListType';
import { productDataType } from '@/types/productDataType';
import getColorOptionList from '@/app/api/product/getOptionData';

export default function OptionSelectModal({
  productId,
  includedOptions,
  onClose,
}: {
  productId: string;
  includedOptions: productOptionsAvailableType;
  onClose: () => void;
}) {
  const [selectedOption, setSelectedOption] = useState<optionListType>();

  const [selectedOptions, setSelectedOptions] = useState([
    {
      color: '',
      id: null,
    },
    {
      size: '',
      id: null,
    },
    {
      addOption: '',
      id: null,
    },
  ]);
  const [getOptionListData, setGetOptionListData] = useState<productDataType[]>(
    [] as productDataType[]
  );
  const openSelected = useRecoilValue(optionSelectorOpenState);

  const filteredOptions: optionAvailableType = Object.entries(includedOptions)
    .filter(([_, value]) => value === true)
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

  const optionNames = Object.keys(filteredOptions);

  const handleSelectOption = (option: optionListType) => {
    setSelectedOption(option);
  };

  const [optionNameList, setOptionList] = useRecoilState(optionState);
  const [optionListData, setOptionListData] = useState<colorOptionType[]>();

  useEffect(() => {
    setOptionList(
      optionNames.map((name, idx) => {
        if (idx === 0) {
          return {
            id: idx,
            name: name,
            isChecked: true,
          };
        } else {
          return {
            id: idx,
            name: name,
            isChecked: false,
          };
        }
      })
    );
  }, [optionNames, setOptionList]);

  useEffect(() => {
    // console.log('OptionSelectModal', selectedOption);
    // console.log(optionNames);
    if (!selectedOption) return;
    if (selectedOption.id === optionNames.length - 1) {
      // console.log('옵션 선택 완료');
      const getLastSelectData = async () => {
        const res = await fetch(
          `https://nocaffein.shop/api/v1/option-selected-product/selected-options-list?product=${productId}&color=${selectedOptions[0].id}&size=${selectedOptions[1].id}&addOption=${selectedOptions[2].id}`
        );
        const data = await res.json();
        // console.log(data);
      };
      getLastSelectData();
      return;
    }
    const optionName = selectedOption.name;
    const getData = async (productId: string, optionType: string) => {
      const res: any = await getColorOptionList(productId, optionType);
      setOptionListData(res);
      // console.log(res);
    };

    getData(productId, optionName.toLowerCase());

    // const getOptionListData = async (optionType: string) => {
    //   let optionConverter = optionType.toLowerCase();
    //   if (optionConverter === 'addoption' && optionType !== '') {
    //     optionConverter = 'add-option';
    //   }
    //   // ('use server');
    //   const res = await getColorOptionList(params.productId, optionConverter);

    // };
    // const getData = async (productId:number, colorOptionId:number, sizeOptionId:number, addOptionId:number) => {
    //   const res = await fetch(
    //     `https://nocaffein.shop/api/v1/option-selected-product/selected-options-list?product=${productId}&color=${colorOptionId}&size=${sizeOptionId}&addOption=${addOptionId}`
    //   )
    //   const data = await res.json();
    //   console.log(data);
    // }
    // getData(productId, colorOptionId, sizeOptionId, addOptionId);
  }, [selectedOptions, productId, selectedOption, optionNames]);

  return (
    <>
      <div className="bg-gradient-to-t from-gray-700 via-gray-100 block -top-3 h-[14px] left-0 right-0 opacity-15"></div>
      <div className="bg-white">
        <OptionModalHandler rotate={'rotate-90'} onClose={onClose} />
        <OptionSelectorList
          optionNames={optionNames}
          selectedOption={handleSelectOption}
        />
        {/* {selectedOption.length > 0 &&
            <OptionSelectedProduct
              name={selectedOption}
              value={setTotalPrice} />} */}
        <ProductDetailTotalPrice />
        {openSelected && (
          <OptionList
            productId={productId}
            optionNames={optionNames}
            optionType={selectedOption?.name || ''}
            optionListData={(optionListData && optionListData) || []}
            setSelectedOptions={setSelectedOptions}
          />
        )}
      </div>
    </>
  );
}
