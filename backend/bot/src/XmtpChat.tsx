declare global {
  interface Window {
    ethereum: any;
  }
}

import React, { useState, useEffect } from 'react';
import { Client, Conversation } from '@xmtp/xmtp-js';
import { ethers } from 'ethers';
import { initXmtpClient, handleBetCommand, handleResolveCommand } from '../bot';


const XmtpChat: React.FC = () => {
  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const [xmtpClient, setXmtpClient] = useState<Client | null>(null);
  const [conversation, setConversation] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [inputMessage, setInputMessage] = useState('');

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        setSigner(signer);
      } catch (error) {
        console.error('Failed to connect wallet:', error);
      }
    } else {
      console.error('MetaMask is not installed');
    }
  };

  useEffect(() => {
    connectWallet();
  }, []);

  useEffect(() => {
    const initXmtp = async () => {
      if (signer) {
        const xmtp = await Client.create(signer);
        setXmtpClient(xmtp);
      }
    };

    initXmtp();
  }, [signer]);

  const startConversation = async () => {
    if (xmtpClient) {
      // Replace with your bot's address
      const conversation = await xmtpClient.conversations.newConversation('BOT_ADDRESS_HERE');
      setConversation(conversation);
      
      // Start listening for messages
      for await (const message of await conversation.streamMessages()) {
        setMessages(prevMessages => [...prevMessages, message.content]);
      }
    }
  };

  const sendMessage = async () => {
    if (conversation && inputMessage) {
      await conversation.send(inputMessage);
      setInputMessage('');
    }
  };

  return (
    <div>
      <h1>XMTP Chat</h1>
      {!signer && <button onClick={connectWallet}>Connect Wallet</button>}
      {signer && !conversation && <button onClick={startConversation}>Start Conversation</button>}
      {conversation && (
        <div>
          <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid black' }}>
            {messages.map((msg, index) => (
              <div key={index}>{msg}</div>
            ))}
          </div>
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      )}
    </div>
  );
};

export default XmtpChat;