const Komp2 = () => {
    const slaptasSkHandler = () => {
        let slaptasSk = Math.floor(Math.random() * 10 + 1);
        console.log(slaptasSk);
        if (slaptasSk>=5) { alert('Jus laimejote')
        
        }else{
        alert('Jus nieko nelaimejote')}
        
    };

    return (
        <div>
            <h2>50/50 loterija</h2>
            <button onClick={slaptasSkHandler}>Spausti cia</button>
        </div>
    )
}

export default Komp2
