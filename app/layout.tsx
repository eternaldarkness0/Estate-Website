import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import RespNavbar from "@/components/Home/Navbar/RespNavbar";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const font = Roboto ({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Estate Website",
  description: "Estate website | next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <RespNavbar />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
