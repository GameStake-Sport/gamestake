# Game Stake Monorepo Overview

This monorepo contains two projects: a Solidity backend using Hardhat, and a frontend using Next.js.
Below are the instructions to set up and run both projects.

## Requirements

- [Node.js](https://nodejs.org/) (recommended version: 14.x or higher)
- [NPM](https://www.npmjs.com/)

## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/your-repo.git
    cd gamestake
    ```

2. Install dependencies for both projects:

    ```bash
    npm install
    ```

## Project Structure

- **`backend/`**: Solidity project with Hardhat.
- **`frontend/`**: Next.js frontend project.
- **`docs/`**: Documentation about the project.
- **`package.json` (root)**: Manages scripts and workspaces for both projects.

## Available Commands

### Run the Frontend (Next.js)

Start the Next.js development server:

```bash
npm run dev:fe
```

This will launch the server at http://localhost:3000.

### Run the Backend (Hardhat Solidity)

Start a local Ethereum node using Hardhat:

```bash
npm run dev:be
```

The node will be accessible at http://127.0.0.1:8545/.

### Run Tests for the Backend
Execute tests for the Solidity contracts:

```bash
npm run test:be
```

### Deploy for the Backend
Deploy Smart Contracts based on scripts/deploy.js:

```bash
npm run deploy:be
```
