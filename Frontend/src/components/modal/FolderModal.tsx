'use client'
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import ClipModal2 from "./ClipModal2";

export default function FolderModal({ closeModal, likeFolderListData }: any) {
  const [name, setFolderName] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [openClipModalAfterFolderModal, setOpenClipModalAfterFolderModal] = useState(false);
  const session = useSession();
  const token = session.data?.user?.accessToken;

  const openModalAndSetFlag = () => {
    document.body.style.overflowY = "hidden";
    setOpenClipModalAfterFolderModal(true);
  };

  useEffect(() => {
    setAnimate(true); // 모달이 마운트되면 애니메이션 시작
  }, []);

  useEffect(() => {
    if (!modalIsOpen && openClipModalAfterFolderModal) {
      setModalIsOpen(true);
      setOpenClipModalAfterFolderModal(false);
    }
  }, [modalIsOpen, openClipModalAfterFolderModal]);

  const DeleteFolder = (token: string, likeFolderId:string): void => {
    // Specify the return type as void
    // console.log("token:", token);
    const response = fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/like/folder`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ folderId:likeFolderId }),
      }
    );
    closeModal();
  };

  return (
    <>
      {modalIsOpen && <ClipModal2 closeModal={closeModal} />}
      <div
        className="fixed inset-0 bg-black opacity-50 z-10"
        onClick={closeModal}
      ></div>
      <div
        className={`w-full h-[314.8px] transform ${
          animate ? "translate-y-0" : "translate-y-full"
        } absolute bottom-0 font-sans transition-transform ease-out duration-500 z-20 bg-white rounded-lg`}
      >
        <div className="h-[46px] border-b-[1.5px] flex items-center justify-center">
          <h2 className="font-bold text-[14px] text-center space-x-[-0.5px] tracking-tighter">
            폴더 관리
          </h2>
        </div>
        <div className="w-full h-[280px] py-[15px]">
          <ul>
            <li className="relative w-full font-sans text-[14px] pl-[14px] pt-5 pb-[15px] pr-[60px]">
              <button className="flex justify-center items-center" onClick={openModalAndSetFlag}>
                <div className='block bg-[url("https://sui.ssgcdn.com/ui/m_ssg/img/sprites/sp_mylike_20240208@2x.png")] bg-[length:180px_147px] bg-[position:-134px_0px] w-5 h-5 pl-7 text-left'></div>
                새 폴더
              </button>
            </li>
            {likeFolderListData.map((folder: any) => (
              <li
                key={folder.folderId}
                className="relative w-full font-sans text-[14px] pl-[14px] pt-5 pb-[15px] pr-[60px]"
              >
                <button className="flex justify-center items-center" onClick={() =>DeleteFolder(token, folder.folderId)}>
                  <div className='block bg-[url("https://sui.ssgcdn.com/ui/m_ssg/img/sprites/sp_mylike_20240208@2x.png")] bg-[length:180px_147px] bg-[position:-134px_-90px] w-5 h-5 pl-7 text-left'></div>
                  {folder.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
