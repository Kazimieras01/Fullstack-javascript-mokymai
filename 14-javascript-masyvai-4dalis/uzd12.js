let zodis = '01310';

let isskleistasZodis = [...zodis];
let atvirksciaiSurikiuotiSk = isskleistasZodis.slice().reverse();

let tekstas1 = isskleistasZodis.join(', ');
let tekstas2 = atvirksciaiSurikiuotiSk.join(', ');


if (tekstas1 === tekstas2) {
    console.log("Skaicius yra palindrominis");
} else {
    console.log("skaicius nera palindrominis");
}