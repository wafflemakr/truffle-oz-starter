const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

const providerFactory = (network) =>
  new HDWalletProvider(
    process.env.PRIVATE_KEY,
    `https://${network}.infura.io/v3/${process.env.INFURA_KEY}`
  );

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    rinkeby: {
      provider: () => providerFactory("rinkeby"),
      network_id: 4,
      gas: 5e6,
      gasPrice: 20e9,
    },
    mainnet: {
      provider: () => providerFactory("mainnet"),
      network_id: 1,
      gas: 5e6,
      gasPrice: 20e9,
      skipDryRun: true,
      networkCheckTimeout: 1e9,
      timeoutBlocks: 200,
    },
  },
  compilers: {
    solc: {
      version: process.env.SOLC_VERSION || "0.7.0",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
};
