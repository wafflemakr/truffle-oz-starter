const MyContract = artifacts.require("MyContract");

module.exports = async function (deployer, network, accounts) {
  // Only migrate to a network different than development (contracts migrated in test file)
  if (network === "development") return;

  await deployer.deploy(MyContract);
};
