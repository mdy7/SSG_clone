import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import AuthProvider from '@/components/provider/AuthProvider';
import RecoilProvider from '@/components/provider/RecoilProvider';
import TopHeader from '@/components/layouts/TopHeader';
import BottomHeader from '@/components/layouts/BottomHeader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '믿고 사는 즐거움 SSG.COM',
  description:
    '신세계 그룹의 온라인 쇼핑 플랫폼, SSG.COM. 신세계몰, 신세계백화점, 이마트몰, 트레이더스, 신세계라이브쇼핑, S.I. Village가 SSG.COM 이라는 이름으로 하나가 되었어요.',
  authors: [],
  keywords:
    'SSG.COM, 신세계몰, 신세계백화점, 이마트몰, 트레이더스, 신세계라이브쇼핑, S.I. Village',
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <RecoilProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </RecoilProvider>
      </body>
    </html>
  );
}
