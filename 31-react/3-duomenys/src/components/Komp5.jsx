const Komp5 = () => {
    let title = 'Medziai musu soduose';
    let medziai = ['Uosis', 'Berzas', 'Pusis', 'Kedras', 'Egle', 'Klevas', 'Sermuksnis', 'Kastonas', 'Kriause', 'Obelis', 'Seivamedis'];
    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {medziai.map((medis, i) => <li key={i}>{medis}</li>)}
            </ul>
        </div>
    )
}
export default Komp5