function maziausiasDaliklis(sk) {
    let maziausias = sk; 

    for (let i = 2; i <= sk / 2; i++) {
        if (sk % i === 0) {
            maziausias = i; 
            break; 
        }
    }
    return maziausias;
}

for (let skaicius = 10; skaicius <= 30; skaicius++) {
    let maziausias = maziausiasDaliklis(skaicius);
    console.log(`Skaičiaus ${skaicius} mažiausias daliklis yra ${maziausias}`);
}