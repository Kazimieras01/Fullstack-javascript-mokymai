import { useEffect } from "react";

const Komp3 = () => { 
    //kai komp3 uzsikraus
    useEffect(() => {
        console.log('komp3 uzsikrove');
        let counteris = 0;
        let intervalas = setInterval(() => {
            counteris++;
            console.log(`komp egzistuoja: ${counteris} sekundes`);
        }, 1000);
        return () => {
            console.log('komp3 isjungtas');
            clearInterval(intervalas)
        }
    }, []);
  return (
    <div>
        <h2>Komp3</h2>
    </div>
  )
}

export default Komp3