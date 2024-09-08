"use client"
import React, { useState, useEffect } from "react";
import { FloatingInbox } from "./FloatingInbox-text/index.js";
import { ethers } from "ethers";
import { Web3Provider } from '@ethersproject/providers'; 
const InboxPage = ({ isPWA = false }) => {
  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const [walletConnected, setWalletConnected] = useState(false); // Add state for wallet connection

  const disconnectWallet = () => {
    localStorage.removeItem("walletConnected");
    localStorage.removeItem("signerAddress");
    setSigner(null);
    setWalletConnected(false);
  };

  const styles = { // Define the styles
    uContainer: {
      height: "100vh",
      backgroundColor: "#f9f9f9",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      zIndex: "1000",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    },
    xmtpContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
    },
    btnXmtp: {
      backgroundColor: "#f0f0f0",
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      color: "#000",
      justifyContent: "center",
      border: "1px solid grey",
      padding: "10px",
      borderRadius: "5px",
      fontSize: "14px",
    },
    HomePageWrapperStyle: {
      textAlign: "center", // Ensure this is a valid CSS property
      marginTop: "2rem",
    },
    ButtonStyledStyle: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "10px 20px",
      borderRadius: "5px",
      marginBottom: "2px",
      border: "none",
      textAlign: "left",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      color: "#333333",
      backgroundColor: "#ededed",
      fontSize: "12px",
    },
  };

  const getAddress = async (signer) => {
    try {
      return await signer?.getAddress();
    } catch (e) {
      console.log(e);
    }
  };
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        setSigner(signer);
        setWalletConnected(true);
        let address = await getAddress(signer);
        localStorage.setItem("walletConnected", JSON.stringify(true)); // Save connection status in local storage
        localStorage.setItem("signerAddress", JSON.stringify(address)); // Save signer address in local storage
      } catch (error) {
        console.error("User rejected request", error);
      }
    } else {
      console.error("Metamask not found");
    }
  };

  useEffect(() => {
    const storedWalletConnected = localStorage.getItem("walletConnected");
    const storedSignerAddress = localStorage.getItem("signerAddress");
    if (storedWalletConnected && storedSignerAddress) {
      const parsedAddress = JSON.parse(storedSignerAddress); // Parse only if not null
      setWalletConnected(JSON.parse(storedWalletConnected));
      const provider = new Web3Provider(window.ethereum);
      const signer = provider.getSigner(); 
      setSigner(signer);
     
    }
  }, []);

  return (
    <>
      {!isPWA && (
        <div style={styles.HomePageWrapperStyle}>
          <button
            className="home-button"
            style={{ ...styles.ButtonStyledStyle, marginLeft: 10 }}
            onClick={() => connectWallet()}>
            {walletConnected ? "Connected" : "Connect Wallet"}
          </button>
          {walletConnected && (
            <button
              className="home-button"
              style={{ ...styles.ButtonStyledStyle, marginLeft: 10 }}
              onClick={() => disconnectWallet()}>
              Logout
            </button>
          )}
          <h1>Quickstart Inbox </h1>
          <span>See in mobile for a mobile layout</span>

          <section className="App-section">
            <button
              className="home-button"
              style={styles.ButtonStyledStyle}
              onClick={() => (window).FloatingInbox.open()}>
              Open
            </button>
            <button
              className="home-button"
              style={{ ...styles.ButtonStyledStyle, marginLeft: 10 }}
              onClick={() => (window).FloatingInbox.close()}>
              Close
            </button>
          </section>
        </div>
      )}

      <FloatingInbox
        env={process.env.REACT_APP_XMTP_ENV}
        wallet={signer}
        isPWA={isPWA}
        onLogout={disconnectWallet} // Add onLogout prop
      />
    </>
  );
};
export default InboxPage;
