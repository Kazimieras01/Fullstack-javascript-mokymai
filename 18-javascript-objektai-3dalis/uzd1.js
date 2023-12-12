let knygos = [
    {pavadinimas:'Lord of the rings', kaina: 20,},
    {pavadinimas:'Vienolis kuris pardavė savo ferarį', kaina: 12,},
    {pavadinimas:'Gyvulių ūkis', kaina: 16,},

];


knygos.push({pavadinimas:'Raudona kepuraitė', kaina: 5,})
knygos.push({pavadinimas:'Kakė-makė', kaina: 9,})
knygos.push({pavadinimas:'Dievas visada keliauja inkognito', kaina: 11,})
console.log(knygos);

for(knyga of knygos){
    console.log(knyga.pavadinimas);
}
console.log('Pirma knyga yra:',knygos[0].pavadinimas);
console.log('Penktos knygos',knygos[4].pavadinimas,'kaina yra:',knygos[4].kaina,'eurų');