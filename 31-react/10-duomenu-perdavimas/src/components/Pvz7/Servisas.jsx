import Automobilis from "./Automobilis"

const Servisas = () => {
    let automobiliai = [
        { gamintojas: "Audi", modelis: "A6" },
        { gamintojas: "BMW", modelis: "X5" },
        { gamintojas: "Honda", modelis: "Civic" },
        { gamintojas: "Mazda", modelis: "6" },
        { gamintojas: "Toyota", modelis: "Corolla" },
    ];

    return (
        <div>
            <h2>Servisas</h2>

            <div>
                <Automobilis auto={automobiliai[0]} />
                <Automobilis auto={automobiliai[1]} />
                <Automobilis auto={automobiliai[2]} />
                <Automobilis auto={automobiliai[3]} />
                <Automobilis auto={automobiliai[4]} />
            </div>

            <div>
                {
                    automobiliai.map((automobilis, i) => {
                        return <Automobilis key={i} auto={automobilis} />
                    })
                }
            </div>
        </div>
    )
}

export default Servisas
