import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import "../../../../globals.css";
import PurchaseToolBar from "@/components/ui/PurchaseToolBar";

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
