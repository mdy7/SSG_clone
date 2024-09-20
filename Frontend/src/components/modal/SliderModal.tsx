"use client";
import React, { useEffect } from "react";

interface SliderModalProps {
  children: React.ReactNode;
  isModalOpen: boolean;
  onChangeModal: () => void;
}

function SliderModal({ children, isModalOpen, onChangeModal }: SliderModalProps) {
  // 모달 오픈시 body 스크롤 막기
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <>
      <div
        onClick={onChangeModal}
        className={`
                    fixed top-0  z-[200]
                    w-screen h-full 
                    bg-[#222222] bg-opacity-70 
                    transition-all
                    ${isModalOpen ? "" : "hidden"}`}
      ></div>
      <div
        style={{
          transform: isModalOpen ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.3s ease-out",
        }}
        // style={{ top: isModalOpen ? "40%" : "100%", transition: "ease-out 0.3s" }}
        className={`
                    fixed bottom-0 right-0 left-0 z-[300]
                    rounded-t-2xl w-screen 
                    bg-red-300
                    
                `}
      >
        {children}
      </div>
    </>
  );
}

export default SliderModal;
