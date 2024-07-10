/*
ALGORITHM
press one number and save it somewhere
press operator and save it some where
press second number and save it somewhere
press equal sign to calculate
*/
let firstNumber;
let secondNumber;
let step = 0;
let firstArr = [];
let secondArr = []
let operation;
function getNumber(number) {
    if(step == 0 || step ==1){
        firstArr.push(number)
        step = 1
        firstNumber = Number(firstArr.join(''))
        input.value = firstNumber
    } else{
        secondArr.push(Number(number))
        secondNumber = Number(secondArr.join(''))
        input.value = secondNumber
    }
}
function getOperator(operator) {
    step = 2
    operation = operator
};
function clearDisplay() {
    input.value = 0;
    firstNumber = null;
    secondNumber = null;
    step = 0
    firstArr = []
    secondArr = []
}
function sum() {
    if(operation === '+'){
        let sum = firstNumber + secondNumber
        input.value = sum
    } else if(operation === '-'){
        let sum = firstNumber - secondNumber
        input.value = sum
    } else if(operation === '/'){
        let sum = firstNumber / secondNumber
        input.value = sum
    } else if(operation === '*'){
        let sum = firstNumber * secondNumber
        input.value = sum
    }
}



const input = document.querySelector('#input');
function displayOnScreen(value){
    input.value += value
};
function calculate(){
    input.value = eval(input.value);
}
function clearButton(){
    input.value = ''
};
console.log(input.value);
function calc(operator, a, b) {
    if (operator === 'add'){
        return +a + +b
    } else if (operator === 'sub'){
        return +a - +b
    }
}