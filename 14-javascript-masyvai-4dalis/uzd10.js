let array = [1, 2, 3, 4, 2];

for (let item of array) {
    if (array.indexOf(item) != array.lastIndexOf(item)) {
        console.log('Masyve yra dublikatų, kaip pvz,:', item);
        break;
    }
}