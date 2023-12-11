let set = ['bananas', 'obelis', 'automobilis'];
console.log(set.map(x => (x.toLowerCase()).split('').filter(y => y == 'a').length).reduce((sum, z) => sum + z));