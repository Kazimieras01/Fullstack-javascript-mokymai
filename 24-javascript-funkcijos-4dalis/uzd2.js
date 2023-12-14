function generuotiAtsitiktiniSkaiciu() {
    return Math.floor(Math.random() * 100); // Sugeneruojamas atsitiktinis skaičius nuo 0 iki 99
}

// Iškviečiame funkciją kelis kartus ir išvedame gautus atsakymus
for (let i = 0; i < 5; i++) {
    let atsitiktinisSkaicius = generuotiAtsitiktiniSkaiciu();
    console.log("Atsitiktinis skaičius:", atsitiktinisSkaicius);
}