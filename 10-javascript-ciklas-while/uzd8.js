let i = Math.floor(Math.random());
let n = 1;
let suma = 0;

while (i < (Math.floor(Math.random()*10)+1)) {
    console.log(n,'-asis atsitiktinis sk.:', i);
    n++;
    suma += i;
    i = Math.floor(Math.random()*10);
}
console.log('Visų sugeneruotų sk. suma:', suma);