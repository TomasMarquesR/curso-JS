let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

/* if (!score) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
} */


function playGame(playerMove) {
    const computerChoice = pickComputerMove();

    let result = '';

    if (playerMove === 'Scissors') {
        if (computerChoice === 'Rock') {
            result = 'You Lose!';
        } else if (computerChoice === 'Paper') {
            result = 'You Win!';
        } else if (computerChoice === 'Scissors') {
            result = 'Tie!';
        }

    } else if (playerMove === 'Paper') {
        if (computerChoice === 'Rock') {
            result = 'You Win!';
        } else if (computerChoice === 'Paper') {
            result = 'Tie!';
        } else if (computerChoice === 'Scissors') {
            result = 'You Lose!';
        }

    } else if (playerMove === 'Rock') {
        if (computerChoice === 'Rock') {
            result = 'Tie!';
        } else if (computerChoice === 'Paper') {
            result = 'You Lose!';
        } else if (computerChoice === 'Scissors') {
            result = 'You Win!';
        }
    }

    if (result === 'You Win!') {
        score.wins += 1;
    } else if (result === 'You Lose!') {
        score.losses += 1;
    } else if (result === 'Tie!') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score))

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You: <img src="images/${playerMove}-emoji.png" alt="Paper" class="move-icon"> 
            Computer: <img src="images/${computerChoice}-emoji.png" alt="Paper" class="move-icon">`;
}

function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}



function pickComputerMove() {
    const randomNumber = Math.random();

    let computerChoice = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerChoice = 'Rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerChoice = 'Paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerChoice = 'Scissors';
    }

    return computerChoice;
}