import Footer from "@/components/layouts/Footer";
import SimpleHeader from "@/components/layouts/SimpleHeader";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SimpleHeader title='좋아요'/>
      {children}
      <Footer />
    </>
  );
}
