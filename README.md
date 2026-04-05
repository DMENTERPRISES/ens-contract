# ENS Contract - Ethereum Name Service Smart Contracts

Welcome to the ENS Contract repository! This project contains the core smart contracts and documentation for the Ethereum Name Service (ENS) system.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Documentation](#documentation)
- [Key Components](#key-components)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Resources](#resources)

## Project Overview

The ENS Contract repository is the central hub for managing Ethereum Name Service smart contracts. ENS is a decentralized naming system built on the Ethereum blockchain that enables users to own and manage .eth domain names with advanced features including wrapping, emancipation, locking, and signature-based operations.

**Repository:** [DMENTERPRISES/ens-contract](https://github.com/DMENTERPRISES/ens-contract)  
**Branch:** danish-main  
**Last Updated:** 2026-04-05

## 📚 Documentation

### Core Documentation Files

This project includes comprehensive documentation for all major components:

1. **[NameWrapper Documentation](https://github.com/DMENTERPRISES/ens-contract/blob/danish-main/contracts/wrapper/README.md)**
   - Complete guide on wrapping ENS names into ERC1155 tokens
   - Advanced features: emancipation, locking, and fuse management
   - Function reference and state machine lifecycle
   - Installation, testing, and deployment instructions
   - Signature-based operations and upgrade procedures

2. **[L2 Reverse Registrar Documentation](https://github.com/DMENTERPRISES/ens-contract/blob/danish-main/contracts/reverseRegistrar/README.md)**
   - L2 Reverse Registrar contract implementation
   - Setting reverse records for addresses and contracts
   - Signature verification formats and authentication methods
   - Validator addresses for mainnet and testnet

## Key Components

### NameWrapper Contract

**Location:** `./contracts/wrapper/`  
**Documentation:** [NameWrapper README](https://github.com/DMENTERPRISES/ens-contract/blob/danish-main/contracts/wrapper/README.md)

The NameWrapper adds powerful new functionality to ENS names:

- **ERC1155 Token Support**: Convert ENS names at any level into ERC1155 tokens
- **Emancipation**: Allow parent names to revoke control over subdomains
- **Locking**: Enable name owners to protect their names from modifications
- **Fuses**: Irreversible permission flags that control various aspects of name management
- **Expiry Management**: Built-in expiration mechanisms for emancipated and locked names
- **Direct Registration**: Register and wrap names in a single transaction
- **Subdomain Management**: Create and manage wrapped subdomains directly

**Key Features:**
- State machine lifecycle (Unregistered → Unwrapped → Wrapped → Emancipated/Locked)
- Owner-controlled and parent-controlled fuses
- Signature-based authorization
- Built-in upgrade capabilities

### L2 Reverse Registrar Contract

**Location:** `./contracts/reverseRegistrar/`  
**Documentation:** [Reverse Registrar README](https://github.com/DMENTERPRISES/ens-contract/blob/danish-main/contracts/reverseRegistrar/README.md)

The L2 Reverse Registrar combines resolver and reverse registrar functionality:

**Methods for Setting Records:**

- `setName()` - Set record for msg.sender's address
- `setNameForAddr()` - Set record for specific address (owner authorization required)
- `setNameForAddrWithSignature()` - Set record with signature verification
- `setNameForOwnableWithSignature()` - Set record for contracts with owner signature

**Signature Formats:**

For `setNameForAddrWithSignature`:
- validatorAddress: 0xa4a5CaA360A81461158C96f2Dbad8944411CF3fd (mainnet) / 0xAe91c512BC1da8B00cd33dd9D9C734069e6E0fcd (testnet)
- functionSignature: 0x2023a04c
- name, addr, coinTypes, signatureExpiry

For `setNameForOwnableWithSignature`:
- validatorAddress: 0xa4a5CaA360A81461158C96f2Dbad8944411CF3fd (mainnet) / 0xAe91c512BC1da8B00cd33dd9D9C734069e6E0fcd (testnet)
- functionSignature: 0x975713ad
- name, contractAddr, owner, coinTypes, signatureExpiry

## Quick Start

### Installation

```bash
npm install
```

### Running Tests

```bash
npm run test
```

Test files use suffixes (e.g., `_2`) to indicate which account is performing operations for multi-user scenarios.

### Deploying to Rinkeby Testnet

1. **Create environment file:**
   ```bash
   cp .env.org .env
   ```

2. **Set your credentials in `.env`:**
   ```
   PRIVATE_KEY=your_private_key
   ETHERSCAN_API_KEY=your_etherscan_api_key
   INFURA_API_KEY=your_infura_api_key
   METADATA_HOST=your_metadata_host (optional)
   ```

   Leave these fields blank:
   ```
   SEED_NAME=
   METADATA_ADDRESS=
   WRAPPER_ADDRESS=
   RESOLVER_ADDRESS=
   ```

3. **Run deployment:**
   ```bash
   bun run deploy:rinkeby
   ```

   This will deploy contracts and automatically verify them on Etherscan.

### Seeding Test Data

After deployment:

1. Register a name using the deployed account
2. Set `SEED_NAME=` to the label in `.env` (e.g., `matoken` for `matoken.eth`)
3. Run:
   ```bash
   bun run seed:rinkeby
   ```

## Project Structure

```
ens-contract/
├── README.md                          # Main documentation (this file)
├── contracts/
│   ├── wrapper/
│   │   └── README.md                 # NameWrapper comprehensive guide
│   │       ├── Glossary of terms
│   │       ├── Name lifecycle states
│   │       ├── Fuse definitions and management
│   │       ├── Function reference
│   │       ├── Installation & testing
│   │       ├── Deployment procedures
│   │       └── Upgrade notes
│   └── reverseRegistrar/
│       └── README.md                 # L2 Reverse Registrar guide
│           ├── Setting records
│           └── Signature formats
├── scripts/
│   ├── deploy.js                      # Deployment script for Rinkeby
│   └── seed.js                        # Seeding script for test data
└── .env.org                           # Environment template
```

## 🔗 Resources

### Official ENS Resources

- **[ENS Official Documentation](https://docs.ens.domains)** - Official ENS documentation and guides
- **[ENS GitHub Organization](https://github.com/ensdomains)** - Main ENS repository and related projects
- **[Ethereum Documentation](https://ethereum.org/developers)** - Ethereum development resources

### Solidity & Smart Contracts

- **[Solidity Documentation](https://soliditylang.org/docs/)** - Official Solidity language documentation
- **[OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts)** - Industry-standard smart contract libraries
- **[Hardhat Documentation](https://hardhat.org/docs)** - Ethereum development environment

### Standards & Specifications

- **[ERC-1155 Token Standard](https://eips.ethereum.org/EIPS/eip-1155)** - Multi-token standard used by NameWrapper
- **[ERC-721 Token Standard](https://eips.ethereum.org/EIPS/eip-721)** - NFT standard for .eth registrar

### Testing & Verification

- **[Etherscan](https://etherscan.io)** - Ethereum blockchain explorer and verification tool
- **[OpenSea Testnet](https://testnets.opensea.io)** - View wrapped NFTs on testnet

## 📖 Important Notes

### NameWrapper State Management

Names progress through several states during their lifecycle:
- **Unregistered** → **Unwrapped** → **Wrapped** → **Emancipated/Locked**

See the [NameWrapper Documentation](https://github.com/DMENTERPRISES/ens-contract/blob/danish-main/contracts/wrapper/README.md#lifecycle-of-a-name) for detailed state information.

### Fuse System

Fuses are irreversible permission flags that can be burned until expiry:
- **CANNOT_UNWRAP** - Prevents unwrapping (enables Locked state)
- **CANNOT_BURN_FUSES** - Locks all permissions
- **CANNOT_TRANSFER** - Prevents transferring the name
- **CANNOT_SET_RESOLVER** - Prevents changing resolver
- **CANNOT_CREATE_SUBDOMAIN** - Prevents creating subdomains
- **PARENT_CANNOT_CONTROL** - Emancipates the name from parent control

For complete fuse reference, see [NameWrapper Fuses Documentation](https://github.com/DMENTERPRISES/ens-contract/blob/danish-main/contracts/wrapper/README.md#list-of-pre-defined-fuses).

### Expiry Management

Names can be extended using:
- `setChildFuses()`
- `setSubnodeOwner()`
- `setSubnodeRecord()`
- `renew()`
- `extendExpiry()`

See [Expiry Documentation](https://github.com/DMENTERPRISES/ens-contract/blob/danish-main/contracts/wrapper/README.md#expiry) for detailed information.

## 🛠 Development

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Bun (for running scripts with `bun run`)

### Environment Setup

All development requires proper environment configuration. See [Quick Start](#quick-start) for setup instructions.

### Testing Coverage

The test suite includes tests for all major functions. Tests that require multiple accounts use the `_2` suffix convention.

## 📝 License

Please refer to the repository for license information.

## 🤝 Contributing

For information on contributing to this project, please check the repository guidelines.

## 📞 Support

For issues, questions, or discussions:
- Check the [NameWrapper Documentation](https://github.com/DMENTERPRISES/ens-contract/blob/danish-main/contracts/wrapper/README.md)
- Check the [Reverse Registrar Documentation](https://github.com/DMENTERPRISES/ens-contract/blob/danish-main/contracts/reverseRegistrar/README.md)
- Open an issue on GitHub
- Refer to [Official ENS Documentation](https://docs.ens.domains)

---

**Organization:** [DMENTERPRISES](https://github.com/DMENTERPRISES)  
**Repository:** [ens-contract](https://github.com/DMENTERPRISES/ens-contract)  
**Branch:** danish-main  
**Created by:** @danishahmed111  
**Date:** April 5, 2026