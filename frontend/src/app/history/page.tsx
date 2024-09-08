import BetRecord from '@/components/BetRecord'
import type { Bet } from '@/shared/types/bet'

const myBets: Bet[] = [
  {
    id: 'bet1',
    matchId: 1,
    result1: 1,
    result2: 2,
    money: 0,
    wasEarned: true,
    earnings: 0,
    exp: 10
  },
  {
    id: 'bet2',
    matchId: 2,
    result1: 2,
    result2: 2,
    money: 10,
    wasEarned: true,
    earnings: 1.5,
    exp: 5
  },
  {
    id: 'bet2',
    matchId: 3,
    result1: 2,
    result2: 2,
    money: 10,
    wasEarned: true,
    earnings: 1.5,
    exp: 20
  }
]

export default function History() {
  return (
    <div className='mt-24 text-white w-full flex justify-center'>
      <div className='flex flex-col items-center'>
        <h1 className='text-4xl mb-7'>History</h1>

        <div className='gap-y-6 flex flex-col'>
          {
            myBets.map((myBet, i) => (
              <BetRecord bet={myBet} key={`${myBet.id}-${i}`}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}