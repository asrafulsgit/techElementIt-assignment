import type { Metadata } from "next";
import {Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReduxProvider from "@/components/lib/ReduxProvider";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Shop Hub",
  description: "Shop Hub is an Ecommerce App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <ReduxProvider>
            <Navbar />
              {children}
            <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
