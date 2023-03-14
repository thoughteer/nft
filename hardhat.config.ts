import "./tasks/deploy";
import "./tasks/mint";

import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";

import { polygonUrl, scanApiKey, proxyKey } from "./secret.json";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  defaultNetwork: "polygon",
  networks: {
      hardhat: {},
      polygon: {
          url: polygonUrl,
          accounts: [proxyKey]
      }
  },
  etherscan: {
    apiKey: scanApiKey
  },
  mocha: {
    timeout: 20000
  }
};
