const button = document.querySelector('.js-button-select');
console.log(button.classList.contains('js-button-select'));

function handleCostKeydown(event) {
    if (event.key === 'Enter') {
        calculateTotal();
    }
}

function calculateTotal() {
    const inputElement = document.querySelector('.js-cost-input');
    let cost = Number(inputElement.value);

    document.querySelector('.js-total-cost')
        .innerHTML = '';
    document.querySelector('.js-error-message')
        .innerHTML = '';

    if (cost < 0) {
        document.querySelector('.js-error-message')
            .innerHTML = 'Error: cost cannot be less than $0';

        return;
    }
    if (cost < 40) {
        cost = cost + 10;
    }

    document.querySelector('.js-total-cost')
        .innerHTML = `$${cost}`
}

function subscribe() {
    const buttonElement = document.querySelector('.js-subscribe-button');

    if (buttonElement.innerText === 'Subscribe') {
        buttonElement.innerHTML = 'Subscribed';
        buttonElement.classList.add('is-subscribed');
    } else {
        buttonElement.innerHTML = 'Subscribe';
        buttonElement.classList.remove('is-subscribed');
    }
}

function gaming(selector) {
    const gamingElement = document.querySelector(selector);

    if (!gamingElement.classList.contains('is-toggled')) {
        turnOffPrevius();

        gamingElement.classList.add('is-toggled');
    } else {
        gamingElement.classList.remove('is-toggled');
    }

}

function turnOffPrevius() {
    const previousButton = document.querySelector('.is-toggled');

    if (previousButton) {
        previousButton.classList.remove('is-toggled');
    }
}