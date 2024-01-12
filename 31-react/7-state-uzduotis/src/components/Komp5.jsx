import { useState } from 'react';

const Komp5 = () => {
    const [pasirinkimas, setPasirinkimas] = useState('-');

    const pasirinkimoHandler = (event) => {
        // alert('Pasirinkimas: ' + event.target.innerText);

        let naujasPasirinkimas = event.target.innerText;
        setPasirinkimas(naujasPasirinkimas);

        // arba:
        // setPasirinkimas(event.target.innerText);
    };

    const tikrinti = () => {
        switch (pasirinkimas) {
            case '„pomidoras“.':
                return '„pomidoras“.';
            case '„agurkas“.':
                return '„agurkas“.';
        }
    };

    return (
        <div>
            <h2>Pasirinkimas</h2>
            <button onClick={pasirinkimoHandler}>pomidoras</button>
            <button onClick={pasirinkimoHandler}>agurkas</button>
            <p>Pasirinkote: {pasirinkimas}</p>
            <p>{ tikrinti() }</p>
        </div>
    )
}

export default Komp5