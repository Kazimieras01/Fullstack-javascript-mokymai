import { useState, useEffect } from "react";

const Komp1 = () => {
    const [count, setCount] = useState(0);

    // vykdomas tada kai komponentas užsikrauna,
    // gerai norint pritaikyti pirmus veiksmus, kurie turėtų būti
    // atlikti kai komponentas užsikrauna,
    // pvz išsitraukti duomenų iš serverio
    useEffect(() => {
        console.log('komponentas užsikrovė');
    }, []); // jei masyvas tuščias, tai vykdoma tik vieną kartą
    // nes šituose [] skliaustuose mes nurodome kad šis effect
    // vykdomas tada kai pasikeičia skliaustuose nurodyta informacija,
    // o jei skliaustai tušti - tuomet tiesiog kai komponentas užsikrauna

    // šį effectą vykdo kai pasikeičia count reikšmė,
    // šis effect geras kai norite atlikti papildomų veiksmų po count pasikeitimo
    useEffect(() => {
        console.log('pasikeitė count reikšmė', count);
        if (count > 5) {
            alert('viršijote 5');
            setCount(0);
        }
    }, [count]);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h2>Komp1</h2>
            <button onClick={handleClick}>Click</button>
            <p>{count}</p>
        </div>
    )
}

export default Komp1
