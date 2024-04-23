"use client";
import Image from "next/image";
import {
  TonConnectButton,
  TonConnectUIProvider,
  useTonConnectModal,
  useTonConnectUI,
  THEME,
  TonConnectUI,
  useTonAddress,
} from "@tonconnect/ui-react";

export default function Home() {
  const { state, open, close, disconnect } = useTonConnectModal();
  const userFriendlyAddress = useTonAddress();

  const { tonConnectUI, setOptions } = useTonConnectUI();
  TonConnectUI.uiOptions = {
    language: "en",
    uiPreferences: {
      theme: THEME.LIGHT,
      Color: "white",
      ColorsSet: "white",
    },
  };

  const handleWallet = () => {
    tonConnectUI.disconnect();
  };
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <TonConnectButton />
      <button onClick={open}>Connect</button>
      {/* <button onClick={disconnect}>Disconet</button> */}
      <h1 className="text-white">Address: {userFriendlyAddress}</h1>
      <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm bg-white lg:flex"></div>
    </main>
  );
}
