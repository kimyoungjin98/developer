import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "김영진",
  description: "김영진 이력서",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased print:h-auto print:min-h-0 print:bg-white`}
    >
      <body className="min-h-full flex flex-col print:block print:h-auto print:min-h-0 print:bg-white!">
        {children}
      </body>
    </html>
  );
}
