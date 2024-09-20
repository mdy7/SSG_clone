import SimpleHeader from "@/components/layouts/SimpleHeader";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SimpleHeader title="리뷰 전체 보기" />
      {children}
    </>
  );
}
