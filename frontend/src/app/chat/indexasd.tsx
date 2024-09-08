"use client"
import "./polyfills";
import React, { useState, useEffect } from "react";
import InboxPage from "./chatcont";


const ChatPage = () => {

  return (
    <React.StrictMode>
      <div>
        <InboxPage isPWA={false} />
      </div>
    </React.StrictMode>
  );
};

export default ChatPage;
