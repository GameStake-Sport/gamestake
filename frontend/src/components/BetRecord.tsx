'use client'

import type { FC } from 'react'
import type { Bet } from '@/shared/types/bet'
import { Teams } from '@/shared/assets/teams'
import { matches } from './Bets'

const BetRecord: FC<{ bet: Bet }> = ({ bet }) => {
  const currentMatch = matches.find(match => match.id === bet.matchId)

  return (
    <div className='shadow backdrop-blur-md px-5 py-4 rounded-md bg-gray-500/50'>
      <p className='text-white text-lg'>
        Match: <span className='px-2 py-1 bg-gray-400/50 rounded'>{Teams[currentMatch?.team1 as string]?.name ?? 'Team 1'} vs {Teams[currentMatch?.team2 as string]?.name ?? 'Team 2'}</span>. Final result: <span className='px-2 py-1 bg-gray-400/50 rounded'>{bet.result1} - {bet.result2}</span>. Money: <span className='px-2 py-1 bg-gray-400/50 rounded'>${bet.money}</span>. Earnings: <span className='px-2 py-1 bg-gray-400/50 rounded'>${bet.earnings}</span>. Exp: <span className='px-2 py-1 bg-gray-400/50 rounded'>{bet.exp}</span>
      </p>
    </div>
  )
}

export default BetRecord