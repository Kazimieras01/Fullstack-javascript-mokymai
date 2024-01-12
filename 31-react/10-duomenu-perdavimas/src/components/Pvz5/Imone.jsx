import Darbuotojas from "./Darbuotojas";

const Imone = () => {
    let darbuotojas = {
        vardas: "Jonas",
        pavarde: "Jonaitis",
        amzius: 25,
        pareigos: "programuotojas",
        atlyginimas: 1500
    };

    let darbuotojas2 = {
        vardas: "Petras",
        pavarde: "Petraitis",
        amzius: 35,
        pareigos: "dizaineris",
        atlyginimas: 2500
    };

    return (
        <div>
            <h2>Įmonė</h2>
            <Darbuotojas darbuotojas={darbuotojas} />
            <Darbuotojas darbuotojas={darbuotojas2} />
        </div>
    )
}

export default Imone
