import React, { ForwardedRef, useRef, useState } from "react";
import ReviewForm from "../layouts/ReviewForm";
import ReviewButton from "../ui/Review/ReviewButton";
// import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

const acceptedFileType = {
  img: "image/*",
  pdf: "application/pdf",
  csv: "text/csv",
  imgAndPdf: "image/*,application/pdf",
  all: "image/*,application/pdf,text/csv,application/gzip,application/xml,application/zip,application/msword,text/plain",
};

export interface UploadProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "accept" | "children"
  > {
  /** Specify type of the files */
  accept: "img" | "pdf" | "csv" | "imgAndPdf" | "all";
  /** Pass multiple files */
  multiple?: boolean;
  /** Whether disable upload */
  disabled?: boolean;
  /** Pass children to customize file item style */
  children?: React.ReactNode;
  /** Pass field label */
  label?: React.ReactNode;
  /** Set your custom text to show in upload field */
  placeholderText?: React.ReactNode;
  /** To pass getRootProps of react-dropzone */
  wrapperClassName?: string;
  /** Pass className to style the container */
  className?: string;
  /** Pass iconClassName to style the upload icon */
  iconClassName?: string;
  /** Pass label className to style label */
  labelClassName?: string;
  closeModal?: () => void;
  rating: number;
}

export default function ReviewWriteModal(
  {
    closeModal,
    rating,
  }: {closeModal: () => void; rating: number},
) {

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  // const s3 = new S3Client({
  //   region: process.env.AWS_REGION as string,
  //   credentials: {
  //     accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
  //     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  //   },
  // });

  // // s3 upload
  // const s3Upload = async (file: File) => {
  //   const params = {
  //     Bucket: process.env.AWS_BUCKET_NAME as string,
  //     Key: file.name,
  //     Body: file,
  //   };
  //   const data = await s3.send(new PutObjectCommand(params));
  //   console.log(data, "s3 upload");
  // };

  // const multiRef = useRef<HTMLInputElement>(null);
  // const [multiImages, setMultiImages] = useState<Array<File>>([]);

  // const handleMultiImageUpload = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   const uploadedFiles = (event.target as HTMLInputElement).files;
  //   if (!uploadedFiles) return;
  //   const splitFilename = selectedFile!.name.split(".");
  //   const filename = splitFilename[0] + Date.now() + "." + splitFilename.pop();
  //   // S3 upload
  //   const params = {
  //     Bucket: process.env.AWS_BUCKET_NAME || "union-lms-s3",
  //     Key: process.env.AWS_BUCKET_NAME + "/" + filename,
  //     Body: selectedFile,
  //     ACL: "public-read", // Corrected ACL value
  //   };
  //   console.log(uploadedFiles, "uploadedFiles");
  //   s3Upload(uploadedFiles[0]);

  //   const newFiles = Object.entries(uploadedFiles as object)
  //     .map((file) => {
  //       if (file[1].type.includes("image")) return file[1];
  //     })
  //     .filter((file) => file !== undefined);
  //   setMultiImages((prevFiles) => [...prevFiles, ...newFiles]);
  // };

  // const handleMultiImageDelete = (index: number) => {
  //   const updatedFiles = multiImages.filter((_, i) => i !== index);
  //   setMultiImages(updatedFiles);
  //   (multiRef.current as HTMLInputElement).value = "";
  // };

  return (
    <div className="w-full h-[445px] absolute bg-white">
      <div className="h-[68.5px] py-8 px-12 font-sans font-bold">
        <div className="flex gap-2 mb-8 items-center justify-center text-[13px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <span
              key={index}
              className={
                index < rating
                  ? "w-[18px] h-[18px] bg-sp_myssg_review bg-[position:-27px_-161px] bg-[length:220px_179px]"
                  : "w-[18px] h-[18px] bg-sp_myssg_review bg-[position:-56px_-161px] bg-[length:220px_179px]"
              }
            ></span>
          ))}
          {rating === 5
            ? "최고예요!"
            : rating === 4
            ? "좋아요"
            : rating === 3
            ? "보통이에요"
            : rating === 2
            ? "그냥그래요!"
            : rating === 1
            ? "아쉽네요!"
            : ""}
        </div>
      </div>
      <ReviewForm h3color="text-red-500" />
      <div className="w-full h-[79px] pt-4 mb-10 px-4">
        <div className="w-full h-[21px] mt-[22px] text-[13.5px] font-bold font-sans flex">
          <button className="flex gap-2 items-center" onClick={handleButtonClick}>
            <input
              type="file"
              title=""
              className="hidden"
              ref={fileInputRef}
            />
            <div className="w-[19px] h-4 bg-sp_myssg_review bg-[position:-152px_-129px] bg-[length:220px_179px]"></div>
            앨범보기
          </button>
          <button className="ml-2 flex gap-2 items-center">
            <div className="w-[18px] h-[18px] bg-sp_myssg_review bg-[position:0px_-161px] bg-[length:220px_179px]" />
            동영상
          </button>
        </div>
      </div>
      <div className="bg-white">
        <ReviewButton buttonText="등록" />
      </div>
    </div>
  );
}

