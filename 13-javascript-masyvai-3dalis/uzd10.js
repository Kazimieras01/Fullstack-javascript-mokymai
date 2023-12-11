const studentas1 = [8, 7, 9, 6, 8];
const studentas2 = [9, 8, 8, 7, 9];

const skaiciuotiVidurki = (pazymiai) => {
  let suma = 0;
  for (const pazymys of pazymiai) {
    suma += pazymys;
  }
  return suma / pazymiai.length;
};

const vidurkisStudentas1 = skaiciuotiVidurki(studentas1);
const vidurkisStudentas2 = skaiciuotiVidurki(studentas2);

console.log('Studentas 1 pažymiai:', studentas1.join(', '));
console.log('Studentas 1 vidurkis:', vidurkisStudentas1.toFixed(2));

console.log('\nStudentas 2 pažymiai:', studentas2.join(', '));
console.log('Studentas 2 vidurkis:', vidurkisStudentas2.toFixed(2));

if (vidurkisStudentas1 > vidurkisStudentas2) {
  console.log('\nStudentas 1 turi didesnį vidurkį.');
} else if (vidurkisStudentas2 > vidurkisStudentas1) {
  console.log('\nStudentas 2 turi didesnį vidurkį.');
} else {
  console.log('\nAbu studentai turi vienodus vidurkius.');
}