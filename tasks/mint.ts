import { task, types } from "hardhat/config";

const contractAddress = "0x5308edb2f2e40a5aede53425252533a6190d2a4f";

task("mint", "Mint a new avatar")
    .addParam("to", "recipient address")
    .addParam("id", "token id", undefined, types.int)
    .addParam("url", "token metadata url")
    .setAction(async (args, hre) => {
        const Avatar = await hre.ethers.getContractFactory("Avatar");
        const avatar = Avatar.attach(contractAddress);

        await avatar.safeMint(
            args.to,
            args.id,
            args.url,
            {
                gasPrice: 200000000000,
                gasLimit: 1000000,
            },
        );
        
        console.log("Minted");
    });
