import type { Metadata } from "next";
import localFont from "next/font/local";
import "./assets/globals.css";
import Tabs from "@/components/Tabs"
import Header from "@/components/Header";

const geistSans = localFont({
  src: "./assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Zsocial",
  description: "Secure, fun and useful",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Tabs />
      </body>
    </html>
  );
}
