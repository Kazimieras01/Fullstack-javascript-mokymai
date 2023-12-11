// Sukuriamas pažymių masyvas
const pazymiai = [8, 6, 9, 7, 10, 5, 9, 8, 8, 7];

// Surūšiuojame pažymius nuo didžiausio iki mažiausio
const surikiuotiPazymiai = pazymiai.sort((a, b) => b - a);

// Išvedame tris didžiausius pažymius
const trysDidziausi = surikiuotiPazymiai.slice(0, 3);

console.log('Tris didžiausi pažymiai:', trysDidziausi);