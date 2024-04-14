import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CategoryProductListBottomHeader from "@/components/pages/category/CategoryProductListToolBar";

export default function Layout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: {
    lCtg: number,
    mCtg: number,
    sCtg: number,
    detailCtg?: number
  }
}>,
) {
  return (
    <>
      {children}
    </>
  );
}
