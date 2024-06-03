const calculatorScreen = document.querySelector('#calculator-screen');
const keys = document.querySelector('.calculator-keys');

keys.addEventListener('click', (event) => {
    const { target } = event;
    const { value } = target;

    if (!target.matches('button')) {
        return;
    }

    switch (value) {
        case '=':
            calculate();
            break;
        case 'all-clear':
            resetCalculator();
            break;
        case 'del':
            del();
            break;
        default:
            input(value);
            break;
    }

    updateDisplay();
});


function del() {

    if (calculatorScreen.value === "Error") {
        calculatorScreen.value = "0";
    } else {
        calculatorScreen.value = calculatorScreen.value.substring(0, calculatorScreen.value.length - 1);
    }


}

function input(value) {
    if (calculatorScreen.value === '0') {
        calculatorScreen.value = value;
    } else {
        calculatorScreen.value += value;
    }
}

function calculate() {
    try {
        calculatorScreen.value = eval(calculatorScreen.value);
    } catch {
        calculatorScreen.value = 'Error';
    }
}

function resetCalculator() {
    calculatorScreen.value = '0';
}

function updateDisplay() {
    calculatorScreen.value = calculatorScreen.value;
}
