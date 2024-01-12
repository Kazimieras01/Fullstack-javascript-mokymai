import { useState, useRef } from 'react';

const Skaicius = () => {
    const ivestiesRef = useRef(null);
    const [saugomasSkaicius, setSaugomasSkaicius] = useState(null);
    const [arTeigiamas, setArTeigiamas] = useState(null);
    const [arLyginis, setArLyginis] = useState(null);
    const [arRodytiAtsakymus, setArRodytiAtsakymus] = useState(false);

    const patvirtintiSkaiciu = () => {
        const skaicius = parseFloat(ivestiesRef.current.value);
        if (!isNaN(skaicius)) {
            setSaugomasSkaicius(skaicius);
            setArTeigiamas(skaicius >= 0);
            setArLyginis(skaicius % 2 === 0);
            setArRodytiAtsakymus(true);
            ivestiesRef.current.value = '';
        }
    };

    return (
        <div id='skaicius'>
            <h2>Skaicius</h2>
            <input ref={ivestiesRef} type="number" />
            <button onClick={patvirtintiSkaiciu}>Patvirtinti</button>
            
            {arRodytiAtsakymus && (
                <div>
                    <p>Suvestas skaičius: {saugomasSkaicius}</p>
                    <p>Ar teigiamas skaičius? {arTeigiamas ? 'Taip' : 'Ne'}</p>
                    <p>Ar lyginis skaičius? {arLyginis ? 'Taip' : 'Ne'}</p>
                </div>
            )}
        </div>
    );
};

export default Skaicius;