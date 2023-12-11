let pazymiai = [7, 4, 8, 7, 9, 6, 2, 5];

let kiek_neigiamu = 0;

for (const paz of pazymiai) {
    if (paz<5) {
        kiek_neigiamu++;
    }
}

console.log('neigiamu pazymiu kiekis:', kiek_neigiamu);