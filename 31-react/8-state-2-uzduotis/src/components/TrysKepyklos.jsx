import { useState } from 'react';

const TrysKepyklos = () => {
    const [uzsakymai, setUzsakymai] = useState(50); // Šis skaičius gali būti pakeistas pagal dienos užsakymų kiekį
    const [kepykla1, setKepykla1] = useState('');
    const [kepykla2, setKepykla2] = useState('');
    const [kepykla3, setKepykla3] = useState('');

    const kepykla1Handler = (event) => {
        setKepykla1(event.target.value);
    };

    const kepykla2Handler = (event) => {
        setKepykla2(event.target.value);
    };

    const kepykla3Handler = (event) => {
        setKepykla3(event.target.value);
    };

    const ivertintiUzsakymus = () => {
        if (kepykla1 !== '' && kepykla2 !== '' && kepykla3 !== '') {
            const sum = parseInt(kepykla1) + parseInt(kepykla2) + parseInt(kepykla3);
            if (sum >= uzsakymai) {
                return 'Kepyklos spės įvykdyti užsakymus!';
            } else {
                return `Kepyklos nespės įvykdyti visų užsakymų, trūksta: ${uzsakymai - sum}`;
            }
        }
        return ''; // Jei nėra įvesties, grąžiname tuščią eilutę
    };

    const rezultatas = ivertintiUzsakymus();

    return (
        <div id='kepyklos'>
            <h2>Trys Kepyklos</h2>
            <label htmlFor="uzsakymaiInput">Įveskite dienos užsakymų kiekį:</label>
            <input onChange={(event) => setUzsakymai(event.target.value)} type="number" id="uzsakymaiInput" />

            <h3>Kepykla 1</h3>
            <label htmlFor="kepykla1Input">Kiek galite įvykdyti užsakymų?</label>
            <input onChange={kepykla1Handler} type="number" id="kepykla1Input" />

            <h3>Kepykla 2</h3>
            <label htmlFor="kepykla2Input">Kiek galite įvykdyti užsakymų?</label>
            <input onChange={kepykla2Handler} type="number" id="kepykla2Input" />

            <h3>Kepykla 3</h3>
            <label htmlFor="kepykla3Input">Kiek galite įvykdyti užsakymų?</label>
            <input onChange={kepykla3Handler} type="number" id="kepykla3Input" />

            <p id='color'>{rezultatas}</p>
        </div>
    );
};

export default TrysKepyklos;