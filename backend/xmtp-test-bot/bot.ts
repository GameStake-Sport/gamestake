import { Client, Conversation, DecodedMessage } from '@xmtp/xmtp-js'
import { ethers } from 'ethers'
import * as dotenv from 'dotenv'
import { chilizabi } from './chilizABI';

dotenv.config()

// Constants
const BET_COMMAND = '/apostar'
const RESOLVE_COMMAND = '/resolver'
// Removed MATCHES_COMMAND

const ENVIRONMENT = 'production'
const CONTRACT_ADDRESS = '0xdb2c89ff522b7ba320249972183eaf9af4f93f05'
const PRIVATE_KEY = '19f034b96ed5708c43f8d085458d4167e1b7a72ca93e25c6ed45c68e019f3948'
const CHILIZ_TESTNET_RPC = 'https://spicy-rpc.chiliz.com/' // Chiliz testnet RPC URL
const CONTRACT_ABI = chilizabi

//Connections
const provider = new ethers.JsonRpcProvider(CHILIZ_TESTNET_RPC)
const botWallet = ethers.Wallet.createRandom()
const botAddress = botWallet.connect(provider)

// Instances
const myWallet = new ethers.Wallet(PRIVATE_KEY, provider)
const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, myWallet)

// Maneja el comando /apostar
async function handleBetCommand(conversation: Conversation<string>, message: DecodedMessage<string>) {
  const [command, matchIdStr, resultStr, amountStr] = message.content.split(' ');

  console.log(command, matchIdStr, resultStr, amountStr);

  if (!matchIdStr || !resultStr || !amountStr || isNaN(Number(amountStr))) {
    await conversation.send('Por favor, proporciona el ID del partido, el resultado (0: Equipo A, 1: Equipo B, 2: Empate), y el monto. Ejemplo: /apostar 1 0 0.1');
    return;
  }

  const matchId = parseInt(matchIdStr);
  const result = parseInt(resultStr);
  const betAmount = ethers.parseUnits(amountStr, 18);

  try {
    // Llama a la función de apuesta en el contrato inteligente
    const tx = await contract.placeBet(matchId, result, { value: betAmount });
    await tx.wait();
    await conversation.send(`Apuesta de ${amountStr} CHZ en el partido ${matchId} con resultado ${result} creada.`);
  } catch (error) {
    // Revisar fondos
    console.error('Error al realizar la apuesta:', error);
    await conversation.send(`Error al realizar la apuesta. ${error.reason} `);
  }
}

// Maneja el comando /resolver
async function handleResolveCommand(conversation: Conversation<string>, message: DecodedMessage<string>) {
  const [command, matchIdStr, resultStr] = message.content.split(' ');

  if (!matchIdStr || !resultStr) {
    await conversation.send('Por favor, proporciona el ID del partido y el resultado (0: Equipo A, 1: Equipo B, 2: Empate). Ejemplo: /resolver 1 0');
    return;
  }

  const matchId = parseInt(matchIdStr);
  const result = parseInt(resultStr);

  try {
    const tx = await contract.resolveMatch(matchId, result);
    await tx.wait();
    await conversation.send(`El partido ${matchId} ha sido resuelto con el resultado ${result}.`);
  } catch (error) {
    await conversation.send(`Error al resolver el partido. ${error.reason}`);
  }
}

// Función para escuchar mensajes de conversación
async function listenToMessages(conversation: Conversation<string>) {
  let welcomeSent = false;

  for await (const messageObj of await conversation.streamMessages()) {
    const message: string = messageObj.content
    const sentByBot = messageObj.senderAddress === botAddress.address

    if (!welcomeSent) {
      await conversation.send("Hola, bienvenido a GameStake tu lugar de apuestas favorito");
      welcomeSent = true;
    }

    if (!sentByBot) {
      if (message.startsWith(BET_COMMAND)) {
        await handleBetCommand(conversation, messageObj);
      } else if (message.startsWith(RESOLVE_COMMAND)) {
        await handleResolveCommand(conversation, messageObj);
      } else {
        await conversation.send('Comando no válido. Prueba con /apostar o /resolver');
      }
    }
  }
}

async function initXmtpClient() {
  const xmtp = await Client.create(botAddress, { env: ENVIRONMENT })

  console.log('Bot address: ', botAddress.address)

  // Escucha nuevas conversaciones
  xmtp.conversations.stream().then(async (stream) => {
    let i: number = 1
    for await (const conversation of stream) {
      console.log(`conversation ${i}: `, conversation.messages)
      i++
      await listenToMessages(conversation)
    }
  })
}

// Call this function before initializing the XMTP client
initXmtpClient().catch((error) => {
  console.error('Error al iniciar el cliente XMTP:', error);
});

async function main() {
  await initXmtpClient();
}

main().catch((error) => {
  console.error('Error:', error);
});