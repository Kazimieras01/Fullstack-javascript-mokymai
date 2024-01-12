import { useState } from "react";

const Komp4 = () => {
    const [skaicius, setSkaicius] = useState(10);

    const skKeitimoHandler = (pokytis) => {
        // alert('gautas pokytis: ' + pokytis);
        if (pokytis === 0) {
            setSkaicius(0);
        } else {
            setSkaicius(skaicius + pokytis);
        }
    };

    return (
        <div>
            <h2>Skaičių keitinėjimas 2</h2>
            <button onClick={ () => skKeitimoHandler(1) }>Didinti vienu</button>
            <button onClick={ () => skKeitimoHandler(-1) }>Mažinti vienu</button>
            <button onClick={ () => skKeitimoHandler(5) }>Didinti penkiais</button>
            <button onClick={ () => skKeitimoHandler(-5) }>Mažinti penkiais</button>
            <button onClick={ () => skKeitimoHandler(0) }>Nustatyti 0</button>
            <p>Dabartinė reikšmė: {skaicius}</p>
        </div>
    )
}

export default Komp4
