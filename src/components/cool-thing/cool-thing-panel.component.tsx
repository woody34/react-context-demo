import { useContext } from 'react'
import { CoolThingContext } from './cool-thing.context'

export const CoolThingPanel = () => {
  const [state] = useContext(CoolThingContext)

  return <p>My Count is {state.count}</p>
}