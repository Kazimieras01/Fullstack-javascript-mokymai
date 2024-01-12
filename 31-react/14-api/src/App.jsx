import './App.css'
import { useState } from 'react';
import Komp1 from './components/Komp1'
import Komp2 from './components/Komp2';
import Komp3 from './components/Komp3';

function App() {
  const [currentTab, setCurrentTab] = useState(1);

  return (
    <>
      <div>
        <button onClick={() => setCurrentTab(1)}>Rodyti Komp1</button>
        <button onClick={() => setCurrentTab(2)}>Rodyti Komp2</button>
        <button onClick={() => setCurrentTab(3)}>Rodyti Komp3</button>
      </div>
      { currentTab === 1 && <Komp1 /> }
      { currentTab === 2 && <Komp2 /> }
      { currentTab === 3 && <Komp3 /> }
    </>
  )
}

export default App
