let studentai = [
    { vardas: 'Ugne', pazymiai: [9, 10, 9, 10, 8] },
    { vardas: 'Gintaras', pazymiai: [8, 9, 10, 7, 10, 9] },
    { vardas: 'Povilas', pazymiai: [10, 10, 9] },
    { vardas: 'Inga', pazymiai: [8, 7, 8, 9] },
];

for (const stud of studentai) {
    // console.log(stud);
    let suma = stud.pazymiai.reduce((sum, paz) => sum + paz);
    let vid = (suma / stud.pazymiai.length).toFixed(2);
    stud.vidurkis = vid;
}

for (const stud of studentai) {
    console.log(stud);
}