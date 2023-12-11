let a = [1, 2, 3, 4];
let b = [2, 3, 5, 6];
let c = [];

for (let item of (a.concat(b))) {
    if (c.indexOf(item) == -1) {
        c.push(item)
    } else {
        console.log('Kartojasi... praleidžiame:', item);
    }
}

console.log(c);