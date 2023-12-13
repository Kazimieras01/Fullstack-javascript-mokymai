let ligoninesDuomenys = [
    {
        pavadinimas: "Vilniaus universitetinė ligoninė",
        adresas: "Saulėtekio al. 2, Vilnius",
        lankytojai: 5000,
        darbuotojai: 1200
    },
    {
        pavadinimas: "Kauno klinikinė ligoninė",
        adresas: "Eivenių g. 2, Kaunas",
        lankytojai: 4000,
        darbuotojai: 900
    },
];

for (const ligonine of ligoninesDuomenys) {
    console.log(`Ligonines pavadinimas: ${ligonine.pavadinimas}`);
    console.log(`Adresas: ${ligonine.adresas}`);
    console.log("-----------------------------------------");
}

let LankytojuSkaicius = 0;
let DarbuotojuSkaicius = 0;

for (const ligonine of ligoninesDuomenys) {
    LankytojuSkaicius += ligonine.lankytojai;
    DarbuotojuSkaicius += ligonine.darbuotojai;
}

console.log(`Bendras lankytoju skaicius per abi ligonines: ${LankytojuSkaicius}`);
console.log(`Bendras darbuotoju skaicius per abi ligonines: ${DarbuotojuSkaicius}`);

let vidutinisDarbuotojuSkaicius = DarbuotojuSkaicius / ligoninesDuomenys.length;
console.log(`Vidutinis darbuotoju skaicius per abi ligonines: ${vidutinisDarbuotojuSkaicius}`);