let pazymiaiRandom = [];
let pazymiuSuma = 0;
for (let i = 0; i < 9; i++) {
    let atsitiktinisPaz = Math.floor(Math.random() * 10) + 1;
    pazymiaiRandom.push(atsitiktinisPaz);
    pazymiuSuma += atsitiktinisPaz
}
console.log('Atsitiktiniai pazymiai: ', pazymiaiRandom);
console.log('Pazymiu suma: ', pazymiuSuma);
console.log('Pazymiu vidurkis: ', pazymiuSuma / pazymiaiRandom.length);