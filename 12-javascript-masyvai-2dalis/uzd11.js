console.log("---11");
let arr11 = [2, 6, 44, 23, 66, 56];
let arr11Suma = 0;
let arr11Vidurkis = 0;
let skaiciuKiekis = 0;
arr11.forEach((i) => {
  if (i % 3 == 0) {
    console.log("Skaicius dalus is 3:", i);
    arr11Suma += i;
    skaiciuKiekis++;
  }
});
console.log(
  "Daliu is 3 skaiciu suma:",
  arr11Suma,
  "Daliu is 3 skaiciu vidurkis:",
  arr11Suma / skaiciuKiekis
);