let display = document.getElementById('display');
let date = new Date()
let year = document.getElementById("year").innerHTML = date.getFullYear();

function appendToDisplay(value) {
    display.innerHTML += value;
}

function clearDisplay() {
    display.innerHTML = '';
}

function backspace() {
    let currentDisplay = display.innerHTML;
    display.innerHTML = currentDisplay.slice(0, -1);
}

function calculateResult() {
    try {
        display.innerHTML = eval(display.innerHTML);
    } catch (error) {
        display.innerHTML = 'Error';
    }
}