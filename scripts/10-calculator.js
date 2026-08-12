let calculation = localStorage.getItem('calculation') || ' ';

displayCalculation();

function updateCalculation(value) {
    calculation += value;
    displayCalculation();
    saveCalculation();
}

function saveCalculation() {
    localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
    document.querySelector('.js-calculation').
        innerHTML = calculation;
}