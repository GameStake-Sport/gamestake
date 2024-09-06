import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// Define el módulo para desplegar el contrato GameStakeNFT
const GameStakeNFTModule = buildModule("GameStakeNFTModule", (m) => {
  // Parámetros del módulo que pueden ser configurados antes del despliegue
  const baseURI = m.getParameter<string>("baseURI", "ipfs://QmVtpUZ8KW8S8TRSCFtpiTjdRaMvDBfUWx4uVXN34oBDYy/"); // Reemplaza <BASE_CID> con tu URI base de IPFS


  // Desplegar el contrato GameStakeNFT
  const gameStakeNFT = m.contract("GameStakeNFT", [baseURI, '0x44d40cC5Df1423C0677FFA09E783f5F392791a88']);

  return { gameStakeNFT };
});

export default GameStakeNFTModule;
