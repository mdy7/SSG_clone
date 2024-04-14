import "../../globals.css";
import Footer from "@/components/layouts/Footer";
import SimpleHeader from "@/components/layouts/SimpleHeader";

export default function MemberLoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SimpleHeader title='로그인'/>
      {children}
      <Footer />
    </>
  );
}
