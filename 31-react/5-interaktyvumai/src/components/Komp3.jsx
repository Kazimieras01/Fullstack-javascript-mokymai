const Komp3 = () => {
    const mygtukasHandler = () => {
        console.log('paspaudei mygtuka');
    };

    return (
        <div>
            <h2>Komp3</h2>
            <button onClick={mygtukasHandler}>Mygtukas</button>
            <button>Kitas mygtukas</button>
        </div>
    )
}

export default Komp3
