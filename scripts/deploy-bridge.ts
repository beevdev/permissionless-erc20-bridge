import hre from "hardhat";
import { configs } from "./bridge-config";

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const config = configs[hre.network.name];
  console.log("Config:", config);

  const Contract = await hre.ethers.getContractFactory("ERC20Bridge");
  const contract = await Contract.deploy(
    config.lzEndpoint,
    config.token,
    deployer.address,
    config.maxEpochLimit,
    config.epochDuration,
    config.epochLimit
  );
  await contract.deployed();
  console.log("Contract address:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
