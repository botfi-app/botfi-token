const {
  etherscanApi,
  accounts
} = require("./.secrets");

require("@nomicfoundation/hardhat-toolbox");

require("hardhat-gas-reporter");

require("@nomicfoundation/hardhat-verify");


require("@nomiclabs/hardhat-ethers");

require('hardhat-contract-sizer', { runOnCompile: true });

require('hardhat-deploy');

require('hardhat-abi-exporter',{ path: 'data/abi', clear: true });



/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {

  networks: {

    eth_mainnet: {
      url: `https://ethereum.publicnode.com`,
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
