const Komp4 = () => {
    const pirmasHandler = () => {
        alert('Pirmas');
    };

    const antrasHandler = () => {
        alert('Antras');
    };

    return (
        <div>
            <h2>Komp4</h2>
            <button onClick={pirmasHandler}>Pirmas</button>
            <button onClick={antrasHandler}>Antras</button>
            <button onClick={antrasHandler}>Trecias</button>
        </div>
    )
}

export default Komp4
