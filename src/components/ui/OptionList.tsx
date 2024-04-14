'use client';
import React, { useEffect, useState } from 'react';

import SmallArrowIcon from '@/images/svgs/SmallArrowIcon';
import getColorOptionList from '@/app/api/product/getOptionData';
import getSizeOptionList from '@/app/api/product/getSizeOptionData';
import getAddOptionList from '@/app/api/product/getAddOptionData';
import OptionModalHandler from './OptionModalHandler';
import { useSetRecoilState } from 'recoil';
import { optionSelectorOpenState } from '@/state/optionState';

export interface colorOptionType {
  id: number;
  color: string;
}

export interface sizeOptionType {
  id: number;
  size: string;
}

export interface addOptionType {
  id: number;
  optionName: string;
}

export default function OptionList({
  productId,
  optionNames,
  optionType,
  optionListData,
  setSelectedOptions,
}: {
  productId: string;
  optionNames: string[];
  optionType: string;
  optionListData: colorOptionType[];
  setSelectedOptions: React.Dispatch<React.SetStateAction<any>>;
}) {
  const setOpenOptionModal = useSetRecoilState(optionSelectorOpenState);

  const handleCloseModal = () => {
    setOpenOptionModal(false);
  };

  const handleOptionSelect = (option: colorOptionType) => {
    setSelectedOptions((prev: any) => {
      return {
        ...prev,
        color: option.color,
        id: option.id,
      };
    });
    setOpenOptionModal(false);
  };

  return (
    <div className="fixed z-[3000] left-0 right-0 bottom-0">
      <div className="bg-gradient-to-t from-gray-700 via-gray-100 block -top-3 h-[14px] left-0 right-0 opacity-15"></div>
      <OptionModalHandler rotate={'rotate-90'} onClose={handleCloseModal} />
      <div className="min-h-[391px] pb-[15px] pt-2 px-[15px] bg-white">
        <div className="border h-[42px] rounded-md mb-3">
          <div className="flex items-center justify-between px-3 pt-3">
            <span className="text-xs">선택하세요. ({optionType})</span>
            <div className="w-4 -rotate-90 text-gray-700">
              <SmallArrowIcon />
            </div>
          </div>
        </div>
        <div className="mr-[15px] pb-3 w-full h-full overflow-y-scroll">
          <ul className="px-3 text-xs">
            {optionListData &&
              optionListData.map((option: colorOptionType) => (
                <li
                  key={option.id}
                  className="py-5 overflow-hidden break-all flex justify-between items-center"
                  onClick={() => handleOptionSelect(option)}
                >
                  {option.color}
                  <span className="text-gray-400">옵션2(품절)</span>
                  <button className="border border-black py-2 px-2 text-xs">
                    입고알림
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
