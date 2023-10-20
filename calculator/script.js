let displayValue = '0';

function updateDisplay() {
    document.getElementById('result').textContent = displayValue;
}

function appendToDisplay(val) {
    if (displayValue === '0' && val !== '.') {
        displayValue = val;
    } else {
        displayValue += val;
    }
    updateDisplay();
}

function clearDisplay(val) {
    if (val === 'AC') {
        displayValue = '0';
    }
    updateDisplay();
}

function deleteLastCharacter(val) {
    if (val === 'DEL') {
        displayValue = displayValue.slice(0, -1);
        if (displayValue === '') {
            displayValue = '0';
        }
    }
    updateDisplay();
}

function calculateResult(val) {
    if (val === '=') {
        try {
            displayValue = eval(displayValue).toString();
        } catch (error) {
            displayValue = 'Error';
        }
    }
    updateDisplay();
}

updateDisplay();
function appendToDisplay(val) {
    if (displayValue === '0' && val !== '.') {
        displayValue = val;
    } else {
        displayValue += val;
    }
    updateDisplay();
}

function calculateResult(val) {
    if (val === '=') {
        try {
            // Replace percentage symbol with '*0.01' for calculation
            displayValue = eval(displayValue.replace(/%/g, '*0.01')).toString();
        } catch (error) {
            displayValue = 'Error';
        }
    }
    updateDisplay();
}
function calculateResult(val) {
    if (val === '=') {
        try {
            // Replace '^' symbol with '**' for calculation
            displayValue = displayValue.replace(/\^/g, '**');
            displayValue = eval(displayValue).toString();
        } catch (error) {
            displayValue = 'Error';
        }
    }
    updateDisplay();
}