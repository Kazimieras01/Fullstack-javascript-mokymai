const Komp6 = () => {
    const slaptasSkHandler = () => {
        let slaptasSk = Math.floor(Math.random() * 10 + 1);
        alert('Slaptas skaičius: ' + slaptasSk);
    };

    return (
        <div>
            <h2>Komp6</h2>
            <button onClick={slaptasSkHandler}>Slaptas skaičius</button>
        </div>
    )
}

export default Komp6
 