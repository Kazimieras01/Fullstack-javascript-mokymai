let a = 3
let b = 5
let c = 8 
if (a===b) {
    console.log(`lygus`);
} else if (a===c) {
    console.log(`${a} yra lygus ${c}`);
} else if (c>a) {
    console.log(`${c} yra didesnis uz ${a}`);
} else if (b===(c*2)) {
    console.log(`${b} lygus dvigubai skaičiaus ${c} reikšmei`)
} else if (a%3===0) {
    console.log(`${a} dalinasi is 3`)
} else {
    console.log (`klaida`)
}