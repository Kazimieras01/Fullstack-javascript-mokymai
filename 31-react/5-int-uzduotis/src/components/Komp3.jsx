const Komp3 = () => {
    let slaptasSk = Math.floor(Math.random() * 100 + 1);
        console.log(slaptasSk);
    const slaptasSkHandler = () => {
        
        if (slaptasSk%2==0) { alert('Skaicius yra lyginis')
           }else{alert('Skaicius nelyginis')}
    };
    const tracokas = () => {
        
        if (slaptasSk>30) { alert('Skaicius yra didesnis uz 30')
           }else{alert('Skaicius mazesnis arba lygus 30')}
    };
    const arPirminis = () => {
                 {
            let kiekDalikliu = 0;
        
            for (let i = 1; i <= slaptasSk; i++) {
                if (slaptasSk % i === 0) {
                    kiekDalikliu++;
                }
            }
            if (kiekDalikliu===2) { alert('Skacius yra pirminis')
               } else {alert ('Skaciu ne pirminis')}
        }
        
    };

    return (
        <div>
            <h2>Tikrinimai</h2>
            <button onClick={slaptasSkHandler}>Ar lyginis?</button>
            <button onClick={tracokas}>Ar didesnis nei 30?</button>
            <button onClick={arPirminis}>Ar pirminis skaicius?</button>
        </div>
    )
}

export default Komp3
