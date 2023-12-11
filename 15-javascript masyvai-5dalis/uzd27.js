let set = ['Tomas 34', 'Jonas 20', 'Gintarė 40', 'Inga 24'];
console.log(set.map(x => parseInt(x.split(' ')[1])).reduce((sum, x) => sum + x));