const Komp2 = () => {
    let pazymiai = [10,8,7,6,4,8,9];
    return (
        <div>
            <h2>Komp2</h2>
            <p>Pazymiai: {pazymiai}</p>
            <p>Pazymiai: {pazymiai.join (', ')}</p>
            <p>Pazymiai: { pazymiai.join (', ')}</p>
            <p>Pirmas: {pazymiai[0] }</p>
            <p>Trecias: {pazymiai[2] }</p>
            <p>Paskutinis: {pazymiai[pazymiai.length - 1] }</p>
            <p>Kiekis: {pazymiai.length }</p>
        </div>
    )
}
export default Komp2