// let marke = 'Audi';
// let modelis = '80';
// let metai = 1990;
// let rida = 346020;
// let darbinisTuris = 1.8;

let automobilis = 
{   marke: 'Audi',
    modelis: '80',
    metai: 1990,
    rida: 346020,
    darbinisTuris: 1.8, };

console.log(automobilis);
console.log('-----------------------------------');

console.log(automobilis.marke); // dot notation
console.log(automobilis.modelis);
console.log(automobilis.metai);
console.log(automobilis.rida);
console.log(automobilis.darbinisTuris);
console.log('-----------------------------------');

console.log(automobilis['marke']); // kaip masyvo indeksas
console.log(automobilis['modelis']);
console.log(automobilis['metai']);
console.log(automobilis['rida']);
console.log(automobilis['darbinisTuris']);
console.log('-----------------------------------');

let raktas = 'marke';
// automobilis.raktas
console.log(automobilis[raktas]); // is auto trauktu marke
console.log('-----------------------------------');
let knyga = {
    pavadinimas: 'titanu irankiai',
    autorius: 'nezinau',
    kaina: 39.99,
    puslapiai: 800
};
console.log(knyga);
console.log(knyga.pavadinimas);
console.log(knyga.autorius);
console.log(knyga.kaina);
console.log(knyga.puslapiai);
console.log('-----------------------------------');

let produktas = {
    pavadinimas: 'kauke',
    savybes: 'valanti',
    kaina: 39.99,
    tipas: 'jautriai odai'
};
console.log(produktas);
console.log('-----------------------------------');

let nuvaziuotaVidPerMetus = automobilis.rida / (2023 - automobilis.metai);
console.log('Auto rida:', automobilis.rida);
console.log('Auto metai:', automobilis.metai);
console.log('Auto amzius:', 2023 - automobilis.metai);
console.log('Vidutiniskai nuvaziuota per metus:', nuvaziuotaVidPerMetus);
console.log('-----------------------------------');

let dabarMetai = new Date().getFullYear(); // esamu metu isgavimas
let nuvaziuotaVidPerMetus2 = (automobilis.rida / Math.round(dabarMetai - automobilis.metai)).toFixed(2);
console.log('Vidutiniskai nuvaziuota per metus:', nuvaziuotaVidPerMetus2);
console.log('-----------------------------------');

let preke1 = {
    pavadinimas: 'Flomasteriai',
    kaina: 5,
    sku: 'FL935',
    kiekis: 34,
    spalvuKiekis: 30
};

let preke2 = {
    pavadinimas: 'Knyga',
    kaina: 10,
    sku: 'K32',
    kiekis: 15
};
console.log('PREKE 1');
console.log(preke1);
console.log('PREKE 2');
console.log(preke2);
if (preke1.kiekis > preke2.kiekis) {
    console.log((preke1.pavadinimas), 'didesnis kiekis');
} else if (preke2.kiekis > preke1.kiekis) {
    console.log('preke2 didesnis kiekis');
} else {
    console.log('abieju prekiu kiekis vienodas');
}
console.log('-----------------------------------');
let studentas = {
    vardas: 'Tomas',
    pavarde: 'Tomauskas',
    mokykla: {
        pavadinimas: 'KTU',
        adresas: 'Gedimino g. 45',
        ikurta: 1800
    },
    pazymiai: [10, 9, 9, 8, 10, 9]
};
console.log(studentas);
console.log(studentas.vardas);
console.log(studentas.pavarde);
console.log(studentas.mokykla);
console.log(studentas.mokykla.pavadinimas);
console.log(studentas.mokykla.adresas);
console.log(studentas.mokykla.ikurta);

console.log(studentas['mokykla']['pavadinimas']);

console.log(studentas.pazymiai);
console.log(studentas.pazymiai[3]);

for (const pazymys of studentas.pazymiai) {
    console.log('studento pazymys:', pazymys);
}

let suma = studentas.pazymiai.reduce((sum, paz) => sum + paz);
let vidurkis = suma / studentas.pazymiai.length;

console.log('studento vidurkis:', vidurkis);
