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
yarn hardhat verify --network ftmTestnet 0x9A19956b439a21554FeA6A828703Ee91fA735f42

yarn hardhat run --network polygonMumbai scripts/deploy-token.ts
yarn hardhat verify --network polygonMumbai 0x9A19956b439a21554FeA6A828703Ee91fA735f42

yarn hardhat run --network bscTestnet scripts/deploy-token.ts
yarn hardhat verify --network bscTestnet 0x9A19956b439a21554FeA6A828703Ee91fA735f42
```

Deployed:

| Network        | Address                                                                                                                              |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Fantom Testnet | [0x9A19956b439a21554FeA6A828703Ee91fA735f42](https://testnet.ftmscan.com/address/0x9A19956b439a21554FeA6A828703Ee91fA735f42#code)    |
| Polygon Mumbai | [0x9A19956b439a21554FeA6A828703Ee91fA735f42](https://mumbai.polygonscan.com/address/0x9A19956b439a21554FeA6A828703Ee91fA735f42#code) |
| BSC Testnet    | [0x9A19956b439a21554FeA6A828703Ee91fA735f42](https://testnet.bscscan.com/address/0x9A19956b439a21554FeA6A828703Ee91fA735f42#code)    |

Call `faucet` to get some BEE tokens.

## Deploy Bridge

Scripts:

```
yarn hardhat run --network ftmTestnet scripts/deploy-bridge.ts
yarn hardhat verify-bridge --network ftmTestnet --address 0x8E9E34817933a760A3E44A7622CA9A4C65a7FB88

yarn hardhat run --network polygonMumbai scripts/deploy-bridge.ts
yarn hardhat verify-bridge --network polygonMumbai --address 0x8E9E34817933a760A3E44A7622CA9A4C65a7FB88

yarn hardhat run --network bscTestnet scripts/deploy-bridge.ts
yarn hardhat verify-bridge --network bscTestnet --address 0x8E9E34817933a760A3E44A7622CA9A4C65a7FB88
```

Deployed:

| Network        | Address                                                                                                                              |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Fantom Testnet | [0x8E9E34817933a760A3E44A7622CA9A4C65a7FB88](https://testnet.ftmscan.com/address/0x8E9E34817933a760A3E44A7622CA9A4C65a7FB88#code)    |
| Polygon Mumbai | [0x8E9E34817933a760A3E44A7622CA9A4C65a7FB88](https://mumbai.polygonscan.com/address/0x8E9E34817933a760A3E44A7622CA9A4C65a7FB88#code) |
| BSC Testnet    | [0x8E9E34817933a760A3E44A7622CA9A4C65a7FB88](https://testnet.bscscan.com/address/0x8E9E34817933a760A3E44A7622CA9A4C65a7FB88#code)    |
