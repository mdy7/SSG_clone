'use client';
import React, { useEffect } from 'react';

import SmallArrowIcon from '@/images/svgs/SmallArrowIcon';
import { optionSelectorOpenState, optionState } from '@/state/optionState';
import { optionListType } from '@/types/optionListType';
import { useRecoilState, useSetRecoilState } from 'recoil';

export default function OptionSelector({
  option,
  selectedOption,
}: {
  option: optionListType;
  selectedOption: (option: optionListType) => void;
}) {
  const [optionNameList, setOptionList] = useRecoilState(optionState);
  const setOpenOptionModal = useSetRecoilState(optionSelectorOpenState);

  const handleOptionSelect = () => {
    // find option nextIndex
    // finded option of isChecked is true
    // if (option.isChecked) {
    selectedOption(option);
    setOpenOptionModal(true);
    return;
    // }

    alert('위 옵션부터 선택해주세요.');
  };

  useEffect(() => {
    console.log('OptionSelector', optionNameList);
  }, [optionNameList]);

  return (
    <li
      className={`${
        option.isChecked
          ? ' cursor-pointer border-[red]'
          : ' cursor-not-allowed opacity-40'
      } border h-[42px] rounded-md mb-3 flex items-center justify-between px-3 py-3`}
      // onClick={handleOptionSelect}
    >
      <p className="text-xs">선택하세요. ({option.name})</p>
      <div className="w-4 rotate-90 text-gray-700">
        <SmallArrowIcon />
      </div>
    </li>
  );
}
