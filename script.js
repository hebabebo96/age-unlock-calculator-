document.getElementById('btn-login').addEventListener('click', function() {
    const ageInput = document.getElementById('age-input').value;
    const errorElement = document.getElementById('age-error');

    if (ageInput === "" || parseInt(ageInput) <= 18) {
        errorElement.innerText =  "Sorry...under age";
    } else {
        document.getElementById('welcome-msg').innerText = "آلة حاسبة لمن عمرهم " + ageInput + " سنة";
        document.getElementById('age-section').style.display = 'none';
        document.getElementById('calc-section').style.display = 'block';
    }
});

const display = document.getElementById('display');

function appendValue(val) {
    display.value = display.value + val;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    if (display.value !== '') {
        try {
            const result = Function('"use strict";return (' + display.value + ')')();
            display.value = result;
        } catch (error) {
            display.value = 'erro';
        }
    }
}
