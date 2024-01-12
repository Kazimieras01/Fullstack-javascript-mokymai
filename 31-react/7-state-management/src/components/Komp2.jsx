import { useState } from 'react';

const Komp2 = () => {
    let zodziai = ['labas', 'rytas', 'Lietuva', 'sakau', 'tau'];
    let [istrauktas, setIstrauktas] = useState('-');

    const traukti = () => {
        let random = Math.floor(Math.random() * zodziai.length);
        setIstrauktas(zodziai[random]);
    };

    return (
        <div>
            <h2>Random žodis</h2>
            <button onClick={traukti}>Traukti</button>
            <p>Ištraukėm: {istrauktas}</p>
        </div>
    )
}

export default Komp2
