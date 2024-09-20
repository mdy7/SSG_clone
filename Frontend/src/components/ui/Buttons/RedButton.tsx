import React from 'react'

export default function RedButton({title}:any) {
    return (
        <>
        <button type='submit' className="w-full h-[50px] bg-rose-500 flex justify-center items-center">
            <div className="text-white text-base font-medium font-sans-serif">{title}</div>
        </button>
        </>
    )
}
