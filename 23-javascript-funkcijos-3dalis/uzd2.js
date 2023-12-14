function spausdintiKvadratusIrPadalintusIsDvieju(skaiciuMasyvas) {
    skaiciuMasyvas.forEach(skaicius => {
        const kvadratas = skaicius * skaicius;
        const padalintaIsDvieju = kvadratas / 2;
        console.log(`${skaicius}, ${kvadratas}, ${padalintaIsDvieju}`);
    });
}

let skaiciuMasyvas1 = [2, 5, 8, 10];
let skaiciuMasyvas2 = [3, 6, 9, 12];

console.log("Pirmas skaičių masyvas:");
spausdintiKvadratusIrPadalintusIsDvieju(skaiciuMasyvas1);

console.log("\nAntras skaičių masyvas:");
spausdintiKvadratusIrPadalintusIsDvieju(skaiciuMasyvas2);