let firstNumber = 0;
let secondNumber = 0;
let action = '+';
let answer = 0;


let input =document.getElementById('calc-input')
let calculationSpan = document.getElementById('calculation');

let history = [];

function onNumberClick(number) {
    if (input.value === '0') {
        input.value = '';
    }
    if (number === '.') {
        const parts = input.value.split(' ');
        const lastPart = parts[parts.length - 1];
        
        if (!lastPart.includes('.')) {
            input.value += number; // Pridėti kablelį, jei jo dar nėra paskutinėje įvesties dalyje
        }
    } else {
    input.value += number;
    }
}
function onActionClick (clickedAction) {
    const lastChar = input.value[input.value.length - 1];
    if (lastChar !== ' ' && input.value.length > 0) {
        input.value += ' ' + clickedAction + ' ';
        action = clickedAction;
    }
}
function onCountClick() {
    let inputText = input.value.replace(',', '.');
    let splitted = inputText.split (' ');
    if (splitted.length !== 3) {
        alert("Iveskite taisyklinga salyga: skaicius, veiksmas, skaicius");
        return;
    }
    firstNumber = parseFloat(splitted[0]);
    action = splitted[1];
    secondNumber = parseFloat(splitted[2]);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert("Iveskite skaiciu!");
        return;
    }

    calculateAnswer();
    input.value = answer.toString().replace('.', ',');

    calculationSpan.innerText = `${firstNumber} ${action} ${secondNumber}`;

    addToHistory();
}
function calculateAnswer() {
    switch (action) {
        case '+': answer = firstNumber + secondNumber; break;
        case '-': answer = firstNumber - secondNumber; break;
        case '*': answer = firstNumber * secondNumber; break;
        case '/': answer = firstNumber / secondNumber; break;
    }
}
function onCleanClick() {
    firstNumber = 0;
    secondNumber = 0;
    action = '+';
    answer = 0;
    input.value = '';
    calculationSpan.innerText = '';
}
function onDeleteClick() {
    let inputValue = input.value.trim();
    input.value = inputValue.slice(0, -1);
}
function addToHistory() {
    let historyItem = {
        firstNumber,
        action,
        secondNumber,
        answer
    };
    history.push(historyItem);
}
document.getElementById('show-history').onclick = function() {
    let formatted = history.slice(-5).map(x => `<p>${x.firstNumber} ${x.action} ${x.secondNumber} = ${x.answer}</p>`);
    let historyBlock = document.querySelector('.calculator .history-items');
    historyBlock.innerHTML = formatted.join('');
    historyBlock.style.display = 'block';
}
document.getElementById('hide-history').onclick = function() {
    let historyBlock = document.querySelector('.calculator .history-items');
    historyBlock.style.display = 'none';
}
document.getElementById('clear-history').onclick = function() {
    history = []; 
    let historyBlock = document.querySelector('.calculator .history-items');
    historyBlock.innerHTML = ''; 
}
