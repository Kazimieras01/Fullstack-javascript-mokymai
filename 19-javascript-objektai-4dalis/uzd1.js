let imonesDuomenys = [
    {
        pavadinimas: "MB Saraskino kontora",
        amzius: 5,
        darbuotojai: 50,
        pelnas: 200000
    },
    {
        pavadinimas: "UAB Kelmas",
        amzius: 10,
        darbuotojai: 100,
        pelnas: 500000
    }
];
imonesDuomenys.forEach(ima => {
    console.log(`Imones pavadinimas: ${ima.pavadinimas}`);
    console.log(`Imones amzius: ${ima.amzius} metai`);
    console.log(`Darbuotoju skaicius: ${ima.darbuotojai}`);
    console.log(`Bendras pelnas: ${ima.pelnas} EUR`);
    console.log("-----------------------------------------");
});

let bendrasAmzius = imonesDuomenys.reduce((sum, ima) => sum + ima.amzius, 0);
let vidutinisAmzius = bendrasAmzius / imonesDuomenys.length;
console.log(`Vidutinis imoniu amzius: ${vidutinisAmzius} metai`);

let DarbuotojuSkaicius = 0;
for (const skaicius of imonesDuomenys) {
    DarbuotojuSkaicius += skaicius.darbuotojai;
}
console.log(`Bendras darbuotoju skaicius per abi imones: ${DarbuotojuSkaicius}`);

let bendrasPelnas = 0;
for (const skaicius of imonesDuomenys) {
    bendrasPelnas += skaicius.pelnas;
}
console.log(`Bendras pelnas per abi imones: ${bendrasPelnas}`);