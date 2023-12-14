function arPirminis(sk) {
    if (sk < 2) {
        return false; // Skaičius mažesnis nei 2 negali būti pirminis
    }

    for (let i = 2; i <= Math.sqrt(sk); i++) {
        if (sk % i === 0) {
            return false; // Jei skaičius dalijasi be liekanos iš daliklio, tai nėra pirminis skaičius
        }
    }

    return true; // Jei skaičius neturi daliklių, išskyrus 1 ir patį save, tai yra pirminis skaičius
}

// Ciklas nuo 2 iki 15, kiekvienoje iteracijoje tikriname ar skaičius yra pirminis
for (let skaicius = 2; skaicius <= 15; skaicius++) {
    let pirminis = arPirminis(skaicius);
    console.log(`${skaicius} ${pirminis}`);
}