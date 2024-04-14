import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import "../../../../globals.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
