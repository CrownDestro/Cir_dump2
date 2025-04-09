import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/app/providers"; // 👈 import Providers

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skill Dev Dashboard",
  description: "Built by Dheeraj",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers> {/* 👈 Wrap your app here */}
      </body>
    </html>
  );
}
