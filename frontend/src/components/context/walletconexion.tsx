'use client'
import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { useBetting } from '@/hooks/useBetting';

interface WalletContextType {
  walletAddress: string | null;
  connectWallet: () => Promise<void>;
  fetchPoints: () => Promise<void>;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [points, setPoints] = useState<number>(0);

  const { connectContract, getPoints } = useBetting();


  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log('Error connecting to MetaMask', error);
      }
    } else {
      alert('MetaMask not detected');
    }
  };

  const fetchPoints = useCallback(async () => {
    if (!walletAddress) return;

    try {
      const userPoints = await getPoints(walletAddress); // Obtener puntos usando el hook `useBetting`
      if (userPoints !== undefined) {
        setPoints(userPoints);
        return userPoints;
      }
    } catch (error) {
      console.error('Error fetching points', error);
    }
  }, [walletAddress, getPoints]);

  useEffect(() => {
    // Check if wallet is already connected
    const checkConnection = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);

          await connectContract();
        }
      }
    };
    checkConnection();
  }, []);

  return (
    <WalletContext.Provider value={{ walletAddress, connectWallet, fetchPoints }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};