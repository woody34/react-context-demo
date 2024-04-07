import { FC, PropsWithChildren, useState   } from 'react'
import { CoolThingContext, CoolThingStore } from './cool-thing.context'

type CoolThingProps = PropsWithChildren & {
  store?: CoolThingStore
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