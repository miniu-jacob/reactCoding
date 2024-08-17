import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from '@/components/Sidebar';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
          <body className={ `${ inter.className } flex` }>
            {/* 사이드바 영역 */}
            <Sidebar  />
            {/* 메인 콘텐츠 영역 */}
            <main className='flex-1 ml-36 p-6'>
                {children}
            </main>
        </body>
    </html>
  );
}
