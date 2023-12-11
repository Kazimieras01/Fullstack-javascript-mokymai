let mėgstamiausiValgiai = ['Sriuba', 'Kiaulienos kepsniai', 'Pica', 'Sushi', 'Cezario salotos'];
console.log('Pradinis masyvas:', mėgstamiausiValgiai);

// Pridedami nauji valgiai į masyvą:
mėgstamiausiValgiai.unshift('Blynai'); // Pridėti valgį priekyje
mėgstamiausiValgiai.push('Koldūnai'); // Pridėti valgį gale
mėgstamiausiValgiai.splice(3, 0, 'Kebabas'); // Pridėti valgį per vidurį (į 3 poziciją)

// Išvedame pradinį masyvą su naujais valgiais
console.log('Pradinis masyvas su papildytais valgiais:', mėgstamiausiValgiai);

// Ištriname 3 valgius iš pasirinktų pozicijų:
mėgstamiausiValgiai.splice(0, 1); // Ištrinti valgį iš priekio
mėgstamiausiValgiai.pop(); // Ištrinti valgį iš galo
mėgstamiausiValgiai.splice(2, 1); // Ištrinti valgį iš vidurio

console.log('Galutinis masyvas po valgių ištrynimo:', mėgstamiausiValgiai);