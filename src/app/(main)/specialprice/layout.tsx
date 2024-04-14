import BottomHeader from "@/components/layouts/BottomHeader";
import Navigation from "@/components/layouts/Navigation";
import TopHeader from "@/components/layouts/TopHeader";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Navigation />
    </>
  );
}
