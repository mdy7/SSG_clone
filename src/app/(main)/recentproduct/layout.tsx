import BottomHeader from "@/components/layouts/BottomHeader";
import Footer from "@/components/layouts/Footer";
import Navigation from "@/components/layouts/Navigation";
import TopHeader from "@/components/layouts/TopHeader";

export default function RecentProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Footer />
      <Navigation />
    </>
  );
}
