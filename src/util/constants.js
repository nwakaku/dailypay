require("dotenv").config();

export const COVALENT_KEY = "ckey_eee88868c1d842b8934ee6b20a8"; // covalent api key
export const NFT_PORT_KEY = process.env.REACT_APP_NFT_PORT_KEY; // nft port key
export const INFURA_ID = "2ILmleDaf2o3DPOTGiGvWVKhHDZ"; //Infura ID
export const REACT_APP_STORAGE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDkyQmMzYmEyNEMwNzIyZUZkODg5NmIzOGQxYzI5ZWE0RUFiMjdiMjkiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjI0OTU2MDI3NzIsIm5hbWUiOiJpbnN0YWNsb25lIn0.xrNgCptWVjmu2qvIpgGCfuoyhZxeD7Oh4HTMUXIHXWM";

export const APP_NAME = "Daily_Pay";
export const APP_DESC = "A decentralized mobile payment platform built on polygon, ";
export const SALESPAGE_DETAIL =
  "Used for everyday transaction displayed on tablets or screens in your store or retail space. Customers will be able complete purchases from this page fully self-service.";

export const CONNECT_PROMPT = "Connect Wallet";

export const CHAIN_OPTIONS = {
  80001: {
    name: "Mumbai",
    url: "https://mumbai.polygonscan.com/",
    id: 80001,
  },
  137: {
    name: "Matic Mainnet",
    url: "https://polygonscan.com/",
    id: 137,
  },
};

export const DEMO_ITEMS = [
  {
    name: "Burrito",
    usd: "8.99",
    modifier: "add cheese",
  },
  {
    name: "Chips",
    usd: "1.99",
    modifier: "",
  },
  {
    name: "Soda",
    usd: "1.99",
    modifier: "",
  },
];

export const CHAIN_IDS = Object.keys(CHAIN_OPTIONS);

// 1: { name: "ethereum", url: "https://etherscan.io/tx/", id: 1 },
// 42: { name: "kovan", url: "https://kovan.etherscan.io/tx/", id: 42 },
// 4: { name: "rinkeby", url: "https://rinkeby.etherscan.io/tx/", id: 4 },

export const ACTIVE_CHAIN = CHAIN_OPTIONS["80001"];

export const EXAMPLE_FORM = {
  title: "",
  paymentAddress: "0x115c04D26D6C76F3A3C4040cEfA0f21Fec638CF7",
  files: [],
};

export const IPFS_BASE_URL = "https://ipfs.io/ipfs";

console.log("config", INFURA_ID, COVALENT_KEY, NFT_PORT_KEY, ACTIVE_CHAIN);
