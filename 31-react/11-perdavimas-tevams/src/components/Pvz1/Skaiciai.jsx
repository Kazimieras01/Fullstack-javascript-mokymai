const Skaiciai = (props) => {
    const kavaHandler = () => {
        // alert('Jūsų pasirinkimas: kava');
        props.skaiciusPasikeite(5);
    }

    const arbataHandler = () => {
        // alert('Jūsų pasirinkimas: arbata');
        props.skaiciusPasikeite(10);
    }

    const vanduoHandler = () => {
        // alert('Jūsų pasirinkimas: vanduo');
        props.skaiciusPasikeite(15);
    }

    return (
        <div>
            <button onClick={kavaHandler}>5</button>
            <button onClick={arbataHandler}>10</button>
            <button onClick={vanduoHandler}>15</button>
        </div>
    )
}

export default Skaiciai