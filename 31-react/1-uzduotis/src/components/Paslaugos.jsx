// import React from 'react';
import Paslauga from './Paslauga';

const Paslaugos = () => {
  const paslaugosDuomenys = [
    {
      pavadinimas: 'Pirma paslauga',
      aprasymas: 'Aprašymas pirmos paslaugos...',
    },
    {
      pavadinimas: 'Antra paslauga',
      aprasymas: 'Aprašymas antros paslaugos...',
    },
    {
      pavadinimas: 'Trečia paslauga',
      aprasymas: 'Aprašymas trečios paslaugos...',
    },
  ];

  return (
    <div>
      {paslaugosDuomenys.map((paslauga, index) => (
        <Paslauga
          key={index}
          pavadinimas={paslauga.pavadinimas}
          aprasymas={paslauga.aprasymas}
        />
      ))}
    </div>
  );
};

export default Paslaugos;