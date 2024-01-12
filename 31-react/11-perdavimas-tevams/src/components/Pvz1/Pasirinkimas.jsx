import { useState } from "react";
import Mygtukai from "./Mygtukai";

const Pasirinkimas = () => {
    const [tekstas, setTekstas] = useState('kol kas nieko nepasirinkta');

    // atejusiInfo buvo perduota iš Mygtukai.jsx
    // tekstasPasikeite yra metodas kuris buvo panaudotas iš Mygtukai.jsx
    // o čia tėviniam komponente atėjusią informaciją apdorojam
    const apdorotiTekstoPasikeitima = (atejusiInfo) => {
        // console.log(atejusiInfo);
        setTekstas(atejusiInfo);
    }

    return (
        <div>
            <h2>Pasirinkimas</h2>
            <Mygtukai tekstasPasikeite={apdorotiTekstoPasikeitima} />
            <p>Jūs pasirinkote: {tekstas}</p>
        </div>
    )
}

export default Pasirinkimas
