export interface Bet {
  id: string,
  matchId: number,
  result1: number,
  result2: number,
  money: number,
  wasEarned: boolean,
  earnings: number
  exp: number
}