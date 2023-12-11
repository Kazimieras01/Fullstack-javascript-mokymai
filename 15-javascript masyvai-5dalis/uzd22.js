let set = [1, 2, 3, 4, 5];
console.log(set.filter(x => x%2==0).reduce((sum, x) => sum + x));