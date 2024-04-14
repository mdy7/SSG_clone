import "../../../globals.css";
import Footer from "@/components/layouts/Footer";
import SimpleHeader from "@/components/layouts/SimpleHeader";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Suspense>
        <SimpleHeader title='간편회원가입' />
        {children}
        <Footer />
      </Suspense>
    </>
  );
}
