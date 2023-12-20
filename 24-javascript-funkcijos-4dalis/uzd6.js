function sum(a, b) {return a+b;}
function sum3(a,b,c) {return a+b+c;}
function minus(a,b) {return a-b;}
function times(a,b) {return a*b;}
function split(a,b) {return a/b;}
function randomcount(qty) {
    let numbers = [];
    for (let i = 0; i<qty; i++) {
        numbers.push(Math.floor(Math.random() * 100) +1)
    }
    for (let i = 0; i < numbers.length - 2; i++) {
        let result = sum3(numbers[i], numbers[i + 1], numbers[i + 2]);
        let result1 = sum(numbers[i], numbers[i + 1]);
        let result2 = minus(numbers[i], numbers[i + 1]);
        let result3 = times(numbers[i], numbers[i + 1]);
        let result4 = split(numbers[i], numbers[i + 1]);

        console.log(`${numbers[i]} + ${numbers[i + 1]} + ${numbers[i + 2]} = ${result}`);
        console.log(`${numbers[i]} + ${numbers[i + 1]} = ${result1}`);
        console.log(`${numbers[i]} - ${numbers[i + 1]} = ${result2}`);
        console.log(`${numbers[i]} * ${numbers[i + 1]} = ${result3}`);
        console.log(`${numbers[i]} / ${numbers[i + 1]} = ${result4}`);
        console.log('-----------------------');
    }
}
randomcount(5);