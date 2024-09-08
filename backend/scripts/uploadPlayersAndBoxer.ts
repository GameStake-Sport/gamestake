import { ethers } from "hardhat";
import fs from "fs";
import path from "path";


async function main() {
    // Contract address
     const contractaddress = '0x561A4E166C68e11019aaB142B2511513678E2611';

    //  Read File
     const jsonPath = path.join(__dirname, "../nft/assets/jsons/mock.json");
     const players = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));

    //  Connect wit GAMENFT contract
    const gameStakeAbi = require("../artifacts/contracts/gameStakeNFT.sol/GameStakeNFT.json").abi;

    // Conectar con el contrato GameStakeNFT usando su ABI y dirección
    const [deployer] = await ethers.getSigners(); // Utiliza el primer signer como propietario/deployador
    const gameStakeNFT = new ethers.Contract(contractaddress, gameStakeAbi, deployer);
    
    //  Upload Players
    for (const player of players) {
        const metadata = {
            name: player.name,
            description: player.description,
            image: player.image,
            attributes: player.attributes,
        };

        let category = player.attributes[0].value;
        
        try {
            // Llamar a la función `createNFT` del contrato 
            const tx = await gameStakeNFT.createNFT(deployer.address, 20, category, "0x");
            console.log("Transacción enviada. Esperando confirmación...");
      
            // Esperar a que la transacción se confirme
            await tx.wait();
      
            console.log(`NFT creado con éxito para: ${metadata.name}`);
        } catch (error) {
            console.error(`Error al crear NFT para ${metadata.name}:`, error);
        }
    }
     
}


main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });