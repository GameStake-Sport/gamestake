import { DateTime } from 'luxon'

export interface Match {
  id: number
  team1: string
  team2: string
  start: DateTime
  finish: DateTime
  type: 'Soccer' | 'Basketball'
  result1?: number
  result2?: number
}