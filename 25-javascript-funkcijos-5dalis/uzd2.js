function ilgiausiasZodis(zodziuMasyvas) {
    let ilgiausias = '';
    for (let zodis of zodziuMasyvas) {
        if (zodis.length > ilgiausias.length) {
            ilgiausias = zodis;
        }
    }
    return ilgiausias;
}

const zodziuMasyvas = ['Obuolys', 'Bananas', 'Kriaušė', 'Spanguolė', 'Mandarinas'];

const ilgiausias = ilgiausiasZodis(zodziuMasyvas);
console.log(`Ilgiausias žodis masyve: ${ilgiausias}`);
console.log(`Ilgis: ${ilgiausias.length}`);