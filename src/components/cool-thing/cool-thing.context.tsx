import { Dispatch, SetStateAction, createContext } from 'react'

export interface CoolThingState {
  count: number
}

export type CoolThingStore = [
  CoolThingState,
  Dispatch<SetStateAction<CoolThingState>>
]

export const CoolThingContext = createContext<CoolThingStore>([{ count: 0 }, () => {}])