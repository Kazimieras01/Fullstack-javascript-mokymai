let skaicius1 = 15;
let skaicius2 = 28;
let skaicius3 = 10;

if (skaicius1 <= skaicius2 && skaicius1 <= skaicius3) {
  console.log(`Mažiausias skaičius yra: ${skaicius1}`);
} else if (skaicius2 <= skaicius1 && skaicius2 <= skaicius3) {
  console.log(`Mažiausias skaičius yra: ${skaicius2}`);
} else {
  console.log(`Mažiausias skaičius yra: ${skaicius3}`);
}