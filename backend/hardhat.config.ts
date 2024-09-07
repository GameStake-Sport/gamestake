import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const { ALCHEMY_API_KEY, ETHSCAN_API_KEY, PRIVATE_WALLET_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: ALCHEMY_API_KEY,
      accounts: [
        `${PRIVATE_WALLET_KEY}`
      ]
    }
  },
  etherscan: {
    apiKey: `${ETHSCAN_API_KEY}`
  }
};

export default config;
