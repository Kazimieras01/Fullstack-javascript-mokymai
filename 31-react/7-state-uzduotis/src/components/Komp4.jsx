import { useState } from "react";

const Komp4 = () => {
    const [arPersoko, setArPersoko] = useState(false);

    const changeValue = () => {
        const randomBoolean = Math.random() < 0.5; 
        setArPersoko(randomBoolean);
      };
      const changeValueToTrue = () => {
        setArPersoko(true); 
      };

    return (
        <div>
          <h2>Ar zuikis peršoko griovį - {arPersoko ? 'taip' : 'ne'}</h2>
          <button onClick={changeValue}>Bandyti peršokti</button>
          <button onClick={changeValueToTrue}>Garantuotas peršokimas</button>
        </div>
      );
    };

export default Komp4
