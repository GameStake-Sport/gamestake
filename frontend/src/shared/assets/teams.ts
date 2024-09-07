import RM from './logos/rm.png'
import BFC from './logos/bfc.png'
import type { StaticImageData } from 'next/image'

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
  }
}