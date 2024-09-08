import { useState } from 'react';
import { ethers } from 'ethers';
import { Web3Provider } from '@ethersproject/providers';

interface BetResult {
  matchId: number;
  result: number;
  amount: string;
}

interface ContractAPI {
  placeBet: (matchId: number, result: number, amount: string) => Promise<void>;
  redeemPointsForPack: () => Promise<void>;
  connectContract: () => Promise<void>;
  getPoints: (userAddress: string) => Promise<number | void>; // Nueva función para obtener puntos
}

const contractABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "matchId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "bettor",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "enum FootballBetting.MatchResult",
        "name": "result",
        "type": "uint8"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "BetPlaced",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "matchId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "enum FootballBetting.MatchResult",
        "name": "result",
        "type": "uint8"
      }
    ],
    "name": "MatchResolved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "PointsAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "PointsDeducted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "PointsRedeemed",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "addOwner",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "addPoints_owner",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "matchId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "startTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "endTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "payFactor",
        "type": "uint256"
      }
    ],
    "name": "createMatch",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "matchIds",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "matches",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "matchId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "startTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "endTime",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isResolved",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "payFactor",
        "type": "uint256"
      },
      {
        "internalType": "enum FootballBetting.MatchResult",
        "name": "result",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "ownerCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "owners",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "packPricePoints",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "matchId",
        "type": "uint256"
      },
      {
        "internalType": "enum FootballBetting.MatchResult",
        "name": "result",
        "type": "uint8"
      }
    ],
    "name": "placeBet",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "points",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "gameStakeNFTContract",
        "type": "address"
      }
    ],
    "name": "redeemPointsForPack",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "ownerToRemove",
        "type": "address"
      }
    ],
    "name": "removeOwner",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "matchId",
        "type": "uint256"
      },
      {
        "internalType": "enum FootballBetting.MatchResult",
        "name": "result",
        "type": "uint8"
      }
    ],
    "name": "resolveMatch",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_newPrice",
        "type": "uint256"
      }
    ],
    "name": "setPackPricePoints_owner",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

const contractAddress = '0xB2AC0a88d29588198c2ca0Abf50eBEdf3132d54D'; // FootballBetting contract address

export const useBetting = (): ContractAPI => {
  const [contract, setContract] = useState<ethers.Contract | null>(null);

  // Función para conectar con el contrato
  const connectContract = async () => {
    if (typeof window !== 'undefined' && (window as any).ethereum) {
      try {
        const provider = new Web3Provider((window as any).ethereum);
        await provider.send('eth_requestAccounts', []); // Solicita permisos a MetaMask
        const signer = provider.getSigner();
        const footballBettingContract = new ethers.Contract(contractAddress, contractABI, signer);
        setContract(footballBettingContract);
        console.log('Contrato conectado:', footballBettingContract, signer);
      } catch (error) {
        console.error('Error al conectar con MetaMask:', error);
      }
    } else {
      console.error('MetaMask no está instalado.');
    }
  };

  // Función para realizar una apuesta
  const placeBet = async (matchId: number, result: number, amount: string) => {
    if (!contract) {
      console.error('Contrato no conectado.');
      return;
    }
    try {
      const weiAmount = ethers.parseUnits('0.00000000000001', 'ether'); // Aquí especificamos 'ether' para convertir ETH a Wei

      console.log('Realizando apuesta...', weiAmount);
      const tx = await contract.placeBet(matchId, result, { value: weiAmount });
      
      return tx;
    } catch (error) {
      console.error('Error al realizar la apuesta:', error);
    }
  };

  const redeemPointsForPack = async () => {
    if (!contract) {
      console.error('Contrato no conectado.');
      return;
    }

    const gameStakeNFTContract = '0x0210B6BAf71C4C95120ea9d746B2551c6623A037';

    try {
      const tx = await contract.redeemPointsForPack(gameStakeNFTContract);
      console.log('Pack redimido con éxito!');
      return tx;
    } catch (error) {
      console.error('Error al redimir el pack:', error);
    }
  };

  // Función para obtener los puntos del usuario
  const getPoints = async (userAddress: string): Promise<number | void> => {
    if (!contract) {
      console.error('Contrato no conectado.');
      return;
    }
    try {
      const points = await contract.points(userAddress); // Llamada a la función getPoints del contrato
      return points.toString(); // Convertir el BigNumber a un número
    } catch (error: any) {
      console.error('Error al obtener los puntos del usuario:', error.message || error);
    }
  };

  return {
    connectContract,
    getPoints,
    placeBet,
    redeemPointsForPack
  };
};
