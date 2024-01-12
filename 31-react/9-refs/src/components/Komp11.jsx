import { useState, useRef } from 'react';

const Komp11 = () => {
    const [salis, setSalis] = useState('');

    const salisInputRef = useRef();

    const ivestiSalisHandler = () => {
        // console.log(salisInputRef.current.value);
        setSalis(salisInputRef.current.value);
    };

    return (
        <div>
            <h2>Mėgstamiausias miestas</h2>
            <div>
                <label htmlFor="salis">Įveskite miesta:</label>
                <input ref={salisInputRef} id="salis" type="text" />
                <button onClick={ivestiSalisHandler}>Įvesti</button>
            </div>
            <p>Jūs įvedėte: {salis}</p>
        </div>
    )
}

export default Komp11