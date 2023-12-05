let suma = 0;
for (let i = 0; i < 1000; i++) {
    if (i%3==0 || i%5==0) { suma+=i};
}
console.log('skaiciu nuo 0 iki 1000 kurie dalinasi is 3 arba 5 suma yra:',suma);