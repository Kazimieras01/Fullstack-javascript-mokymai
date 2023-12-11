let skaiciai = [1, -1, 2, 3]
let visiTeigiami = skaiciai.every(skaicius => skaicius > 0 ) // tikrinimas ar visi masyvo elementai atitinka funkcija
console.log('visi skaiciai teigiami',visiTeigiami);
let yraTeigiami = skaiciai.some(skaicius => skaicius > 0 ) // tikrinimas ar yra elementu kurie atitinka funkcija
console.log('yra teigiamu skaiciu',yraTeigiami);