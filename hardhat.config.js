const {
  etherscanApi,
  accounts
} = require("./secrets");

require("@nomicfoundation/hardhat-toolbox");

require("hardhat-gas-reporter");

require("@nomicfoundation/hardhat-verify");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {

  networks: {

    bsc_testnet: {
      url: `https://data-seed-prebsc-2-s1.binance.org:8545/`,
      chainId: 1,
      accounts
    }
  },

  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: etherscanApi
  },

  sourcify: {
    // Disabled by default
    // Doesn't need an API key
    enabled: true
  },

  solidity: "0.8.19",
};
