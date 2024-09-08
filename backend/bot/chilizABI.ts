export const chilizabi = [
    "function createMatch(uint256 matchId, string memory name, uint256 startTime, uint256 endTime, uint256 payFactor) external",
    "function placeBet(uint256 matchId, uint8 result) external payable",
    "function resolveMatch(uint256 matchId, uint8 result) external",
    "event BetPlaced(uint256 indexed matchId, address indexed bettor, uint8 result, uint256 amount)",
    "event MatchResolved(uint256 indexed matchId, string name, uint8 result)",
    "function getPoints(address user) external view returns (uint256)",
    "function redeemPointsForPack(address gameStakeNFTContract) external",
    "function setPackPricePoints_owner(uint256 _newPrice) external",
    "function addPoints(address user, uint256 amount) external",
    "function removePoints(address user, uint256 amount) external",
    "function addOwner(address newOwner) external",
    "function removeOwner(address ownerToRemove) external"
];
