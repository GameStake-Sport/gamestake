"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const xmtp_js_1 = require("@xmtp/xmtp-js");
const ethers_1 = require("ethers");
const XmtpChat = () => {
    const [signer, setSigner] = (0, react_1.useState)(null);
    const [xmtpClient, setXmtpClient] = (0, react_1.useState)(null);
    const [conversation, setConversation] = (0, react_1.useState)(null);
    const [messages, setMessages] = (0, react_1.useState)([]);
    const [inputMessage, setInputMessage] = (0, react_1.useState)('');
    const connectWallet = () => __awaiter(void 0, void 0, void 0, function* () {
        if (typeof window.ethereum !== 'undefined') {
            try {
                yield window.ethereum.request({ method: 'eth_requestAccounts' });
                const provider = new ethers_1.ethers.BrowserProvider(window.ethereum);
                const signer = yield provider.getSigner();
                setSigner(signer);
            }
            catch (error) {
                console.error('Failed to connect wallet:', error);
            }
        }
        else {
            console.error('MetaMask is not installed');
        }
    });
    (0, react_1.useEffect)(() => {
        connectWallet();
    }, []);
    (0, react_1.useEffect)(() => {
        const initXmtp = () => __awaiter(void 0, void 0, void 0, function* () {
            if (signer) {
                const xmtp = yield xmtp_js_1.Client.create(signer);
                setXmtpClient(xmtp);
            }
        });
        initXmtp();
    }, [signer]);
    const startConversation = () => __awaiter(void 0, void 0, void 0, function* () {
        var _a, e_1, _b, _c;
        if (xmtpClient) {
            // Replace with your bot's address
            const conversation = yield xmtpClient.conversations.newConversation('BOT_ADDRESS_HERE');
            setConversation(conversation);
            try {
                // Start listening for messages
                for (var _d = true, _e = __asyncValues(yield conversation.streamMessages()), _f; _f = yield _e.next(), _a = _f.done, !_a; _d = true) {
                    _c = _f.value;
                    _d = false;
                    const message = _c;
                    setMessages(prevMessages => [...prevMessages, message.content]);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (!_d && !_a && (_b = _e.return)) yield _b.call(_e);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    });
    const sendMessage = () => __awaiter(void 0, void 0, void 0, function* () {
        if (conversation && inputMessage) {
            yield conversation.send(inputMessage);
            setInputMessage('');
        }
    });
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "XMTP Chat"),
        !signer && react_1.default.createElement("button", { onClick: connectWallet }, "Connect Wallet"),
        signer && !conversation && react_1.default.createElement("button", { onClick: startConversation }, "Start Conversation"),
        conversation && (react_1.default.createElement("div", null,
            react_1.default.createElement("div", { style: { height: '300px', overflowY: 'scroll', border: '1px solid black' } }, messages.map((msg, index) => (react_1.default.createElement("div", { key: index }, msg)))),
            react_1.default.createElement("input", { type: "text", value: inputMessage, onChange: (e) => setInputMessage(e.target.value) }),
            react_1.default.createElement("button", { onClick: sendMessage }, "Send")))));
};
exports.default = XmtpChat;
