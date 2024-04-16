"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

import "./clip.css";
import ClipMain from "@/components/clip/ClipMain";
import ClipNavbar from "@/components/clip/ClipNavbar";
import ClipModal from "@/components/modal/ClipModal";
import FolderModal from "@/components/modal/FolderModal";

type FolderType = {
  folderId: number;
  name: string;
};

export default function ClipPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const session = useSession();
  const token = session?.data?.user?.accessToken;
  const [likeFolderListData, setLikeFolderListData] = useState([]);
  const [selectedFolderId, setSelectedFolderId] = useState(0);

  const openModal = () => {
    document.body.style.overflowY = 'hidden';
    setModalIsOpen(true);
  };

  const openModal2 = () => {
    document.body.style.overflowY = 'hidden';
    setModalIsOpen2(true);
  };

  const closeModal = () => {
    document.body.style.overflowY = 'auto';
    setModalIsOpen(false);
  };

  const closeModal2 = () => {
    document.body.style.overflowY = 'auto';
    setModalIsOpen2(false);
  };

  useEffect(() => {
    if (!token) return;
    // 좋아요폴더의 목록을 가져오는 API 호출
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/like/folder`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // 좋아요 상태 설정
        setLikeFolderListData(data.data);
      });
  }, [token]);
  
  return (
    <>
    <section>
      {modalIsOpen && <ClipModal closeModal={closeModal} />}
      {modalIsOpen2 && <FolderModal closeModal={closeModal2} likeFolderListData={likeFolderListData}/>}
      <ul className="pl-5 py-5 flex flex-row gap-4 text-xs text-center">
        <li>
          <Link href="/myclip" className="flex flex-col">
            <div className="flex-none relative">
              <div className="back"></div>
              <div className="heart"></div>
            </div>
            <p className="pt-2">전체보기</p>
          </Link>
        </li>
        {likeFolderListData.map((folder: FolderType) =>
          <li key={folder.folderId}>
            <button className="flex flex-col items-center" onClick={() => setSelectedFolderId(folder.folderId)}>
              <div className="flex-none relative">
                <span className="relative w-[57px] h-[57px] flex justify-center items-center bg-zinc-300 rounded-full">
                  <div className="absolute block w-[21px] h-[21px] bg-[url('https://sui.ssgcdn.com/ui/m_ssg/img/sprites/sp_mylike_20240208@2x.png')] bg-[length:180px_147px] bg-[position:-30px_-127px]">
                  </div>
                </span>
              </div>
              <p className="pt-2">{folder.name}</p>
            </button>
          </li>
        )}
        <li>
          <button onClick={openModal}>
            <div className="text-4xl text-zinc-400 w-14 h-14 rounded-full border border-zinc-200 leading-snug">
              +
            </div>
            <p className="pt-2 text-zinc-400">새폴더</p>
          </button>
        </li>
        <li>
          <button onClick={openModal2}>
          <div className="w-14 h-14 rounded-full border border-zinc-200 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="21px"
              height="19px"
              viewBox="0 0 512 512"
            >
              <g>
                <path
                  fill="#A1AAA1"
                  d="M 55.5,52.5 C 109.168,52.3333 162.834,52.5 216.5,53C 230.504,55.5866 242.004,62.4199 251,73.5C 255.341,80.1794 259.175,87.1794 262.5,94.5C 327.831,95.3333 393.164,95.8333 458.5,96C 482.395,102.564 496.562,118.064 501,142.5C 501.667,231.833 501.667,321.167 501,410.5C 496.732,436.768 481.565,452.602 455.5,458C 322.167,458.667 188.833,458.667 55.5,458C 29.8927,452.726 14.726,437.226 10,411.5C 9.33333,307.5 9.33333,203.5 10,99.5C 14.9078,73.7607 30.0744,58.0941 55.5,52.5 Z M 59.5,74.5 C 110.501,74.3333 161.501,74.5 212.5,75C 221.494,76.5808 228.661,81.0808 234,88.5C 245,110.5 256,132.5 267,154.5C 268.5,156 270,157.5 271.5,159C 330.167,159.333 388.833,159.667 447.5,160C 466.667,161.833 477.167,172.333 479,191.5C 479.667,262.5 479.667,333.5 479,404.5C 477.636,421.861 468.47,432.361 451.5,436C 320.833,436.667 190.167,436.667 59.5,436C 42.5302,432.361 33.3635,421.861 32,404.5C 31.3333,305.167 31.3333,205.833 32,106.5C 33.5529,89.1243 42.7195,78.4576 59.5,74.5 Z M 274.5,117.5 C 334.168,117.333 393.834,117.5 453.5,118C 466.95,121.782 475.283,130.449 478.5,144C 478.167,144.833 477.833,145.667 477.5,146.5C 470.196,141.787 462.196,138.954 453.5,138C 396.83,137.833 340.164,137.333 283.5,136.5C 280.216,130.266 277.216,123.933 274.5,117.5 Z"
                />
              </g>
            </svg>
          </div>
          <p className="pt-2 text-zinc-400">폴더관리</p>
          </button>
        </li>
      </ul>
    </section>
      <ClipNavbar />
      <ClipMain folderId={selectedFolderId}/>
    </>
  );
}
