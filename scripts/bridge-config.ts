import { BigNumberish } from "ethers";

type Config = {
  lzEndpoint: string;
  token: string;
  maxEpochLimit: BigNumberish;
  epochDuration: BigNumberish;
  epochLimit: BigNumberish;
};

// lzEndpoints: https://layerzero.gitbook.io/docs/technical-reference/testnet/testnet-addresses
// token: README.md
export const configs: { [key: string]: Config } = {
  ftmTestnet: {
    lzEndpoint: "0x7dcAD72640F835B0FA36EFD3D6d3ec902C7E5acf",
    token: "0xC0cBC95F39A256822C90117CC4c07aF6A4DB0d4f",
    maxEpochLimit: BigInt("2000000000000000000000000"),
    epochDuration: 21600,
    epochLimit: BigInt("1000000000000000000000000"),
  },
  polygonMumbai: {
    lzEndpoint: "0xf69186dfBa60DdB133E91E9A4B5673624293d8F8",
    token: "0x64Dcaa7B2a29A7A2E0566C69345AAF983ba2fbFe",
    maxEpochLimit: BigInt("2000000000000000000000000"),
    epochDuration: 21600,
    epochLimit: BigInt("1000000000000000000000000"),
  },
  bscTestnet: {
    lzEndpoint: "0x6Fcb97553D41516Cb228ac03FdC8B9a0a9df04A1",
    token: "0x9cfC633e1D73358775672A6A982305e00A319E35",
    maxEpochLimit: BigInt("2000000000000000000000000"),
    epochDuration: 21600,
    epochLimit: BigInt("1000000000000000000000000"),
  },
};
