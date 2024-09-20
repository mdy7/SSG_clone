import Footer from "@/components/layouts/Footer";
import Navigation from "@/components/layouts/Navigation";

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
