import "../../globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import Navigation from "@/components/layouts/Navigation";

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
      <Navigation />
    </>
  );
}
