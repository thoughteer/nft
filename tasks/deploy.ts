import { task } from "hardhat/config";

task("deploy", "Deploy the contract to Polygon")
  .setAction(async (_, hre) => {
    const Avatar = await hre.ethers.getContractFactory("Avatar");
    const avatar = await Avatar.deploy();
    await avatar.deployed();

    console.log("Avatar deployed to", avatar.address);
  });
