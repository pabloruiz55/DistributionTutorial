var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "word1 word2 word..."; //BE CAREFUL!

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
