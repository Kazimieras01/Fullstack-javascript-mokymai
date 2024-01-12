const Komp6 = () => {
    const students = ['Albert', 'Augustina', 'Dana', 'Justas', 'Karolis', 'Rokas', 'Irina', 'Stasys', 'Aidas', 'Simas']; 

    const slaptasSkHandler = () => {
          const randomIndex = Math.floor(Math.random() * students.length); 
          const randomStudent = students[randomIndex];        
          alert('Prie lentos keliauja: ' + randomStudent); 
        }
    return (
        <div>
            <h2>Prie lentos</h2>
            <button onClick={slaptasSkHandler}>Nelaimelio pasirinkimas</button>
        </div>
    )
}

export default Komp6
