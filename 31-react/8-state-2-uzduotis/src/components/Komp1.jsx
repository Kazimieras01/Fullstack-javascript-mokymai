import { useState, useEffect } from 'react';

const Komp1 = () => {
    const [pirmasLaikas, setPirmasLaikas] = useState('');
    const [antrasLaikas, setAntrasLaikas] = useState('');
    const [greitesnis, setGreitesnis] = useState('');

    useEffect(() => {
        if (pirmasLaikas !== '' && antrasLaikas !== '') {
            if (pirmasLaikas < antrasLaikas) {
                const skirtumas = (antrasLaikas - pirmasLaikas).toFixed(3);
                setGreitesnis(`Pirmas bėgikas buvo greitesnis per ${skirtumas} sekundes`);
            } else if (antrasLaikas < pirmasLaikas) {
                const skirtumas = (pirmasLaikas - antrasLaikas).toFixed(3);
                setGreitesnis(`Antras bėgikas buvo greitesnis per ${skirtumas} sekundes`);
            } else {
                setGreitesnis('Bėgikai įveikė distanciją per tą patį laiką');
            }
        }
    }, [pirmasLaikas, antrasLaikas]);

    const pirmasLaikasHandler = (event) => {
        setPirmasLaikas(event.target.value);
    };

    const antrasLaikasHandler = (event) => {
        setAntrasLaikas(event.target.value);
    };

    return (
        <div id='begikai'>
            <h2>Bėgikų laikai 100m distancijoje</h2>
            <label htmlFor="pirmasLaikasInput">Pirmo begiko laikas :</label>
            <input onChange={pirmasLaikasHandler} type="number" id="pirmasLaikasInput" /> <br />
            <label htmlFor="antrasLaikasInput">Antro begiko laikas:</label>
            <input onChange={antrasLaikasHandler} type="number" id="antrasLaikasInput" />
            <p>Pirmo bėgiko laikas:<strong> {pirmasLaikas} s.</strong></p>
            <p>Antro bėgiko laikas:<strong> {antrasLaikas} s.</strong></p>
            <p id='color'><strong>{greitesnis}</strong></p>
        </div>
    );
};

export default Komp1;
