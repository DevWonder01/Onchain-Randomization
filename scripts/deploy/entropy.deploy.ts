import { ethers } from "hardhat";
const hre = require("hardhat");

const run = async () => {
  const [signer] = await ethers.getSigners();

  let coinToss;

  const coinTossContract = await ethers.getContractFactory("PythCoinFlip");

  // Pyth Entropy on Base
  // visit https://docs.pyth.network/entropy/contract-addresses to obtain listed chain entrpyb address
  const entropy = "0x6E7D74FA7d5c90FEF9F0512987605a6d546181Bb";

  coinToss = await coinTossContract.deploy(entropy);

  await hre.run("verify:verify", {
    address: coinToss.address,
    constructorArguments: [entropy],
  });

  console.log({
    coinToss: coinToss.address,
  });

  await flip(coinToss.address)

};


const hex = ()=>{
  const randomBytes = ethers.utils.randomBytes(32); // Generate 32 random bytes
  const randomHex = ethers.utils.hexlify(randomBytes);
  console.log(randomHex)
  return randomHex
}

const flip = async(addy :string)=>{
  const d = await ethers.getContractAt("PythCoinFlip",addy)

  // visit https://docs.pyth.network/entropy/current-fees 
  // to get msg.value (fee) requried per blockchain
  const _r = await hex()
  await d.flipWithPyth(_r,{
    value: "159000000000000"
  })

}

const main = async () => {
  await run ();
};

main();
