const Komp3 = () => {
    let zodis = 'azuolas';

    const inputHandler = (event) => {
        let ivestasZodis = event.target.value;
        if (zodis === ivestasZodis) {
            console.log('Sveikinu, atspejote zodi!');
        } else {
            console.log('Bandykite dar karta!');
        }
    };

    return (
        <div>
            <h2>Komp3</h2>
            <input type="text" onChange={inputHandler} />
        </div>
    )
}

export default Komp3
