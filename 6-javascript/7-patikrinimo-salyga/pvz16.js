let automobilis = 'audi a4'
let rida = 154254;

// 1-as variantas
let ridosTipas = rida>=100000 ? 'auksta' : 'zema';
    onsole.log(`${automobilis}-io rida yra auksta, nes sudaro ${rida} km`);

// 2-as variantas:
if (rida >=100000) {
    console.log(`${automobilis}-io rida yra auksta, nes sudaro ${rida} km`);
}
else {
    console.log(`${automobilis}-io rida yra zema, nes sudaro ${rida} km`);
}

// 3-as variantas:

console.log(`${automobilis}-io rida yra ${rida >= 100000 ? 'aukšta' : 'žema'}, nes sudaro ${rida} km`);