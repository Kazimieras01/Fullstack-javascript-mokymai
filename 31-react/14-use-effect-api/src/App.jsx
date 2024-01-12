import './App.css'
import Komp1 from './components/Komp1'
import Komp2 from './components/Komp2'
import Komp3 from './components/Komp3'
import { useState } from 'react'

function App() {
  const [showKomp3, setShowKomp3] = useState(false);
  return (
    <>
      <Komp1 />
      <Komp2 />
      <button onClick={() => setShowKomp3(!showKomp3)}>Toggle</button>
      { showKomp3 && <Komp3 />}
    </>
  )
}

export default App
