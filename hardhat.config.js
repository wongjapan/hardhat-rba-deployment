require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/** @type import('hardhat/config').HardhatUserConfig */
const RBA_RPC_URL =
  process.env.RBA_RPC_URL || "https://preseed-testnet-1.roburna.com/";
const BSC_RPC_URL = "https://data-seed-prebsc-1-s1.binance.org:8545/";
const bscAPIKey = "";

module.exports = {
  solidity: "0.8.7",
  defaultNetwork: "rba",
  networks: {
    hardhat: {},
    local: {
      url: "http://127.0.0.1:8545/",
    },
    binance: {
      url: BSC_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      saveDeployments: true,
    },
    rba: {
      url: RBA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      saveDeployments: true,
    },
  },
  etherscan: {
    apiKey: {
      rba: "4d050bf4f537ee751810545845dac27985f4a3f9fcdfa58d95d472a032014d6d",
    },
    customChains: [
      {
        network: "rba",
        chainId: 159,
        urls: {
          apiURL: "https://testapi.rbascan.com/api/",
          browserURL: "https://rbascan.com",
        },
      },
    ],
  },
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};

/***
 *
 * For deployment of contract use this command in terminal
 * npx hardhat run scripts/deploy.js --network rba
 *
 *
 * For contract verification use this command in terminal
 * npx hardhat verify --network rba "CONTRACT ADDRESS"
 * or
 * npx hardhat verify --network rba "CONTRACT ADDRESS" --constructor-args arguments.js
 *
 */
