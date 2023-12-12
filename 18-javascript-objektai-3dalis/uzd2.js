let prekes = [
    {pavadinimas: 'telefonas', kaina: 600, kiekis: 20},
    {pavadinimas: 'televizorius', kaina: 1000, kiekis: 100},
    {pavadinimas: 'mikrobangine', kaina: 100, kiekis: 20}
];
console.log('prekes pavadinimas:');
for (const preke of prekes) {
    console.log(preke.pavadinimas, 'kainuoja', preke.kaina , 'Eur  parduotuvese yra ', preke.kiekis , 'vnt.');
}