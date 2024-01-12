import './Penktas.css';
import { useState } from 'react';

const Penktas = () => {
    const [skaicius, setSkaicius] = useState(0);

    const didintiHandler = () => {
        setSkaicius(skaicius + 2);
    }
    const mazintiHandler = () => {
        setSkaicius(skaicius - 1);
    }

    const skaiciausZinute = () => {
        if (skaicius < 10) {
            return 'Mazas'
        } else if (skaicius < 50) {
            return 'Vidutinis'
        } else {
            return 'Didelis'
        }
    }

    const skaiciausKlase = () => {
        if (skaicius < 10) {
            return 'zinute zinute-zalia'
        } else if (skaicius < 50) {
            return 'zinute zinute-geltona'
        } else {
            return 'zinute zinute-raudona'
        }
    }

    const skaiciausParagrafas = () => {
        if (skaicius < 10) {
            return <p className='zinute zinute-zalia'>Mazas</p>
        } else if (skaicius < 50) {
            return <p className='zinute zinute-geltona'>Vidutinis</p>
        } else {
            return <p className='zinute zinute-raudona'>Didelis</p>
        }
    }

    return (
        <div className='penktas-blokas'>
            <h2>Penktas</h2>
            <button onClick={didintiHandler}>Didinti</button>
            <button onClick={mazintiHandler}>Mazinti</button>
            <p className='skaicius'>Dabar yra: {skaicius}</p>
            <p className={skaiciausKlase()}>{ skaiciausZinute() }</p>
            { skaiciausParagrafas() }
        </div>
    )
}

export default Penktas
