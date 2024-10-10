const display = document.getElementById('display');
let currentValue = '';

function displayValueUpdate(value) {
    display.value = value;
}

function onButtonClick(value) {
    switch (value) {
        case 'AC':
            currentValue = '';
            displayValueUpdate(currentValue);
            break;
        case 'DEL':
            currentValue = currentValue.slice(0, -1);
            displayValueUpdate(currentValue);
            break;
        case '=':
            try {
                currentValue = eval(currentValue).toString();
                displayValueUpdate(currentValue);
            } catch (error) {
                displayValueUpdate('Error');
                currentValue = '';
            }
            break;
        default:
            currentValue += value;
            displayValueUpdate(currentValue);
            break;
    }
}

document.getElementById('ac').addEventListener('click', () => onButtonClick('AC'));
document.getElementById('del').addEventListener('click', () => onButtonClick('DEL'));
document.getElementById('percent').addEventListener('click', () => onButtonClick('%'));
document.getElementById('divide').addEventListener('click', () => onButtonClick('/'));
document.getElementById('seven').addEventListener('click', () => onButtonClick('7'));
document.getElementById('eight').addEventListener('click', () => onButtonClick('8'));
document.getElementById('nine').addEventListener('click', () => onButtonClick('9'));
document.getElementById('multiply').addEventListener('click', () => onButtonClick('*'));
document.getElementById('four').addEventListener('click', () => onButtonClick('4'));
document.getElementById('five').addEventListener('click', () => onButtonClick('5'));
document.getElementById('six').addEventListener('click', () => onButtonClick('6'));
document.getElementById('add').addEventListener('click', () => onButtonClick('+'));
document.getElementById('one').addEventListener('click', () => onButtonClick('1'));
document.getElementById('two').addEventListener('click', () => onButtonClick('2'));
document.getElementById('three').addEventListener('click', () => onButtonClick('3'));
document.getElementById('subtract').addEventListener('click', () => onButtonClick('-'));
document.getElementById('doubleZero').addEventListener('click', () => onButtonClick('00'));
document.getElementById('zero').addEventListener('click', () => onButtonClick('0'));
document.getElementById('decimal').addEventListener('click', () => onButtonClick('.'));
document.getElementById('equals').addEventListener('click', () => onButtonClick('='));
