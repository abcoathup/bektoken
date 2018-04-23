var BekToken = artifacts.require("./BekToken.sol");

module.exports = function(deployer) {
  deployer.deploy(BekToken);
};
