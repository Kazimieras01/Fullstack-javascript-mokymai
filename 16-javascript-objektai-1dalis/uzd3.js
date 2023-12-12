let knyga1 = {
    pavadinimas: 'Knyga1',
    autorius: 'Autorius1',
    zanras: 'fantastika',
    kaina: 20,
    puslapiai: 300,
    skyriai: ['pirmas', 'antras', 'trecias', 'ketvirtas'],
    isleista: 2020,
    yraKnygyne: false
};

let knyga2 = {
    pavadinimas: 'Knyga2',
    autorius: 'Autorius2',
    zanras: 'fantastika',
    kaina: 25,
    puslapiai: 250,
    skyriai: ['pirmas', 'antras', 'trecias'],
    isleista: 2022,
    yraKnygyne: true
};

console.log('Pirma knyga:', knyga1);
console.log('Antra knyga:', knyga2);

if (knyga1.puslapiai>knyga2.puslapiai) {
    console.log('Plonesnė knyga:', knyga2.pavadinimas)
}else 
    {console.log('Plonesne knyga:', knyga1.pavadinimas)
};

let daugiauSkyriu = knyga1.skyriai.length > knyga2.skyriai.length ? knyga1 : knyga2;
console.log('Knyga su daugiau skyriu:', daugiauSkyriu.pavadinimas);

let padvigintaKaina = knyga1.kaina * 2;
let palyginimas = padvigintaKaina > knyga2.kaina ? 'Taip' : 'Ne';
console.log('Ar padvigubinus pirmos knygos kaina ji butu brangesne uz antra knyga?:', palyginimas);