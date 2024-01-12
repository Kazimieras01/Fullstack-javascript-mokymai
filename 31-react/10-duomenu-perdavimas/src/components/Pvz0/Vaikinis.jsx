const Vaikinis = (duomenys) => {
    console.log(duomenys);

    return (
        <div>
            <h3>{duomenys.tekstas}</h3>
            <p>{duomenys.skaicius}</p>
        </div>
    )
}

export default Vaikinis