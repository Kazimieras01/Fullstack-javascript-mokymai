const Komp5 = () => {

        let numbers = [1,5,21,85,4,81,]  

        const pirmasHandler = () => {
        const sum = numbers.reduce((acc, curr) => acc + curr, 0);
        console.log('Sum:', sum); 
        alert(`skaiciu suma: ${sum}`)
        }

        const antrasHandler = () => {
        const maxNumber = Math.max.apply(null, numbers);
        console.log('Didžiausias skaičius:', maxNumber);
        alert(`didziausias skaicius masyve yra: ${maxNumber}`)    
        };   
        return (
            <div>
                <h2>Masyvo duomenys</h2>
                <button onClick={pirmasHandler}>Skaciu masyvo suma</button>
                <button onClick={antrasHandler}>Didziausias skaicius masyve</button>
            </div>
        )
    }
export default Komp5
