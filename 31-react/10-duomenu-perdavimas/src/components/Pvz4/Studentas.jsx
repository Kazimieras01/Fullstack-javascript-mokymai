const Studentas = (props) => {
    console.log(props);

    return (
        <div>
            <h3>{props.studentas.vardas} {props.studentas.pavarde}</h3>
            <p>Yra {props.studentas.amzius} m. amžiaus</p>
        </div>
    )
}

export default Studentas
