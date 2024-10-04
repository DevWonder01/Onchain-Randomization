import { ethers } from "hardhat";
const hre = require("hardhat");

const deployContracts = async () => {
  let coinToss;
  const coinTossContract = await ethers.getContractFactory("ChainlinkCoinFlip");
    
    // create and manage your subscription from https://vrf.chain.link/
    // use thi link learn how to -> https://docs.chain.link/vrf/v2-5/subscription/create-manage#create-a-subscription-programmatically
  const subId = "81027560246555952375636137270755813049939379607051254738374956623113588828419";
  coinToss = await coinTossContract.deploy(subId);

  await hre.run("verify:verify", {
    address: coinToss.address,
    constructorArguments: [subId],
  });

  console.log({
    coinToss: coinToss.address,
  });
};

const main = async () => {
  await deployContracts();
};

main();
