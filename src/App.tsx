import { useState } from 'react'
import './App.css'
import { CoolThingActions } from './components/cool-thing/cool-thing-actions.component'
import { CoolThingPanel } from './components/cool-thing/cool-thing-panel.component'
import { CoolThing } from './components/cool-thing/cool-thing.component'

function App() {
  const storeOneToOneA = useState({ count: 0 })
  const storeOneToOneB = useState({ count: 0 })
  const storeOneToMany = useState({ count: 0 })

  return (
    <>
      <h1>One-to-One (decoupled store)</h1>
      <CoolThing store={storeOneToOneA}>
        <CoolThingPanel />
        <CoolThingActions />
      </CoolThing>
      <CoolThing store={storeOneToOneB}>
        <CoolThingPanel />
        <CoolThingActions />
      </CoolThing>
      <hr/>

      <h1>One-to-Many (decoupled store)</h1>
      <h2>Each component and its children shares an instance of the store. Changes in one will result in changes in both.</h2>
      <CoolThing store={storeOneToMany}>
        <CoolThingPanel />
        <CoolThingActions />
      </CoolThing>
      <CoolThing store={storeOneToMany}>
        <CoolThingPanel />
        <CoolThingActions />
      </CoolThing>
      <hr/>

      <h1>One-to-One (internal store)</h1>
      <h2>Each CoolThing component has its own store that is self contained. Every instance of CoolThing and children will share that store via context.</h2>
      <CoolThing>
        <CoolThingPanel />
        <CoolThingActions />
      </CoolThing>
      <CoolThing>
        <CoolThingPanel />
        <CoolThingActions />
      </CoolThing>
      <hr/>
    </>
  )
}

export default App
