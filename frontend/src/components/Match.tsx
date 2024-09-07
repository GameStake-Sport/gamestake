import type { FC } from 'react'
import { DateTime } from 'luxon'
import type { Match as MatchType } from '@/shared/types/match'
import Image from 'next/image'
import { Teams } from '@/shared/assets/teams'

interface MatchProps {
  match: MatchType
  onClick: (id: string) => void
  focus?: boolean
}

const Match: FC<MatchProps> = ({ match, onClick, focus = false }) => {
  const handleDate = (): string => {
    const now = DateTime.now()
    let result = ''

    if (!!match.result1 && !!match.result2) {
      if (match.finish.diff(now)) result = 'Match finished'
      else result = 'Live match'
    } else result = `Match will be ${match.start.toFormat('dd/MM')}`
    
    return result
  }

  return (
    <button onClick={() => onClick(match.id)} className={`px-6 py-4 shadow backdrop-blur-md text-white rounded-md transition-all duration-300 ${focus ? 'bg-gray-800/50' : 'bg-gray-500/50'}`}>
      {/* Type */}
      <p className='mb-4'>{match.type}</p>

      {/* Teams */}
      <div>
        {/* Logos */}
        <div className={`flex h-auto w-full gap-x-4 justify-center items-center ${(!!match.result1 && !!match.result2) ? '' : 'py-3.5'}`}>
          <div className='relative w-[60px] h-[60px]'>
            <Image
              src={Teams[match.team1].image.src}
              alt={Teams[match.team1].name}
              layout='fill'
              objectFit='contain'
              className='w-full h-full'
            />
          </div>
          <p className='text-4xl'>-</p>
          <div className='relative w-[60px] h-[60px]'>
            <Image
              src={Teams[match.team2].image.src}
              alt={Teams[match.team2].name}
              layout='fill'
              objectFit='contain'
              className='w-full h-full'
            />
          </div>
        </div>

        {/* Score */}
        <div className='flex w-full justify-between px-7 mt-2 text-lg'>
          {
            (!!match.result1 && !!match.result2) &&
            <>
              <p>{match.result1}</p>
              <p>{match.result2}</p>
            </>
          }
        </div>
      </div>

      {/* Time */}
      <p className='mt-2 pt-2 relative'>
        {handleDate()}
        <span className='absolute inset-x-0 top-0 h-[1px] bg-[linear-gradient(to_right,_rgba(255,_255,_255,_0)_0%,_rgba(255,_255,_255,_1)_50%,_rgba(255,_255,_255,_0)_100%)]'></span>
      </p>


    </button>
  )
}

export default Match