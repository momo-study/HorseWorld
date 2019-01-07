var horseFactory = artifacts.require("./horseFactory.sol");
module.exports = function(deployer){
  deployer.deploy(horseFactory);
}