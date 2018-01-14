require('dotenv').config()
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = process.env.MNEMONIC

module.exports = {
  networks: {
    ropsten: {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/APIKEY"),
      network_id: '3',
      gas:2500000
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};
