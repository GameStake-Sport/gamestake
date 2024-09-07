'use client'

import Image from "next/image";
import Web3Modal from 'web3modal'
import { ethers } from 'ethers'
import { Web3Provider } from '@ethersproject/providers'
import { useState } from "react";

const providerOptions = {

}

export default function Home() {
  const [ wallet, setWallet ] = useState(null)

  const connectWallet = async () => {
    try {
      let web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
      })
      const instance = await web3Modal.connect()
      // @ts-ignore
      const provider = new Web3Provider(window.ethereum); // Uso correcto de Web3Provider
      const signer = provider.getSigner();
      console.log(provider)
      if (provider) {
        setWallet(provider)
      }
    } catch (error) {
      console.log(`Error connecting the wallet: ${error}`)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Page</h1>
      {
        wallet ?
        <div>
          <p>Address: { wallet }</p>
        </div>
        : <button onClick={connectWallet}>Connect</button>
      }
    </main>
  );
}
