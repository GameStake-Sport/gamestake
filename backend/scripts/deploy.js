const { buildModule } = require('@nomicfoundation/hardhat-ignition');

module.exports = buildModule('GameStakeNFTModule', (m) => {
  const baseURI = "ipfs://Qmf93zsNV6LepxQ9tRX9TpWmh72VCMSipAMRyfMwFzT7Jg/"; // Reemplaza <BASE_CID> con tu URI base de IPFS
  const initialOwner = m.getSigner(0); // Utiliza el primer signer para el despliegue

  // Despliega el contrato GameStakeNFT
  const gameStakeNFT = m.contract('GameStakeNFT', [baseURI, initialOwner.address]);

  return { gameStakeNFT };
});
