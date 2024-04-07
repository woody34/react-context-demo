import { Dispatch, SetStateAction, createContext } from 'react'

export type CoolThingStore = [
  { count: number; },
  Dispatch<SetStateAction<{ count: number; }>>
]

export interface CoolThingState {
  count: number
}

export const CoolThingContext = createContext<CoolThingStore>([{ count: 0 }, () => {}])