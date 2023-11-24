// Susikurkite skaičiaus kintamąjį. Atlikite šiuos patikrinimus ir veiksmus:
let skaicius = 20;
// Jei skaičius dalinasi iš 5, tuomet išveskite šio skaičiaus daugybos lentelę nuo 1 iki 5.
if (skaicius % 5 === 0) {
    console.log(`skaiciaus ${skaicius} daugybos lentele nuo 1 iki 5:`);
    console.log(`${skaicius} * 1 = ${skaicius * 1}`)
    console.log(`${skaicius} * 2 = ${skaicius * 2}`)
    console.log(`${skaicius} * 3 = ${skaicius * 3}`)
    console.log(`${skaicius} * 4 = ${skaicius * 4}`)
    console.log(`${skaicius} * 5 = ${skaicius * 5}`)
}
// Jei skaičius lyginis, tuomet išveskite šį skaičių, jo kvadratą ir jį padalintą iš 2.
if (skaicius % 2 === 0) {
    console.log(skaicius);
    console.log(`kvadratas:`, skaicius*skaicius);
    console.log(`kvadratas padalintas is 2:`, (skaicius*skaicius)/2);
}
// Jei skaičius nesidalina iš 7, tuomet susikurkite antrąjį kintamąjį, išveskite šių dviejų skaičių sumą, skirtumą, sandaugą, dalmenį.
if (skaicius % 7 !== 0) {
    let skaicius2 = 3;
    console.log('suma:', skaicius+skaicius2);
    console.log('skirtumas:', skaicius-skaicius2);
    console.log('sandauga:', skaicius*skaicius2);
    console.log('dalmuo:', skaicius/skaicius2);
}
