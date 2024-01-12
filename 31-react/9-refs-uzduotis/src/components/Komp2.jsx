import { useState, useRef } from 'react';

const Kelione = () => {
    const kmRef = useRef(null);
    const sanaudosRef = useRef(null);
    const kainaRef = useRef(null);

    const [kelionesKm, setKelionesKm] = useState(null);
    const [vidSanaudos, setVidSanaudos] = useState(null);
    const [kuroKaina, setKuroKaina] = useState(null);
    const [kuroSanaudos, setKuroSanaudos] = useState(null);
    const [kuroKainaTotal, setKuroKainaTotal] = useState(null);
    const [arRodytiInfo, setArRodytiInfo] = useState(false);

    const skaiciuotiKuroSanaudas = () => {
        if (kelionesKm !== null && vidSanaudos !== null) {
            const kuroSanaudos = (kelionesKm / 100) * vidSanaudos;
            setKuroSanaudos(kuroSanaudos);
        }
    };

    const skaiciuotiKuroKaina = () => {
        if (kelionesKm !== null && vidSanaudos !== null && kuroKaina !== null) {
            const kuroKainaTotal = (kelionesKm / 100) * vidSanaudos * kuroKaina;
            setKuroKainaTotal(kuroKainaTotal);
            setArRodytiInfo(true);
            kmRef.current.value = '';
            sanaudosRef.current.value = '';
            kainaRef.current.value = '';
        }
    };

    return (
        <div id='kelione'>
            <h2>Kelione</h2>
            <label>Kelionės atstumas (km):</label>
            <input ref={kmRef} type="number" />
            <label>Vidutinės kuro sąnaudos (l/100km):</label>
            <input ref={sanaudosRef} type="number" />
            <label>Kuro kaina už litrą:</label>
            <input ref={kainaRef} type="number" />
            <button onClick={() => { setKelionesKm(parseFloat(kmRef.current.value)); setVidSanaudos(parseFloat(sanaudosRef.current.value)); setKuroKaina(parseFloat(kainaRef.current.value)); skaiciuotiKuroSanaudas(); skaiciuotiKuroKaina(); }}>Patvirtinti</button>

            {arRodytiInfo && (
                <div>
                    <p>Kuro sąnaudos kelionei: {kuroSanaudos} litrų</p>
                    <p>Kuro išlaidos kelionei: {kuroKainaTotal} €</p>
                </div>
            )}
        </div>
    );
};

export default Kelione;