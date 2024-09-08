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
  connectContract: () => Promise<void>;
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

const contractAddress = '0xf82Ac7d308951E85af01f6698FeE201c24030CB9'; // Reemplaza con la dirección de tu contrato desplegado

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
      await tx.wait(); // Espera a que la transacción se confirme
      console.log('Apuesta realizada con éxito!');

      // Espera hasta que la transacción sea confirmada
      const receipt = await tx.wait(); // Espera a que la transacción se confirme

      // Accede a la propiedad 'confirmations' del recibo
      console.log(`Transacción confirmada con ${receipt.confirmations} confirmaciones.`);
      
    } catch (error) {
      console.error('Error al realizar la apuesta:', error);
    }
  };

  return {
    connectContract,
    placeBet,
  };
};
