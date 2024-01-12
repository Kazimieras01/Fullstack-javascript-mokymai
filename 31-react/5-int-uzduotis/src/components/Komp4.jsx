const Komp4 = () => {
    let medis = ['uosis', 'azuolas', 'berzas']
    let komentaras = ['oho koks rimtas', 'labai mielas rastas', 'malka kaip malka']

    const pirmasHandler = () => {
        alert(`${medis[0]} - ${komentaras[0]}`);
    };

    const antrasHandler = () => {
        alert(`${medis[1]} - ${komentaras[1]}`);
    };
    const treciasHandler = () => {
        alert(`${medis[2]} - ${komentaras[2]}`);
    };

    return (
        <div>
            <h2>Medziai</h2>
            <button onClick={pirmasHandler}>Pirmas medis</button>
            <button onClick={antrasHandler}>Antras medis</button>
            <button onClick={treciasHandler}>Trecias medis</button>
        </div>
    )
}

export default Komp4
