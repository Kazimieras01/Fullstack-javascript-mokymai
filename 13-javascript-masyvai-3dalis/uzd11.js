const zodziai = ['obuolys', 'kate', 'kede', 'miegas', 'uola', 'medis', 'saule', 'aukstas'];

const trumpiZodziai = [];

for (const zodis of zodziai) {
  if (zodis.length < 5) {
    trumpiZodziai.push(zodis);
  }
}

console.log('Pradiniai duomenys:', zodziai);

console.log('Atrinkti trumpi žodžiai:', trumpiZodziai);