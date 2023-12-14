function isvestiStudentoInformacija(pažymiųMasyvas, vardas, pavardė) {
    console.log(`Studento vardas: ${vardas}`);
    console.log(`Studento pavardė: ${pavardė}`);
    console.log("Studento pažymiai:");

    let sum = 0;
    for (let i = 0; i < pažymiųMasyvas.length; i++) {
        console.log(`Pažymys ${i + 1}: ${pažymiųMasyvas[i]}`);
        sum += pažymiųMasyvas[i];
    }

    const vidurkis = sum / pažymiųMasyvas.length;
    console.log(`Vidurkis: ${vidurkis.toFixed(2)}`);
}

let studentoVardas = "Jonas";
let studentoPavarde = "Jonaitis";
let pazymiuMasyvas = [8, 9, 7, 10, 6];

isvestiStudentoInformacija(pazymiuMasyvas, studentoVardas, studentoPavarde);