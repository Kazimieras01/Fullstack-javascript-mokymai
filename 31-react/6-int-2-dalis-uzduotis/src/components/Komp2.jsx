const Komp2 = () => {
    const inputHandler = (event) => {
        let skaicius = event.target.valueAsNumber;
        console.log(skaicius);
        if (skaicius === 100) {
            alert('Sveikinu, pasiekete 100!');
        }
    };

    return (
        <div>
            <h2>Komp2</h2>
            <input onInput={inputHandler} type="number" />
        </div>
    )
}

export default Komp2
