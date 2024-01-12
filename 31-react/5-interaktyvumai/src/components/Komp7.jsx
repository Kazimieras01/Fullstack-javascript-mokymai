const Komp7 = () => {
    let sk = 14;

    const patikrintiSkHandler = () => {
        if (sk > 10) {
            alert('Skaičius didesnis už 10');
        } else {
            alert('Skaičius mažesnis arba lygus 10');
        }
    };

    return (
        <div>
            <h2>Komp7</h2>
            <button onClick={patikrintiSkHandler}>Patikrinti skaičių</button>
        </div>
    )
}

export default Komp7
