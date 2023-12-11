const pazymiai = [];

// Užpildomas masyvas atsitiktinai sugeneruotais pažymiais (nuo 1 iki 10)
const studentoPazymiaiCount = 10; // Pažymių skaičius
for (let i = 0; i < studentoPazymiaiCount; i++) {
  const randomPazymys = Math.floor(Math.random() * 10) + 1; // Sugeneruojamas atsitiktinis pažymys nuo 1 iki 10
  pazymiai.push(randomPazymys);
}

// Skaičiuojamas vidurkis
const vidurkis = pazymiai.reduce((total, pazymys) => total + pazymys, 0) / pazymiai.length;

// Skaičiuojamas neigiamų pažymių kiekis (mažesnių nei 5)
const neigiamiPazymiai = pazymiai.filter(pazymys => pazymys < 5).length;

// Išvedami visi teigiami pažymiai
const teigiamiPazymiai = pazymiai.filter(pazymys => pazymys >= 5);

// Išvedama informacija
console.log('Visi teigiami pažymiai:', teigiamiPazymiai.join(', '));
console.log('Vidurkis:', vidurkis.toFixed(2));
console.log('Neigiamų pažymių kiekis (mažesnių nei 5):', neigiamiPazymiai);