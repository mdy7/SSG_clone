import React from 'react';

export default function ReviewButton({buttonText, disabled}:any) {
  return (
    <div className='w-full h-[70.8px] p-[15px] border-t-[0.8px]'>
      <button className={`w-full h-10 rounded-lg font-sans text-sm ${disabled ? 'bg-gray-300 text-gray-500' : 'bg-black text-white' }`} disabled={disabled}>{buttonText}</button>
    </div>
  )
}
