export const chilizabi = [
    "function createMatch(uint256 matchId, string memory name, uint256 startTime, uint256 endTime, uint256 payFactor) external",
    "function placeBet(uint256 matchId, uint8 result) external payable",
    "function resolveMatch(uint256 matchId, uint8 result) external",
    "event BetPlaced(uint256 indexed matchId, address indexed bettor, uint8 result, uint256 amount)",
    "event MatchResolved(uint256 indexed matchId, string name, uint8 result)"
];
