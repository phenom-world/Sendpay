require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/WkIDEK3F49doRokKxm8V1v02mOyuxZWr",
      accounts: [
        "b4d24ffe7f6a2c7d1c248b17f761eccb696ee64349d8ca57857c6e16389c6cc5",
      ],
    },
  },
};
