import type { Metadata } from "next";
import {Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReduxProvider from "@/components/lib/ReduxProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "ShopHub",
  description: "Explore top-rated products, featured deals, and exclusive collections at our modern e-commerce store. Shop smart, shop fast, and enjoy a seamless experience.",
  icons: {
    icon: '/favicon.png',
  },

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
              <Toaster position="top-center" />
              {children}
            <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
