import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Contract = await ethers.getContractFactory("tToken");
  const contract = await Contract.deploy("Testnet Token", "tTOK");
  await contract.deployed();
  console.log("Contract address:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
