"use client";
import Image from "next/image";
import { TonConnectButton, TonConnectUIProvider } from "@tonconnect/ui-react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <TonConnectButton />
      <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm bg-white lg:flex"></div>
    </main>
  );
}
