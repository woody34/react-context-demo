import { useContext } from 'react'
import { CoolThingContext } from './cool-thing.context'

export const CoolThingActions = () => {
  const [, setState] = useContext(CoolThingContext)

  const increment = () => {
    setState(prev => {
      return {
        count: prev.count + 1
       }
    })
  }

  return (
    <div>
      <button onClick={increment}>Increment</button>
    </div>
  )
}