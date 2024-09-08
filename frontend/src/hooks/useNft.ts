'use client';
import { useState, useEffect, useCallback } from 'react';
import { ethers } from 'ethers';

interface NFT {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  contractAddress: string;
}

const useNFTs = (walletAddress: string | null) => {
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Configuración para conectarse a Sepolia a través de Alchemy
  const provider = new ethers.JsonRpcProvider('https://spicy-rpc.chiliz.com/');

  // ABI del contrato ERC-1155 para obtener balance y URI de los tokens
  const nftContractABI = [
    'function balanceOf(address account, uint256 id) view returns (uint256)',
    'function uri(uint256 id) view returns (string)',
  ];


  const convertIpfsToHttp = (ipfsUrl: string) => {
    return ipfsUrl.replace('ipfs://', 'https://ipfs.io/ipfs/');
  };

  
  const fetchNFTs = useCallback(async () => {
    if (!walletAddress) {
      setError('No wallet address provided');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const nftContractAddress = '0x0210B6BAf71C4C95120ea9d746B2551c6623A037';
      const nftContract = new ethers.Contract(nftContractAddress, nftContractABI, provider);

      const nftList: NFT[] = [];
      const maxTokenId = 15; // Máximo ID de token para recorrer

      // Recorremos los posibles token IDs
      for (let tokenId = 1; tokenId <= maxTokenId; tokenId++) {
        try {
          // Obtenemos el balance de este token para la cuenta del usuario
          const balance = await nftContract.balanceOf(walletAddress, tokenId);

          if (balance > 0) {
            // Obtener la URL de los metadatos del NFT
            const tokenURI = await nftContract.uri(tokenId);
            
            const httpURL = tokenURI.startsWith('ipfs://') ? convertIpfsToHttp(tokenURI) : tokenURI;
            
            const response = await fetch(httpURL);
            if (!response.ok) {
              console.error(`Failed to fetch metadata for token ID ${tokenId}`);
              continue;
            }

            const metadata = await response.json();

            // Añadir el NFT a la lista
            nftList.push({
              id: tokenId.toString(),
              title: metadata.name,
              imageUrl: convertIpfsToHttp(metadata.image),
              description: metadata.description,
              contractAddress: nftContractAddress
            })

            console.log('NFT found:', nftList);

            // console.log('Metadata for token ID', tokenId, metadata);
          }
        } catch (innerError: any) {
          console.error(`Error fetching data for token ID ${tokenId}:`, innerError);
        }
      }

      setNfts(nftList);
    } catch (error: any) {
      console.error('Error fetching NFTs:', error);
      setError(`Error fetching NFTs: ${error.message || error.reason || 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  }, [walletAddress]);

  useEffect(() => {
    if (walletAddress) {
      fetchNFTs();
    }
  }, [walletAddress, fetchNFTs]);

  return { nfts, loading, error, fetchNFTs };
};

export default useNFTs;