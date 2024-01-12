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
            case 'HTML':
                return 'HTML - tai žymėjimo kalba';
            case 'CSS':
                return 'CSS - tai stiliaus kalba';
            case 'JavaScript':
                return 'JavaScript - tai programavimo kalba';
            case 'React':
                return 'React - tai biblioteka';
            default:
                return 'Nepasirinkta';
        }
    };

    return (
        <div>
            <h2>Pasirinkimas</h2>
            <p>Labiausiai patiko:</p>
            <button onClick={pasirinkimoHandler}>HTML</button>
            <button onClick={pasirinkimoHandler}>CSS</button>
            <button onClick={pasirinkimoHandler}>JavaScript</button>
            <button onClick={pasirinkimoHandler}>React</button>
            <p>Pasirinkote: {pasirinkimas}</p>
            <p>{ tikrinti() }</p>
        </div>
    )
}

export default Komp5
