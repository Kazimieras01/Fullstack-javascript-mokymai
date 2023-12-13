let studentai = [
    { vardas: 'Povilas', amzius: 20, pazymiai: [10, 10, 9], study_prog: 'IT', kursas: 3 },
    { vardas: 'Ugne', amzius: 20, pazymiai: [9, 10, 9, 10], study_pror: 'Computer science', kursas: 3 },
    { vardas: 'Gintaras', amzius: 20, pazymiai: [8, 9, 10, 7, 10, 9], study_prog: 'Ecology', kursas: 3 },
    { vardas: 'Inga', amzius: 20, pazymiai: [8, 7, 8, 9], study_prog: 'Biology', kursas: 3 },
];

for (let stud of studentai) {
    console.log(stud.vardas, stud.amzius, stud.study_prog, stud.kursas);
    console.log('Pažymiai:', stud.pazymiai);
    stud.vidurkis = (stud.pazymiai.reduce((sum, pazymys) => sum + pazymys)/ stud.pazymiai.length).toFixed(2);
    console.log('Pažymių vidurkis:', stud.vidurkis);
}

console.log('------');
studentuVidurkis = (studentai.map(stud => parseFloat(stud.vidurkis)).reduce((sum, studVidurkis) => sum + studVidurkis)).toFixed(2);
console.log('Visų studentų vidurkis:', studentuVidurkis)