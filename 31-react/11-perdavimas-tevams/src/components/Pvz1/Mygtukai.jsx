const Mygtukai = (props) => {
    const kavaHandler = () => {
        // alert('Jūsų pasirinkimas: kava');
        props.tekstasPasikeite('kava');
    }

    const arbataHandler = () => {
        // alert('Jūsų pasirinkimas: arbata');
        props.tekstasPasikeite('arbata');
    }

    const vanduoHandler = () => {
        // alert('Jūsų pasirinkimas: vanduo');
        props.tekstasPasikeite('vanduo');
    }

    return (
        <div>
            <button onClick={kavaHandler}>Kava</button>
            <button onClick={arbataHandler}>Arbata</button>
            <button onClick={vanduoHandler}>Vanduo</button>
        </div>
    )
}

export default Mygtukai
