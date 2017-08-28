module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 4612388 // Gas limit used for deploys
    },
    privatenet: {
      host: "127.0.0.1",
      port: 8545,
      network_id: 1234
    },
    rinkeby: {
      host: "localhost", // Connect to geth on the specified
      port: 8545,
      from: "0xAd5c7446153b7FA3a2A1adddECF0589308a93C01", // default address to use for any transaction Truffle makes during migrations
      network_id: 4,
      gas: 4612388 // Gas limit used for deploys
    }
  }
};
