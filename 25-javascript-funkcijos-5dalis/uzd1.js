function sum(array) {
    i = 0;
    for (let number of array) {
        i += number;
    }
    return i;
}
const arr = [54,16,51,97,81]
const arr1 = [19,15,13]

const sum1 = sum(arr);
const sum2 = sum(arr1);

console.log(`Pirmo masyvo suma: ${sum1}`);
console.log(`Antro masyvo suma: ${sum2}`);
if (sum1 > sum2) {
    console.log(`Didžiausia suma yra pirmojo masyvo suma: ${sum1}`);
} else if (sum1 < sum2) {
    console.log(`Didžiausia suma yra antrojo masyvo suma: ${sum2}`);
} else {
    console.log('Abiejų masvyų sumos yra lygios.');
}