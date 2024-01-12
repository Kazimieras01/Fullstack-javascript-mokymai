import { useState } from 'react';

const Komp3 = () => {
    const [greitis, setGreitis] = useState(0);

    const didintiDesim = () => {
        setGreitis(greitis + 10);
    };

    const mazintiDesim = () => {
        setGreitis(greitis - 10);
    };

    const didintiDvimPenkiais = () => {
        setGreitis(greitis + 25);
    };

    const mazintiDvimPenkiais = () => {
        setGreitis(greitis - 25);
    };

    const stop = () => {
        setGreitis(0);
    };
    const tikrinti = () => {
        if (greitis === 0) {
            return 'Stovite vietoje';
        } else if (greitis >= 5 && greitis <= 45) {
            return 'Vaziuojate letai';
        } else if (greitis >= 50 && greitis <= 75) {
            return 'Vaziuojate vidutiniu greiciu';
        } else if (greitis >= 80 && greitis <= 120) {
            return 'Vaziuojate greitai';
        } else {
            return 'Nugriovei autobusu stotele';
        }
    };

    return (
        <div>
            <h2>Greitis</h2>
            <button onClick={didintiDesim}>Gazuoti 10 km/h</button>
            <button onClick={mazintiDesim}>Letinti 10 km/h</button>
            <button onClick={didintiDvimPenkiais}>Gazuoti 25 km/h</button>
            <button onClick={mazintiDvimPenkiais}>Letinti 25 km/h</button>
            <button onClick={stop}>Sustoti</button>
            <p>Dabartinis greitis: {greitis} km/h</p>
            <p>{tikrinti()}</p>
        </div>
    )
}

export default Komp3
