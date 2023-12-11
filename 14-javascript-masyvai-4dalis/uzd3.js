// Sukuriame masyvą su bet kokiais žodžiais
let zodziai = ['Obuolys', 'Katinas', 'Stalas', 'Miegas', 'Rytas', 'Medis', 'Saule', 'Aukstas'];

// Jungiame masyvo elementus į teksto eilutę naudodami skirtingus skirtukus
let tekstasSuTarpu = zodziai.join(' '); // Jungimas su tarpu
let tekstasSuKableliais = zodziai.join(', '); // Jungimas su kableliu ir tarpais
let tekstasSuBruksniais = zodziai.join('-'); // Jungimas su brūkšniais

// Išvedame sujungtus tekstus
console.log('Jungiant su tarpu:', tekstasSuTarpu);
console.log('Jungiant su kableliais:', tekstasSuKableliais);
console.log('Jungiant su brūkšniais:', tekstasSuBruksniais);