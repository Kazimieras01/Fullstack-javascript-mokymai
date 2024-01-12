const Komp1 = () => {
    const tekstoHandler = (event) => {
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.value);
        let tekstas = event.target.value;
        if (tekstas.length > 5) {
            alert('whoops! atsargiai, tekstas didėja: ' + tekstas);
        }
    };

    return (
        <div>
            <h2>Komp1</h2>
            <input onInput={tekstoHandler} type="text" />
        </div>
    )
}

export default Komp1
