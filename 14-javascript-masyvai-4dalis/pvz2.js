let zodziai = ['Obuolys', 'Bananas', 'Kriaušė', 'Slyva', 'Slyva'];
if (zodziai.includes('Bananas')) {
    console.log('bananas yra indekse', zodziai.indexOf('Bananas'))
  }
let indeksas = zodziai.indexOf('nera')
if (indeksas != -1) {
    console.log('zodis rastas indekse', indeksas)
  } else {
    console.log('zodzio ,nera" nepavyko rasti masyve')
  }
let = paskutinisRastasIndeksas = zodziai.lastIndexOf ('Slyva')
console.log('Paskutinis slyvos indeksas:', paskutinisRastasIndeksas);