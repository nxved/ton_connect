"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <TonConnectUIProvider manifestUrl="https://ton-connect-ruddy.vercel.app/tonconnect-manifest.json">
        <body className={inter.className}>{children}</body>
      </TonConnectUIProvider>
    </html>
  );
}
