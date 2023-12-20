const atsSkaicius = () => Math.floor(Math.random() * 100);
const suma = (a, b) => `${a} + ${b} = ${a + b}`;
const skirtumas = (a, b) => `${a} - ${b} = ${a - b}`;
const sandauga = (a, b) => `${a} * ${b} = ${a * b}`;
const bendra = () => {
  console.log(suma(atsSkaicius(), atsSkaicius()));
  console.log(skirtumas(atsSkaicius(), atsSkaicius()));
  console.log(sandauga(atsSkaicius(), atsSkaicius()));
};
bendra();

// paaiskinimai:

let masyvas = [5, 6, 7, 8, 9,];

masyvas.forEach(sk => {
    return sk * 2
})

masyvas.forEach(sk => sk * 2)