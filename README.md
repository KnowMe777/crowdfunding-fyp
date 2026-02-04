# Crowdfunding FYP — Decentralized Crowdfunding Platform

A decentralized, Ethereum-compatible crowdfunding platform. Create campaigns, accept on-chain contributions, and display funding progress via a modern React frontend integrated with the Thirdweb SDK.

- Live app: https://uplift-tau-pied.vercel.app
- Repository: https://github.com/KnowMe777/crowdfunding-fyp

## Overview

This project combines a web client with smart contracts:

- Client: React + Vite + TypeScript, styled with TailwindCSS, wallet support via Thirdweb React SDK.
- Web3: Solidity contracts with Hardhat tooling; Thirdweb CLI for streamlined detection/deployment and publishing.

Typical capabilities:
- Create crowdfunding campaigns with metadata (title, description, goal).
- Connect a wallet and contribute on-chain.
- Show campaign lists and detail pages, including raised funds and contributors.
- Integrate with Thirdweb for simplified wallet and contract interactions.

## Tech Stack

- Frontend
  - React 18, Vite
  - JavaScript
  - TailwindCSS
  - Thirdweb React SDK (`@thirdweb-dev/react`, `thirdweb`)
  - Ethers.js

- Smart Contracts / Tooling
  - Solidity
  - Hardhat
  - Thirdweb Contracts (`@thirdweb-dev/contracts`)
  - Optional zkSync tooling (`@matterlabs/hardhat-zksync-*`) for deployment on zkSync

- Languages (approximate)
  - JavaScript (primary), Solidity, HTML, CSS

## Monorepo Structure

```
crowdfunding-fyp/
├─ client/                # React + Vite frontend
│  ├─ package.json        # frontend scripts and dependencies
│  └─ pnpm-lock.yaml
├─ web3/                  # Smart contracts and deployment scripts
│  ├─ package.json        # Thirdweb/Hardhat tooling
│  └─ pnpm-lock.yaml
├─ package.json           # Root dev tooling (prettier, solidity plugin)
├─ package-lock.json      # Root npm lockfile
└─ README.md
```

## Setup

Clone the repository:

```bash
git clone https://github.com/KnowMe777/crowdfunding-fyp.git
cd crowdfunding-fyp
```

Install dependencies. You can install per workspace:

```bash
# Frontend
cd client
pnpm install
# or: npm install

# Smart contracts
cd ../web3
pnpm install
# or: npm install
```

Optionally, install root dev tooling:

```bash
cd ..
npm install
```

## Usage

1. Open the app and connect your wallet.
2. Create a new campaign with a target amount and details.
3. Share the campaign link.
4. Contributors can donate directly from the app.
5. Track progress, number of contributors, and raised funds on-chain.

Note: The exact UI and contract methods can vary by the current implementation; refer to the live deployment and contract source for available features.

## Contributing

Issues and PRs are welcome:
- Fork the repo and create a feature branch.
- Keep changes scoped and documented.
- Follow code formatting (`pnpm run format` in `web3`, ESLint/Tailwind conventions in `client`).

## Deployment

- Frontend is deployed on Vercel: https://uplift-tau-pied.vercel.app
- For self-hosting:
  - Build the client (`pnpm run build` in `client`) and deploy the `dist/` output.
  - Deploy contracts via Thirdweb or Hardhat to your target network; update frontend config with deployed addresses and chain details.
