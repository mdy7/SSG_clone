import React from 'react';

import SmallArrowIcon from '@/images/svgs/SmallArrowIcon';

export default function OptionModalHandler({
  rotate,
  onClose,
}: {
  rotate: string;
  onClose: () => void;
}) {
  return (
    <div
      onClick={onClose}
      className="text-center rounded-t-lg bg-white justify-center flex"
    >
      <div className={`w-7 h-7 z-[1] ${rotate} text-gray-400`}>
        <SmallArrowIcon />
      </div>
    </div>
  );
}
