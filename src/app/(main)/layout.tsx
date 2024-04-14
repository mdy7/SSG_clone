import BottomHeader from "@/components/layouts/BottomHeader";
import Footer from "@/components/layouts/Footer";
import Navigation from "@/components/layouts/Navigation";
import TopHeader from "@/components/layouts/TopHeader";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TopHeader />
      <BottomHeader />
      {children}
      <Footer />
      <Navigation />
    </>
  );
}
