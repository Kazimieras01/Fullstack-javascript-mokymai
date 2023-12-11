let n = 100; //kiek norime išvesti fibonači skaičių

let old = 0;
let oldold = 1;

for (let i=1; i<=n; i++) {
    sum = old + oldold;    
    oldold = old;
    old = sum;
    console.log(`${i}-sis fibonači sk.:\t`, sum);
}