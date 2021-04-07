require('dotenv').config();
const PancakeFactory = artifacts.require('PancakeFactory');

module.exports = async function (deployer) {
  try {
    await deployer.deploy(PancakeFactory, process.env.DEPLOYER_ADDRESS, {
      gas: 6721975,
      from: process.env.DEPLOYER_ADDRESS
    });
  } catch (err) {
    console.log(err);
  }
};
