import { useState, useRef } from 'react';

const MedzioApdirbejas = () => {
    const [medziagosKaina, setMedziagosKaina] = useState(null);
    const [valandos, setValandos] = useState(null);
    const [valandinisUzdarbis, setValandinisUzdarbis] = useState(null);

    const [rodytiSkaiciavimus, setRodytiSkaiciavimus] = useState(false);

    const medziagosKainaRef = useRef();
    const valandosRef = useRef();
    const valandinisUzdarbisRef = useRef();

    const skaiciuotiIslaidas = () => {
        if (medziagosKaina !== null && valandos !== null && valandinisUzdarbis !== null) {
            const islaidos = valandos * valandinisUzdarbis - medziagosKaina;
            return islaidos.toFixed(2);
        }
        return null;
    };

    const skaiciuotiProduktoKaina = () => {
        const islaidos = skaiciuotiIslaidas();
        if (islaidos !== null) {
            const produktoKaina = islaidos * 1.3;
            return produktoKaina.toFixed(2);
        }
        return null;
    };

    const isvalytiLaukelius = () => {
        setMedziagosKaina(null);
        setValandos(null);
        setValandinisUzdarbis(null);
        setRodytiSkaiciavimus(false);

        // Išvalyti input reikšmes naudojant useRef
        medziagosKainaRef.current.value = '';
        valandosRef.current.value = '';
        valandinisUzdarbisRef.current.value = '';
    };

    const patvirtintiIvesti = () => {
        setMedziagosKaina(parseFloat(medziagosKainaRef.current.value));
        setValandos(parseFloat(valandosRef.current.value));
        setValandinisUzdarbis(parseFloat(valandinisUzdarbisRef.current.value));

        skaiciuotiIsvaizda();
    };

    const skaiciuotiIsvaizda = () => {
        // Įvykdyti tik jei yra įvesti visi duomenys
        if (medziagosKaina !== null && valandos !== null && valandinisUzdarbis !== null) {
            setRodytiSkaiciavimus(true);
        }
    };

    return (
        <div id='medis'>
            <h2>Medžio Apdirbėjas</h2>
            <label>Medžiagos kaina:</label>
            <input type="number" ref={medziagosKainaRef} />
            <label>Valandos dirbant prie projekto:</label>
            <input type="number" ref={valandosRef} />
            <label>Valandinis uždarbis:</label>
            <input type="number" ref={valandinisUzdarbisRef} />
            <button onClick={patvirtintiIvesti}>Patvirtinti</button>

            {rodytiSkaiciavimus && (
                <div>
                    <h3>Įvesti duomenys:</h3>
                    <p>Medžiagos kaina: {medziagosKaina} valiuta</p>
                    <p>Valandos dirbant prie projekto: {valandos} val.</p>
                    <p>Valandinis uždarbis: {valandinisUzdarbis} valiuta/val.</p>
                    <button onClick={isvalytiLaukelius}>Išvalyti laukelius</button>
                    <h3>Skaičiavimai:</h3>
                    <p>Bendros projekto išlaidos: {skaiciuotiIslaidas()} valiuta</p>
                    <p>Produkto kaina: {skaiciuotiProduktoKaina()} valiuta</p>
                </div>
            )}
        </div>
    );
};

export default MedzioApdirbejas;