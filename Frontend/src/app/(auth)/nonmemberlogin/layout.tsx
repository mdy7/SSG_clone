import "../../globals.css";
import SimpleHeader from "@/components/layouts/SimpleHeader";

export default function NonmemberLoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SimpleHeader title="비회원 조회하기" />
      {children}
    </>
  );
}
