import { Inter } from "next/font/google";
// import type { Metadata } from 'next';
import "./globals.css";
import Header from '@/components/header';
import HeaderMobile from '@/components/header-mobile';
import SideNav from '@/components/side-nav';
import PageWrapper from '@/components/page-wrapper';
import MarginWidthWrapper from '@/components/margin-with-wrapper';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-white ${inter.className}`}>
        <div className='flex'>
            <SideNav />
            <main className='flex-1'>
                <MarginWidthWrapper>
                    <Header />
                    <HeaderMobile />
                    <PageWrapper>{children}</PageWrapper>
                </MarginWidthWrapper>
            </main>
        </div>
      </body>
    </html>
  );
}
