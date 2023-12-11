let set = [3,5,7,9,5,7,1,8,9];
console.log(set.every(x => x >= 0) && set.some(x => x % 2 == 0));