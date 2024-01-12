import Diena from "./Diena";

const Savaite = () => {
    let temperaturos = [14, 16, 15, 17, 18, 19, 20];

    return (
        <div>
            <h2>Savaitė</h2>

            <div>
                {
                    temperaturos.map((temp, i) =>
                        <p key={i}>Dienos temperatūra: {temp}</p>
                    )
                }
            </div>

            <div>
                <Diena temp={temperaturos[0]} />
                <Diena temp={temperaturos[1]} />
                <Diena temp={temperaturos[2]} />
                <Diena temp={temperaturos[3]} />
                <Diena temp={temperaturos[4]} />
                <Diena temp={temperaturos[5]} />
                <Diena temp={temperaturos[6]} />
            </div>

            <div>
                {
                    temperaturos.map((temperatura, i) =>
                        <Diena key={i} temp={temperatura} />
                    )
                }
            </div>
        </div>
    )
}

export default Savaite
