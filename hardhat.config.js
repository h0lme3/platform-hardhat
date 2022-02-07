require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  // networks: {
  //   accounts: {
  //     accountsBalance: "100000000000000000000000000000000000000",
  //     count: 5,
  //     mnemonic,
  //   },
  //   //chainId: 31337,
  //   chainId: 1,
  //   forking: {
  //     blockNumber: 13619920, // Nov 15, 2021
  //     url: "https://eth-mainnet.alchemyapi.io/v2/4gZBZgXw-GGmzJF3R6FTJvXKNK_XDTJn",
  //   },
  // },
};
