let a = [1, 7, 2, 3, 4];
let b = [2, 3, 5, 6, 7];

for (let item of a) {
    if (b.indexOf(item) > -1) {
        console.log('Abiejuose masyvuose yra vertė:', item);
    }
}