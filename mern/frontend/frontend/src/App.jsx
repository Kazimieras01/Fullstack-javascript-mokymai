import { useState } from 'react';
import Komp1 from './components/Komp1';
import Komp2 from './components/Komp2';
import Komp3 from './components/Komp3'; // Assuming you have a component for displaying one document
import './App.css';

function App() {
  const [activeComponent, setActiveComponent] = useState(''); // State to track the active component

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div>
      <div className="navigation">
        <button onClick={() => handleButtonClick('komp1')}>Rodyti visus irasus</button>
        <button onClick={() => handleButtonClick('komp2')}>Prideti nauja irasa</button>
        <button onClick={() => handleButtonClick('komp3')}>Rodyti po viena irasa</button>
      </div>

      {/* Render the selected component based on the activeComponent state */}
      {activeComponent === 'komp1' && <Komp1 />}
      {activeComponent === 'komp2' && <Komp2 />}
      {activeComponent === 'komp3' && <Komp3 />}

      {/* Any other components or content */}
    </div>
  );
}

export default App;