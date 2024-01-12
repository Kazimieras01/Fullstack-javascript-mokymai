import Delione from './Delione';

function HobiuParduotuve() {
  const dalykai1 = {
    pavadinimas: 'Dėlione 1',
    kiekis: 500,
    plotis: 30,
    aukstis: 40,
  };

  const dalykai2 = {
    pavadinimas: 'Dėlione 2',
    kiekis: 1000,
    plotis: 35,
    aukstis: 45,
  };

  const dalykai3 = {
    pavadinimas: 'Dėlione 3',
    kiekis: 1200,
    plotis: 40,
    aukstis: 50,
  };

  return (
    <div>
        <h2>Deliones</h2>
      <Delione dalykai={dalykai1} />
      <Delione dalykai={dalykai2} />
      <Delione dalykai={dalykai3} />
    </div>
  );
}

export default HobiuParduotuve;