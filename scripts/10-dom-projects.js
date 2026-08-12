function handleCostKeydown(event) {
    if (event.key === 'Enter') {
        calculateTotal();
    }
}

function calculateTotal() {
    const inputElement = document.querySelector('.js-cost-input');
    const errorM = document.querySelector('.js-error')
    let cost = Number(inputElement.value);

    document.querySelector('.js-total-cost')
        .innerHTML = '';
    document.querySelector('.js-error')
        .innerHTML = '';


    if (cost <= 0) {
        errorM.innerHTML = 'Error: cost cannot be less than $0'
        return
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


const jsbtn = document.querySelector('.jsbtn')

console.log(jsbtn.classList.contains('jsbtn'))

/*function clickbtn(botao1, botao2, botao3) {
    const btn1 = document.querySelector(botao1)
    const btn2 = document.querySelector(botao2)
    const btn3 = document.querySelector(botao3)

    btn1.classList.remove('is-toggled')
    btn2.classList.remove('is-toggled')
    btn3.classList.remove('is-toggled')

    btn1.classList.add('is-toggled')
}*/

function clickbtn(selector) {
    const button = document.querySelector(selector);
    if (!button.classList.contains('is-toggled')) {

        turnOffPreviousButton();

        button.classList.add('is-toggled');
    } else {
        button.classList.remove('is-toggled');
    }
}

function turnOffPreviousButton() {
    const previousButton = document.querySelector('.is-toggled');
    if (previousButton) {
        previousButton.classList.remove('is-toggled');
    }
}
