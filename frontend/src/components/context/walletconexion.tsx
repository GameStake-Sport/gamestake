'use client'
import React, { createContext, useState, useContext,useCallback, useEffect } from 'react';
import { ethers } from 'ethers'; // Ensure correct import
import { Web3Provider } from '@ethersproject/providers'; 
import { useBetting } from '@/hooks/useBetting';


interface WalletContextType {
  walletAddress: string | null;
  connectWallet: () => Promise<void>;
  getSigner: () => Promise<ethers.Signer>;
  disconnectWallet: () => void;
  fetchPoints: () => Promise<void>;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [points, setPoints] = useState<number>(0);

  const { connectContract, getPoints } = useBetting();


  const connectWallet = async () => {
    if (window.ethereum) { // Check if window and window.ethereum are defined
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

  const disconnectWallet = () => {
    setWalletAddress(null);
  };

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
    <WalletContext.Provider value={{ walletAddress, connectWallet, getSigner, disconnectWallet, fetchPoints }}>
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

export const getSigner = async (): Promise<ethers.Signer> => {
  if (window.ethereum) {
    const provider = new Web3Provider(window.ethereum);  // Ensure 'providers' is accessible
    const signer = provider.getSigner() as unknown as ethers.Signer; // Cast to unknown first
    return signer;
  } else {
    throw new Error('MetaMask not detected');
  }
};