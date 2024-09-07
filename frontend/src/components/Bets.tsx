'use client'

import { useState } from 'react'
import { DateTime } from 'luxon'

// Local Modules
import BetInput from './BetInput'
import Match from './Match'

// Types
import type { Match as MatchType } from '@/shared/types/match'

const matches: MatchType[] = [
  {
    id: 'match1',
    team1: 'RM',
    team2: 'BFC',
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
    team1: 'RM',
    team2: 'RM',
    start: DateTime.now().plus({ hours: 2 }),
    finish: DateTime.now().plus({ hours: 4 }),
    type: 'Soccer',
  },
  {
    id: 'match4',
    team1: 'BFC',
    team2: 'BFC',
    start: DateTime.now().minus({ hours: 2 }),
    finish: DateTime.now().plus({ hours: 1 }),
    type: 'Soccer',
    result1: 1,
    result2: 1,
  }
]

const Bets = () => {
  const [selected, setSelected] = useState<string>('')

  const handleSelected = (matchId: string) => {
    if (selected === matchId) setSelected('')
    else setSelected(matchId)
  }

  return (
    <div className='flex gap-x-5'>
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
      <BetInput label='Team 1'/>
      <BetInput label='Team 2'/>
    </div>
  )
}

export default Bets