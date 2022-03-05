require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: process.env.YOUR_ALCHEMY_API_URL,
      accounts: [process.env.YOUR_PRIVATE_RINKEBY_ACCOUNT_KEY]
    },
  },
};