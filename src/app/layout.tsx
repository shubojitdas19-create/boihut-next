import type { Metadata } from "next";
import { Fraunces, Work_Sans, Tiro_Bangla, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext"; // 1. Import the Cart Provider

const fraunces = Fraunces({
  axes: ["opsz", "SOFT"],
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work",
  subsets: ["latin"],
});

const tiroBangla = Tiro_Bangla({
  weight: "400",
  variable: "--font-tiro",
  subsets: ["bengali"],
});

const hindSiliguri = Hind_Siliguri({
  weight: ["400", "500", "600", "700"],
  variable: "--font-hind",
  subsets: ["bengali"],
});

export const metadata: Metadata = {
  title: "বইhut — Kolkata reads here | বই-এর নতুন ঠিকানা",
  description: "Kolkata's own online bookstore. New arrivals, Bangla classics, poetry, thrillers and kids' books — hand-picked, genuine, delivered fast. পড়ুন, ভাবুন।",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${workSans.variable} ${tiroBangla.variable} ${hindSiliguri.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        {/* 2. Wrap the children inside the provider */}
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}