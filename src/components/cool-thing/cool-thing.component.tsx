import { FC, PropsWithChildren, SetStateAction, Dispatch, useState   } from 'react'
import { CoolThingContext } from './cool-thing.context'

type CoolThingProps = PropsWithChildren & {
  store?: [
    {
        count: number;
    },
    Dispatch<
      SetStateAction<{
        count: number;
      }>
    >
  ]
}

export const CoolThing: FC<CoolThingProps> = (props) => {
  const _store = useState({ count: 0 })
  return (
    <CoolThingContext.Provider value={props.store ? props.store : _store}>
      <div>
        {props.children}
      </div>
    </CoolThingContext.Provider>
  )
}