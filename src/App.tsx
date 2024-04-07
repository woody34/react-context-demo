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
      <h2>Each component has a provider (2 providers) and they are using separate, decoupled, stores (2 store instances).</h2>
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
      <h2>Each component has a provider (2 providers) and they are sharing a decoupled store (1 store instances).</h2>
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
      <h2>Each component has a provider (2 providers) and they are using separate, internal, stores (2 store instances).</h2>
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
