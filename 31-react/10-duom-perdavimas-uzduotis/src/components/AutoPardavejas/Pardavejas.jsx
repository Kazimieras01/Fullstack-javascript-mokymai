import Automobilis from './Automobilis';

function Pardavejas() {
  const automobilis = {
    marke: 'BMW',
    modelis: 'X5',
    metai: 2020,
    rida: 25000,
    piniguSuma: 30000,
    // ... other properties
  };

  return (
    <div>
      <h2>Auto pardavėjo informacija:</h2>
      <Automobilis automobilis={automobilis} />
    </div>
  );
}

export default Pardavejas;