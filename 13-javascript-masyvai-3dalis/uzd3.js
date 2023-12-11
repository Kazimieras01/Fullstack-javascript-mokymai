let pazymiai = [8, 9, 7, 10, 6];

let suma = 0;
for (const pazymys of pazymiai) {
    suma += pazymys;
}
let vidurkis = suma / pazymiai.length;
console.log('Studento pažymiai:');
for (const pazymys of pazymiai) {
    console.log(pazymys);
}
console.log(`Pažymių vidurkis: ${vidurkis}`);