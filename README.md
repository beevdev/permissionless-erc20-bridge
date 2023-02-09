# Permissionless ERC20 Bridge

Inspired by [gTrade](https://gains.trade/bridge).

![flow](permissionless-erc20-bridge.svg)

Example: Send tokens from Mumbai to Fantom Testnet

https://testnet.layerzeroscan.com/10109/address/0x580a10fcb460acbba9318751768db8339abf8c8c/message/10112/address/0x0216656596d1c29a7ad426c2ffeee2627bae3799/nonce/3

## Compile contract

```
yarn hardhat compile
```

## Deploy Testnet Tokens

Scripts:

```
yarn hardhat run --network ftmTestnet scripts/deploy-token.ts
yarn hardhat verify --network ftmTestnet 0xC0cBC95F39A256822C90117CC4c07aF6A4DB0d4f

yarn hardhat run --network polygonMumbai scripts/deploy-token.ts
yarn hardhat verify --network polygonMumbai 0x64Dcaa7B2a29A7A2E0566C69345AAF983ba2fbFe

yarn hardhat run --network bscTestnet scripts/deploy-token.ts
yarn hardhat verify --network bscTestnet 0x9cfC633e1D73358775672A6A982305e00A319E35
```

Deployed:

| Network        | Address                                                                                                                              |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Fantom Testnet | [0xC0cBC95F39A256822C90117CC4c07aF6A4DB0d4f](https://testnet.ftmscan.com/address/0xC0cBC95F39A256822C90117CC4c07aF6A4DB0d4f#code)    |
| Polygon Mumbai | [0x64Dcaa7B2a29A7A2E0566C69345AAF983ba2fbFe](https://mumbai.polygonscan.com/address/0x64Dcaa7B2a29A7A2E0566C69345AAF983ba2fbFe#code) |
| BSC Testnet    | [0x9cfC633e1D73358775672A6A982305e00A319E35](https://testnet.bscscan.com/address/0x9cfC633e1D73358775672A6A982305e00A319E35#code)    |

Call `faucet` to get some BEE tokens.

## Deploy Bridge

Scripts:

```
yarn hardhat run --network ftmTestnet scripts/deploy-bridge.ts
yarn hardhat verify-bridge --network ftmTestnet --address 0x0216656596D1C29A7aD426c2FFeeE2627bae3799

yarn hardhat run --network polygonMumbai scripts/deploy-bridge.ts
yarn hardhat verify-bridge --network polygonMumbai --address 0x580A10fcB460aCBBA9318751768dB8339ABf8C8c

yarn hardhat run --network bscTestnet scripts/deploy-bridge.ts
yarn hardhat verify-bridge --network bscTestnet --address 0x9a04f4b59bA3C6f7D385dD1Bd9982D7b602D77B2
```

Deployed:

| Network        | Address                                                                                                                              |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Fantom Testnet | [0x0216656596D1C29A7aD426c2FFeeE2627bae3799](https://testnet.ftmscan.com/address/0x0216656596D1C29A7aD426c2FFeeE2627bae3799#code)    |
| Polygon Mumbai | [0x580A10fcB460aCBBA9318751768dB8339ABf8C8c](https://mumbai.polygonscan.com/address/0x580A10fcB460aCBBA9318751768dB8339ABf8C8c#code) |
| BSC Testnet    | [0x9a04f4b59bA3C6f7D385dD1Bd9982D7b602D77B2](https://testnet.bscscan.com/address/0x9a04f4b59bA3C6f7D385dD1Bd9982D7b602D77B2#code)    |
