let skaiciai = [1,2,3,8];
// for of ciklas
for (let skaicius of skaiciai) {
    if (skaicius % 2 == 0) {
        console.log(skaicius, 'lyginis')
    } else {
        console.log(skaicius,'nelyginis')
     }
}
console.log(); // trapas
// function
skaiciai.forEach(function (skaicius) {
    if (skaicius % 2 == 0) {
        console.log(skaicius,'lyginis')
    } else {
        console.log(skaicius,'nelyginis')
    }
});
console.log(); // tarpas
// paprastesne versija
skaiciai.forEach(skaicius => {
    if (skaicius % 2 == 0) {
       console.log(skaicius, 'lyginis')
    } else {
       console.log(skaicius, 'nelyginis')
    }
});
console.log(); //tarpas
// pati paprasciausia versija
let sk = 5
console.log(sk, sk % 2 == 0 ? 'lyginis' : 'nelyginis')
sk = 4
console.log(sk, sk % 2 == 0 ? 'lyginis' : 'nelyginis')
// KLAUSIMAS ? KA_DARYTI_TIESOS_ATVEJU : KA_DARYTI_NETIESOS_ATVEJU
console.log(); //tarpas
// taspats kodas per viena eilute
skaiciai.forEach(skaicius => console.log(skaicius, skaicius % 2 == 0 ? 'lyginis' : 'nelyginis'));
skaiciai.forEach(sk => console.log(sk, sk * 2));