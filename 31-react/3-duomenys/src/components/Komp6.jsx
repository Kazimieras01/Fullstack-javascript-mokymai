const Komp6 = () => {
    let sk1 = [10, 8, 7, 6, 8, 7];
    let sk2 = [];
    return (
        <div>
            <h2>Skaiciai su if salyga</h2>
            <h3>skaiciai 1</h3>
            {
                sk1.length > 0 ?
                    <ul>
                        {sk1.map((skaicius, i) => <li key={i}>{skaicius}</li>)}
                    </ul>
                    :
                    <p>Skaciu 1 nera</p>
            }
            <h3>skaiciai 2</h3>
            {
                sk2.length > 0 ?
                <ul>
                    {sk2.map((skaicius, i) => <li key={i}>{skaicius}</li>)}
                </ul>
                :
                <p>Skaiciu 2 nera</p>
            }
        </div>
    )
}
export default Komp6