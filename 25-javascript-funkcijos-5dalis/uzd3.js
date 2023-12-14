function arVisiTeigiami(pazymiuMasyvas) {
    for (let pazymys of pazymiuMasyvas) {
        if (pazymys < 4) {
            return false;
        }
    }
    return true;
}

function konvertuotiTekstu(rezultatas) {
    return rezultatas ? 'visi studento pažymiai teigiami' : 'studentas turi bent vieną neigiamą pažymį';
}

const pazymiai1 = [8, 9, 7, 6, 8];
const pazymiai2 = [10, 9, 4, 7, 5];

const rezultatas1 = arVisiTeigiami(pazymiai1);
const rezultatas2 = arVisiTeigiami(pazymiai2);

console.log(konvertuotiTekstu(rezultatas1));
console.log(konvertuotiTekstu(rezultatas2));