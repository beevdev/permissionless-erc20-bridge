import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    ftmTestnet: {
      url: "https://rpc.ankr.com/fantom_testnet",
      accounts: [PRIVATE_KEY],
    },
    polygonMumbai: {
      url: "https://rpc.ankr.com/polygon_mumbai	",
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      ftmTestnet: process.env.FTM_TESTNET_API_KEY || "",
      polygonMumbai: process.env.POLYGON_MUMBAI_API_KEY || "",
    },
  },
};

export default config;
