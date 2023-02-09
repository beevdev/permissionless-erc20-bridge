# Permissionless ERC20 Bridge

```
yarn hardhat compile
```

## Deploy Testnet Tokens

Scripts:

```
yarn hardhat run --network ftmTestnet scripts/deploy-token.ts
yarn hardhat verify --network ftmTestnet 0x9a04f4b59bA3C6f7D385dD1Bd9982D7b602D77B2 "Testnet Token" "tTOK"

yarn hardhat run --network polygonMumbai scripts/deploy-token.ts
yarn hardhat verify --network polygonMumbai 0x9cfC633e1D73358775672A6A982305e00A319E35 "Testnet Token" "tTOK"
```

Deployed:

| Network        | Address                                                                                                                              |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Fantom Testnet | [0x9a04f4b59bA3C6f7D385dD1Bd9982D7b602D77B2](https://testnet.ftmscan.com/address/0x9a04f4b59bA3C6f7D385dD1Bd9982D7b602D77B2#code)    |
| Polygon Mumbai | [0x9cfC633e1D73358775672A6A982305e00A319E35](https://mumbai.polygonscan.com/address/0x9cfC633e1D73358775672A6A982305e00A319E35#code) |

Call `faucet` to get some tTOK tokens.
