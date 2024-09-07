import type { StaticImageData } from 'next/image'
import RM from './logos/rm.png'
import BFC from './logos/bfc.png'
import MU from './logos/mu.png'
import MC from './logos/mc.png'

interface Team {
  image: StaticImageData,
  name: string
}

export const Teams: { [key: string]: Team } = {
  'BFC': {
    image: BFC,
    name: 'Barcelona'
  },
  'RM': {
    image: RM,
    name: 'Real Madrid'
  },
  'MU': {
    image: MU,
    name: 'Man. United'
  }
  ,
  'MC': {
    image: MC,
    name: 'Man. City'
  }
}