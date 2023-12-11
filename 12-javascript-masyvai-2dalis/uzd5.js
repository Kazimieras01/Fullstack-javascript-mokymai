let masyvas = [];
let suma =0;
for (let i = 0; i < 10; i++) {
  let Skaiciai = Math.floor(Math.random() * 100) + 1; 
  masyvas.push(Skaiciai); 
  if (masyvas[i] % 4 === 0) {
    suma += masyvas[i];
  }
}
console.log("masyvas:", masyvas);
console.log("Suma skaiciu, kurie dalinasi is+ 4:", suma);