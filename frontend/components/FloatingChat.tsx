"use client"
import React, { useState, useEffect } from "react";
import { FloatingInbox } from "../src/app/chat/FloatingInbox-text/index.js";
import { useWallet } from '../src/components/context/walletconexion';

import { Signer } from "ethers";

const FloatingChat: React.FC = () => {
  const { getSigner, connectWallet, disconnectWallet, walletAddress } = useWallet();
  const [isPWA, setIsPWA] = useState(false);
  const [signer, setSigner] = useState<Signer | null>(null);

  useEffect(() => {
    // Check if the app is running as a PWA
    setIsPWA(window.matchMedia('(display-mode: standalone)').matches);
  }, []);

  useEffect(() => {
    const initializeSigner = async () => {
      if (walletAddress) {
        const signerInstance = await getSigner();
        setSigner(signerInstance);
      } else {
        setSigner(null);
      }
    };

    initializeSigner();
  }, [walletAddress, getSigner]);

  return (
    <>
      {!isPWA && (
        <div className="fixed bottom-4 right-4 z-50">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => (window as any).FloatingInbox.open()}>
            
          </button>
        </div>
      )}

      <FloatingInbox
        env={process.env.NEXT_PUBLIC_XMTP_ENV}
        wallet={signer}
        isPWA={isPWA}
        onLogout={disconnectWallet}
      />
    </>
  );
};

export default FloatingChat;