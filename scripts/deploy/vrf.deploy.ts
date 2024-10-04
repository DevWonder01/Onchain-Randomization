import { ethers } from "hardhat";
const hre = require("hardhat");

const deployContracts = async () => {
  let coinToss;
  const coinTossContract = await ethers.getContractFactory("ChainlinkCoinFlip");
    
    // create and manage your subscription from https://vrf.chain.link/
    // use this link learn how to -> https://docs.chain.link/vrf/v2-5/subscription/create-manage#create-a-subscription-programmatically
  const subId = "";
  coinToss = await coinTossContract.deploy(subId);

  await hre.run("verify:verify", {
    address: coinToss.address,
    constructorArguments: [subId],
  });

  console.log({
    coinToss: coinToss.address,
  });
};

// NOTE
// to run a chainlink vrf,
//  make sure to add the contract address in the VRF dashboard ->https://vrf.chain.link/

const flip = async()=>{
  const addy = ""
  const d = await ethers.getContractAt("ChainlinkCoinFlip",addy)

  // NOTE
  // head = true, tail = false
  const face = true
  await d.playWithVRF(face)
}

const main = async () => {
  await deployContracts();

  // await flip()
};

main();
