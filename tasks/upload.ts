import fs from "fs";
import { task } from "hardhat/config";
import { ThirdwebStorage } from "@thirdweb-dev/storage";

const storage = new ThirdwebStorage();

task("upload", "Upload a file to IPFS")
    .addParam("path", "path to the file")
    .setAction(async (args) => {
        const upload = await storage.upload(fs.readFileSync(args.path));

        console.log(`Gateway URL: ${storage.resolveScheme(upload)}`);
    });
