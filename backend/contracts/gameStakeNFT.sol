// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";


contract GameStakeNFT is ERC1155, Ownable {
    uint256 private _tokenIdCounter; // Contador de IDs de tokens

    uint256 public packPriceETH = 0.01 ether; // Precio de cada sobre en ETH
    mapping(uint256 => string) public categories; 
    string public name = "GameStakeNFT"; // Nombre de Colección
    string public symbol = "GSNFT"; // Símbolo de la Colección


    constructor(string memory baseURI, address initialOwner) ERC1155(baseURI) Ownable(initialOwner) {}

    // Función para crear un nuevo NFT con categoría
    function createNFT(address recipient, uint256 amount, string memory category, bytes memory data) public onlyOwner {
        _tokenIdCounter++;
        uint256 newItemId = _tokenIdCounter;

        categories[newItemId] = category; // Asignar categoría al NFT

        _mint(recipient, newItemId, amount, data); // Mint NFTs
    }

    // Función para abrir un sobre de NFTs usando CHZ
    function openPackWithETH() public payable {
        require(msg.value >= packPriceETH, "Not enough Ether sent.");
        require(_tokenIdCounter >= 2, "Not enough NFTs available.");

        _openPack(msg.sender); 
    }

    // Función para abrir un sobre de NFTs usando puntos
    function openPackWithPoints(address recipient) external {
        require(_tokenIdCounter >= 2, "Not enough NFTs available.");
        
        _openPack(recipient);
    }

    // Función interna para abrir un sobre de NFTs
    function _openPack(address recipient) internal {
        // Random NFTs
        uint256 randomIndex1 = random() % _tokenIdCounter + 1;
        uint256 randomIndex2 = (random() + 1) % _tokenIdCounter + 1;

        // Asignar los NFTs al usuario
        _safeTransferFrom(owner(), recipient, randomIndex1, 1, "");
        _safeTransferFrom(owner(), recipient, randomIndex2, 1, "");
    }

    // Función de randomización
    function random() private view returns (uint256) {
        return uint256(keccak256(abi.encodePacked(block.difficulty, block.timestamp, _tokenIdCounter)));
    }


    function setPackPriceETH(uint256 _newPrice) public onlyOwner {
        packPriceETH = _newPrice;
    }

    // Función para retirar fondos del contrato
    function withdraw() public onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    // Sobrescribir la función URI para manejar metadatos
    function uri(uint256 _id) public view override returns (string memory) {
        return string(abi.encodePacked(super.uri(_id), Strings.toString(_id), ".json"));
    }
}
