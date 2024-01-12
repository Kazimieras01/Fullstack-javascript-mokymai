import { useState } from 'react';

const Komp2 = () => {
    const uzsakymai = 20
    const [kiausiniuKiekis, setKiausiniuKiekis] = useState('');

    const kiausiniuKiekisHandler = (event) => {
        setKiausiniuKiekis(event.target.value);
    };

    const ivertintiUzsakymus = () => {
        if (kiausiniuKiekis !== '') {
            const kiausiniuKiekisNumber = parseInt(kiausiniuKiekis);
            if (kiausiniuKiekisNumber >= uzsakymai) {
                return `Viskas gerai! Yra perteklius kiaušinių: ${kiausiniuKiekisNumber - uzsakymai}`;
            } else {
                return `Nespėsite! Trūksta kiaušinių: ${uzsakymai - kiausiniuKiekisNumber}`;
            }
        }
        return ''; // Jei nėra įvesties, grąžiname tuščią eilutę
    };

    const rezultatas = ivertintiUzsakymus();

    return (
        <div id='vistos'>
            <h2>Vistų užsakymai</h2>
            <label htmlFor="kiausiniuKiekisInput">Įveskite kiaušinių kiekį:</label>
            <input onChange={kiausiniuKiekisHandler} type="number" id="kiausiniuKiekisInput" />
            <p id='color'>{rezultatas}</p>
        </div>
    );
};

export default Komp2;
