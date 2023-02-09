import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

import { task } from "hardhat/config";
import { configs as bridgeConfigs } from "./scripts/bridge-config";

task("verify-bridge", "Verify bridge on explorer")
  .addParam("address", "The bridge's address")
  .setAction(async (taskArgs, hre) => {
    const [deployer] = await hre.ethers.getSigners();
    const config = bridgeConfigs[hre.network.name];
    await hre.run("verify:verify", {
      address: taskArgs.address,
      constructorArguments: [
        config.lzEndpoint,
        config.token,
        deployer.address,
        config.maxEpochLimit,
        config.epochDuration,
        config.epochLimit,
      ],
    });
  });

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
      url: "https://rpc.ankr.com/polygon_mumbai",
      accounts: [PRIVATE_KEY],
    },
    bscTestnet: {
      url: "https://data-seed-prebsc-1-s2.binance.org:8545",
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      ftmTestnet: process.env.FANTOM_API_KEY || "",
      polygonMumbai: process.env.POLYGON_API_KEY || "",
      bscTestnet: process.env.BSC_API_KEY || "",
    },
  },
};

export default config;
