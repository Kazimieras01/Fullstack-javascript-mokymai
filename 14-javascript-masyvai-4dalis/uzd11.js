let arr = [1, 2, 3, 4, 5, 6];
let arrhalf = arr.length / 2
let newArr = [];

for (let i = 1; i <= arrhalf; i++) {
    newArr.push(arr.splice(0, 2))
}

console.log(newArr);