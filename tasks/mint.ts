import { task, types } from "hardhat/config";

const contractAddress = "0x7628c59579ca338ad4c08a1998d9a6b794ea9293";

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
                gasPrice: 50000000000,
                gasLimit: 1000000,
            },
        );
        
        console.log("Minted");
    });
