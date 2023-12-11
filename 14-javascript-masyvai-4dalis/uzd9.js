let array = ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiauliai'];
let city = 'Klaipėda';
let position = array.indexOf(city)+1;
console.log(`Reikšmės "${city}" pozicija masyve: ${position} (techniškai ${position-1})`);