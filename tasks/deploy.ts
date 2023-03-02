import { task, types } from "hardhat/config";

task("deploy", "Deploy the contract to Polygon")
    .addParam("nonce", "nonce", undefined, types.int)
    .addParam("gasPrice", "gas price in wei", undefined, types.int)
    .setAction(async (args, hre) => {
        const Avatar = await hre.ethers.getContractFactory("Avatar");
        const avatar = await Avatar.deploy({
            nonce: args.nonce,
            gasPrice: args.gasPrice,
        });

        await avatar.deployed();

        console.log("Avatar deployed to", avatar.address);
    });
