import Footer from "@/components/layouts/Footer";
import SimpleHeader from "@/components/layouts/SimpleHeader";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SimpleHeader title='신세계포인트 통합회원 가입'/>
      {children}
      <Footer />
    </>
  );
}
