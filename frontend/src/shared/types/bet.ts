export interface Bet {
  id: string,
  matchId: string,
  result1: number,
  result2: number,
  money: number,
  wasEarned: boolean,
  earnings: number
}