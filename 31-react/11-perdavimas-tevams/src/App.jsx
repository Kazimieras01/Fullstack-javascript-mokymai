import './App.css'
import Pasirinkimas from './components/Pvz1/Pasirinkimas'
import Renkames from './components/Pvz2/Renkames'
import PrekesWrapper from './components/Pvz3/PrekesWrapper'
import RinktisNauja from './components/Pvz1/RinktisNauja'

function App() {
  return (
    <>
      <RinktisNauja/>
      <Pasirinkimas />
      <Renkames />
      <PrekesWrapper />
    </>
  )
}

export default App
