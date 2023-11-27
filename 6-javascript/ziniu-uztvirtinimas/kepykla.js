let dVal = 8;
let vntPerVal = 15;
let workers = 5;
let firstPrice = 0.3;
let lastPrice = 1.5;
let order = 300;

let vntPerDay = (workers * dVal) *vntPerVal;
console.log(`Per darbo dieną iškepta duonos kepalų: ${vntPerDay}`);

let savikaina = 300 * firstPrice;
let pajamos = 300 * lastPrice;
let pelnoDalis = pajamos - savikaina;
console.log(`Užsakymo kepalų savikaina: ${savikaina}`);
console.log(`Pajamos iš pardavimo: ${pajamos}`);
console.log(`Pelno dalis: ${pelnoDalis}`);

if (vntPerDay >= order) {
    console.log('Kepykla spės iškepti visus užsakytus kepalus.');
  } else {
    let nespejama = order - vntPerDay;
    console.log(`Kepykla nespės iškepti ${nespejama} kepalų.`);
  }