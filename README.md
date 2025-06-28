# Onchain Randomization: Chainlink VRF & Pyth Entropy Coin Flip

This project demonstrates onchain randomization using both [Chainlink VRF](https://docs.chain.link/vrf/v2-5/introduction) and [Pyth Entropy](https://docs.pyth.network/entropy/) for a provably fair coin flip game. It includes smart contracts, deployment scripts, and tests for both randomness providers.

## Features

- **Chainlink VRF Coin Flip**: See [`contracts/withVRF.sol`](contracts/withVRF.sol)
- **Pyth Entropy Coin Flip**: See [`contracts/withEntropy.sol`](contracts/withEntropy.sol)
- Mock ERC20 token for testing: [`contracts/mocks/MockToken.sol`](contracts/mocks/MockToken.sol)
- Hardhat-based development environment
- Example deployment scripts for both randomness providers:
  - [`scripts/deploy/vrf.deploy.ts`](scripts/deploy/vrf.deploy.ts)
  - [`scripts/deploy/entropy.deploy.ts`](scripts/deploy/entropy.deploy.ts)

## Project Structure

```
contracts/           # Solidity smart contracts
scripts/             # Deployment scripts
test/                # Test files
abi/                 # Exported ABIs
artifacts/, cache/   # Hardhat build artifacts
ignition/            # Hardhat Ignition deployment modules
types/               # Typechain generated types
```

## Getting Started

### 1. Install Dependencies

```sh
npm install
```

### 2. Configure Environment

Copy `.env.example` to `.env` and fill in your keys:

```sh
cp .env.example .env
```

- `key`: Your deployer private key
- `basescankey`: BaseScan API key for contract verification
- `COINMARKETCAP_API_KEY`: For gas reporter (optional)

### 3. Compile Contracts

```sh
npm run build
```

### 4. Run Tests

```sh
npx hardhat test
```

### 5. Deploy Contracts

- **Chainlink VRF Coin Flip:**

  ```sh
  npx ts-node scripts/deploy/vrf.deploy.ts
  ```

- **Pyth Entropy Coin Flip:**

  ```sh
  npx ts-node scripts/deploy/entropy.deploy.ts
  ```

## Notes

- For Chainlink VRF, create and fund a subscription at [vrf.chain.link](https://vrf.chain.link/).
- For Pyth Entropy, see [Pyth Entropy contract addresses](https://docs.pyth.network/entropy/contract-addresses) and [fee info](https://docs.pyth.network/entropy/current-fees).
- Update contract addresses and subscription IDs in the deployment scripts as needed.

## License

MIT

---

**Switching from Chainlink VRF to Pyth Entropy**  
This repo provides a reference for integrating both randomness solutions in onchain games.