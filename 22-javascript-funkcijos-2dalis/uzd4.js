// Funkcija sumai skaičiuoti
function suma(a, b) {
    const rezultatas = a + b;
    console.log(`${a} + ${b} = ${rezultatas}`);
    return rezultatas;
}

// Funkcija skirtumui skaičiuoti
function skirtumas(a, b) {
    const rezultatas = a - b;
    console.log(`${a} - ${b} = ${rezultatas}`);
    return rezultatas;
}

// Funkcija sandaugai skaičiuoti
function sandauga(a, b) {
    const rezultatas = a * b;
    console.log(`${a} * ${b} = ${rezultatas}`);
    return rezultatas;
}

// Funkcija dalmeniui skaičiuoti
function dalyba(a, b) {
    const rezultatas = a / b;
    console.log(`${a} / ${b} = ${rezultatas}`);
    return rezultatas;
}

// Funkcija, kuri sugeneruoja du atsitiktinius skaičius ir iškviečia kitas 4 funkcijas
function skaiciuGeneratoriusIrVeiksmai() {
    const pirmasSkaicius = Math.floor(Math.random() * 100) + 1;
    const antrasSkaicius = Math.floor(Math.random() * 100) + 1;

    console.log(`Pirmas sugeneruotas skaičius: ${pirmasSkaicius}`);
    console.log(`Antras sugeneruotas skaičius: ${antrasSkaicius}`);

    suma(pirmasSkaicius, antrasSkaicius);
    skirtumas(pirmasSkaicius, antrasSkaicius);
    sandauga(pirmasSkaicius, antrasSkaicius);
    dalyba(pirmasSkaicius, antrasSkaicius);
}

// Iškviečiame bendrąją funkciją kelis kartus
for (let i = 0; i < 3; i++) {
    console.log(`Skaičių generavimo ir veiksmų atlikimo nr. ${i + 1}:`);
    skaiciuGeneratoriusIrVeiksmai();
    console.log("-----------------------------------------");
}