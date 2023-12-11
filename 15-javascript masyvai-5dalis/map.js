let skaiciai = [1,2,3,4]
let dvigubi = skaiciai.map(sk => sk * 2)
console.log('skaiciai kvadratu', dvigubi);

let trigubi = skaiciai.map(sk => Math.pow(sk, 3)) 
console.log('skaiciai kubu',trigubi);

let vardai = ['Jonas', 'Onute', 'Petras', 'Birute']
let vardoPirmaRaide = vardai.map(vardas => vardas[0])
console.log(vardoPirmaRaide);

let varduIlgiai = vardai.map(vardas => vardas.length)
console.log(varduIlgiai);


let amziai = [34, 10, null, 78, null, 32]
let amzius = amziai.map(amzius => {if (amzius != null) {return amzius} else {return 0}});
console.log(amzius);