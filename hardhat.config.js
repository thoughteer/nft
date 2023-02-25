const { polygonUrl, scanApiKey, proxyKey } = require('./secret.json');

require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");

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
