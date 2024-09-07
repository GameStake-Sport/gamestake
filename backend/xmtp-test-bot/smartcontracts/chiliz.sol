// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FootballBetting {
    mapping(address => bool) public owners;
    uint256 public ownerCount;
    
    enum MatchResult { NotSet, TeamA, TeamB, Draw }
    
    struct Bet {
        uint256 amount;
        MatchResult chosenResult;
        bool exists;
    }

    struct Match {
        uint256 matchId;
        string name;
        uint256 startTime;
        uint256 endTime;
        bool isResolved;
        uint256 payFactor;
        MatchResult result;
        mapping(address => Bet) bets;
    }

    mapping(uint256 => Match) public matches;
    uint256[] public matchIds;

    constructor() {
        owners[msg.sender] = true;
        ownerCount = 1;
    }

    modifier onlyOwner() {
        require(owners[msg.sender], "Solo los propietarios pueden ejecutar esto");
        _;
    }

    event BetPlaced(uint256 indexed matchId, address indexed bettor, MatchResult result, uint256 amount);
    event MatchResolved(uint256 indexed matchId, string name, MatchResult result);

    function createMatch(uint256 matchId, string memory name, uint256 startTime, uint256 endTime, uint256 payFactor) external onlyOwner {
        require(matches[matchId].matchId == 0, "El partido ya existe");
        
        // Creamos un nuevo partido
        Match storage newMatch = matches[matchId];
        newMatch.matchId = matchId;
        newMatch.name = name;
        newMatch.startTime = startTime;
        newMatch.endTime = endTime;
        newMatch.isResolved = false;
        newMatch.payFactor = payFactor;
        newMatch.result = MatchResult.NotSet;

        matchIds.push(matchId);
    }

    function placeBet(uint256 matchId, MatchResult result) external payable {
        Match storage currentMatch = matches[matchId];
        require(currentMatch.matchId != 0, "El partido no existe");
        require(block.timestamp < currentMatch.startTime, "Las apuestas para este partido ya han cerrado");
        require(msg.value > 0, "Debe enviar CHZ para realizar una apuesta");
        require(result != MatchResult.NotSet, "Resultado de apuesta no valido");
        Bet storage existingBet = currentMatch.bets[msg.sender];
        if (existingBet.exists) {
            require(existingBet.chosenResult == result, "No puedes cambiar tu prediccion");
            existingBet.amount += msg.value;
        } else {
            currentMatch.bets[msg.sender] = Bet(msg.value, result, true);
        }
        emit BetPlaced(matchId, msg.sender, result, msg.value);
    }

    function resolveMatch(uint256 matchId, MatchResult result) external onlyOwner {
        Match storage currentMatch = matches[matchId];
        require(currentMatch.matchId != 0, "El partido no existe");
        require(!currentMatch.isResolved, "El partido ya ha finalizado");
        require(block.timestamp >= currentMatch.endTime, "El partido aun no ha terminado");

        currentMatch.result = result;
        currentMatch.isResolved = true;
        emit MatchResolved(matchId, currentMatch.name, result);

        // Calcular el total a pagar
        uint256 totalPayout = 0;
        address[] memory winners = new address[](0);
        for (uint256 i = 0; i < winners.length; i++) {
            address bettor = winners[i];
            Bet storage bet = currentMatch.bets[bettor];
            if (bet.exists && bet.chosenResult == result) {
                uint256 payout = bet.amount * currentMatch.payFactor;
                totalPayout += payout;
                winners[winners.length] = bettor;
            }
        }

        // Verificar si hay suficiente balance
        require(address(this).balance >= totalPayout, "Fondos insuficientes para pagar");

        // Pagar a los ganadores
        for (uint256 i = 0; i < winners.length; i++) {
            address payable winner = payable(winners[i]);
            uint256 payout = currentMatch.bets[winner].amount * currentMatch.payFactor;
            (bool success, ) = winner.call{value: payout}("");
            require(success, "Fallo en la transferencia");
        }
    }

    function withdraw() external onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }

    // function getAvailableMatches() external view returns (uint256[] memory, string[] memory) {
    //     uint256 count = 0;
    //     for (uint256 i = 0; i < matchIds.length; i++) {
    //         if (!matches[matchIds[i]].isResolved && matches[matchIds[i]].startTime > block.timestamp) {
    //             count++;
    //         }
    //     }

    //     uint256[] memory availableMatchIds = new uint256[](count);
    //     string[] memory availableMatchNames = new string[](count);
        
    //     uint256 index = 0;
    //     for (uint256 i = 0; i < matchIds.length; i++) {
    //         Match storage currentMatch = matches[matchIds[i]];
    //         if (!currentMatch.isResolved && currentMatch.startTime > block.timestamp) {
    //             availableMatchIds[index] = currentMatch.matchId;
    //             availableMatchNames[index] = currentMatch.name;
    //             index++;
    //         }
    //     }

    //     return (availableMatchIds, availableMatchNames);
    // }

    function addOwner(address newOwner) external onlyOwner {
        require(newOwner != address(0), "Direccion invalida");
        require(!owners[newOwner], "Ya es propietario");
        owners[newOwner] = true;
        ownerCount++;
    }

    function removeOwner(address ownerToRemove) external onlyOwner {
        require(owners[ownerToRemove], "No es propietario");
        require(ownerCount > 1, "Debe haber al menos un propietario");
        owners[ownerToRemove] = false;
        ownerCount--;
    }
    
    // Point System
    mapping(address => uint256) public points;
    uint256 public packPricePoints = 100;

    event PointsAdded(address indexed user, uint256 amount);
    event PointsDeducted(address indexed user, uint256 amount);
    event PointsRedeemed(address indexed user, uint256 amount);


    function redeemPointsForPack(address gameStakeNFTContract) public{
        require(points[msg.sender] >= packPricePoints, "No tienes suficientes puntos");

        points[msg.sender] -= packPricePoints;

        
        (bool success, ) = gameStakeNFTContract.call(
            abi.encodeWithSignature("openPackWithPoints(address)", msg.sender)
        );

        require(success, "Fallo al redimir puntos");

        emit PointsRedeemed(msg.sender, packPricePoints);
    }

    function setPackPricePoints_owner(uint256 _newPrice) public onlyOwner {
        packPricePoints = _newPrice;
    }


    function addPoints_owner(address user, uint256 amount) external onlyOwner {
        points[user] += amount;
        emit PointsAdded(user, amount);
    }

}