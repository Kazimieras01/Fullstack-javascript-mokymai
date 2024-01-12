import { useState, useEffect } from 'react';

const Komp2 = () => {
    const [selectedAction, setSelectedAction] = useState('none');

    // bus vykdomi papildomi veiksmai pasikeitus selectedAction informacijai,
    // galima pastebėti kad šis effect yra vykdomas tik kai pasikeičia reikšmę,
    // o jei ji nustatoma į tą patį, tai reiškia nepasikeitė ir nėra vykdoma papildomai
    useEffect(() => {
        console.log('atliekami papildomi veiksmai susiję su', selectedAction);
    }, [selectedAction]);

    const handleClick = (event) => {
        setSelectedAction(event.target.textContent);
    }

    return (
        <div>
            <h2>Komp2</h2>
            <button onClick={handleClick}>Produktai</button>
            <button onClick={handleClick}>Užsakymai</button>
            <p>Pasirinkta: {selectedAction}</p>
        </div>
    )
}

export default Komp2
