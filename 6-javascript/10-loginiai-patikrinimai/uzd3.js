let rezultatas1 = 7;
let rezultatas2 = 8;
let rezultatas3 = 9;

let vidurkis = (rezultatas1 + rezultatas2 + rezultatas3) / 3;

console.log(`Pažymių vidurkis yra: ${vidurkis}`);

if (vidurkis >= 8 && vidurkis <= 10) {
  console.log('Gautas vidurkis yra [8-10].');
} else if (vidurkis >= 5 && vidurkis < 8) {
  console.log('Gautas vidurkis yra [5-8).');
} else if (vidurkis < 5) {
  console.log('Gautas vidurkis yra mažesnis nei 5.');
} else {
  console.log('Vidurkis nepatenka į jokį nurodytą intervalą.');
}