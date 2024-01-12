const Komp5 = () => {
    const mygtukoHandler = (event) => {
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.textContent);
        alert('Paspaudei: ' + event.target.textContent + ' mygtuka');
    };

    return (
        <div>
            <h2>Komp5</h2>
            <button onClick={mygtukoHandler}>Pirmas</button>
            <button onClick={mygtukoHandler}>Antras</button>
        </div>
    )
}

export default Komp5
