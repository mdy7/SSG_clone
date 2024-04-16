'use client';
import OptionSelector from '@/components/ui/OptionSelector';
import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import SmallArrowIcon from '@/images/svgs/SmallArrowIcon';
import { optionSelectorOpenState, optionState } from '@/state/optionState';
import { optionListType } from '@/types/optionListType';
import { useRecoilState, useSetRecoilState } from 'recoil';

export default function OptionSelectorList({
  optionNames,
  selectedOption,
}: {
  optionNames: string[];
  selectedOption: (option: optionListType) => void;
}) {
  // console.log('OptionSelectorList', optionNames);

  const optionNameList = useRecoilValue(optionState);
  const setOpenOptionModal = useSetRecoilState(optionSelectorOpenState);

  const handleOptionSelect = (option: optionListType) => {
    // find option nextIndex
    // finded option of isChecked is true
    // if (option.isChecked) {
    selectedOption(option);
    setOpenOptionModal(true);
    return;
    // }

    // alert('위 옵션부터 선택해주세요.');
  };

  return (
    <div className="pb-[12px] overflow-scroll pt-2 px-[15px] bg-white mb-1">
      {optionNameList.map((option: optionListType) => (
        <div
          key={option.id}
          className={`${
            option.isChecked
              ? ' cursor-pointer border-[red]'
              : ' cursor-not-allowed opacity-40'
          } border h-[42px] rounded-md mb-3 flex items-center justify-between px-3 py-3`}
          onClick={() => handleOptionSelect(option)}
        >
          <p className="text-xs">선택하세요. ({option.name})</p>
          <div className="w-4 rotate-90 text-gray-700">
            <SmallArrowIcon />
          </div>
        </div>
      ))}
    </div>
  );
}
