import Studentas from "./Studentas"

const Grupe = () => {
    let student = {
        vardas: "Jonas",
        pavarde: "Jonaitis",
        amzius: 25
    };

    return (
        <div>
            <h2>Grupė</h2>
            <Studentas studentas={student} />
        </div>
    )
}

export default Grupe
