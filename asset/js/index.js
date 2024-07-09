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