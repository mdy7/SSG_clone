import Navigation from "@/components/layouts/Navigation";

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
