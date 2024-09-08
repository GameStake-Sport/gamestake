'use client'

import { useState } from 'react'
import { DateTime } from 'luxon'

// Local Modules
import BetInput from './BetInput'
import Match from './Match'
import { Teams } from '@/shared/assets/teams'

// Types
import type { Match as MatchType } from '@/shared/types/match'

export const matches: MatchType[] = [
  {
    id: 'match1',
    team1: 'RM',
    team2: 'MU',
    start: DateTime.now().minus({ hours: 1 }),  // Un partido que ya comenzó
    finish: DateTime.now().plus({ hours: 2 }),
    type: 'Soccer',
    result1: 1,
    result2: 2,
  },
  {
    id: 'match2',
    team1: 'BFC',
    team2: 'RM',
    start: DateTime.now().minus({ days: 1 }),
    finish: DateTime.now().minus({ hours: 22 }),
    type: 'Soccer',
    result1: 3,
    result2: 0,
  },
  {
    id: 'match3',
    team1: 'MC',
    team2: 'MU',
    start: DateTime.now().plus({ hours: 2 }),
    finish: DateTime.now().plus({ hours: 4 }),
    type: 'Soccer',
  },
  {
    id: 'match4',
    team1: 'BFC',
    team2: 'MC',
    start: DateTime.now().minus({ hours: 2 }),
    finish: DateTime.now().plus({ hours: 1 }),
    type: 'Soccer',
    result1: 1,
    result2: 1,
  }
]

const Bets = () => {
  const [selected, setSelected] = useState<string>('')

  const findMatchSelected = (): MatchType | undefined => {
    return matches.find(match => match.id === selected)
  }

  const handleSelected = (matchId: string) => {
    if (selected === matchId) {
      setSelected('')
      // reset fields
    }
    else setSelected(matchId)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  
    const target = e.target as typeof e.target & {
      team1: { value: string }
      team2: { value: string }
    }

    const team1Bet = target.team1.value
    const team2Bet = target.team2.value
  
    console.log(selected, team1Bet, team2Bet)
  }

  return (
    <section>
      <h2 className='text-4xl text-white font-bold text-center mt-20 mb-10'>Want to try your luck?</h2>
      
      <p className='text-white mb-8'>Pick your favorite match:</p>
      <div className='flex gap-x-8 w-full justify-center'>
        {
          matches.map((match, i) => (
            <Match
              match={match}
              key={`${match.id}-${i}`}
              onClick={(e) => handleSelected(e)}
              focus={match.id === selected}
            />
          ))
        }
      </div>

      <div className='relative mt-8 pt-8'>
        <span className='absolute inset-x-0 top-0 h-[1px] bg-[linear-gradient(to_right,_rgba(255,_255,_255,_0)_0%,_rgba(255,_255,_255,_1)_50%,_rgba(255,_255,_255,_0)_100%)]'></span>
        <p className='text-white mb-8'>Now, do your magic:</p>
        <form onSubmit={handleSubmit}>
          <div className='w-full flex justify-center gap-x-7 items-center'>
            <BetInput name='team1' label={selected ? Teams[findMatchSelected()?.team1 as string].name : 'Team 1'} disable={!selected}/>
            <p className='text-4xl text-white'>-</p>
            <BetInput name='team2' label={selected ? Teams[findMatchSelected()?.team2 as string].name : 'Team 2'} disable={!selected}/>
          </div>
          <div className='w-full flex justify-center mt-6'>
            <button disabled={!selected} className='relative px-12 py-3 rounded-xl bg-[#7747e5] text-white font-semibold transition-all duration-300 hover:bg-[#6a40d1]'>
                Let's do it
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Bets