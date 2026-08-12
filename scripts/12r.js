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

let isAutoPlaying = false
let intervalId

//const autoPlay = () =>{

//}

document.querySelector('.auto-play-button')
    .addEventListener('click', () => {
        autoPlay()
    })

document.body.addEventListener('keydown', event => {
    if (event.key === 'a') {
        autoPlay()
    }
})

function autoPlay() {
    if (!isAutoPlaying) {
        intervalId = setInterval(() => {
            const playerMove = pickComputerMove()
            playGame(playerMove);
        }, 1000)
        isAutoPlaying = true

        document.querySelector('.auto-play-button')
            .innerHTML = 'Stop Finish'

    } else {
        clearInterval(intervalId)
        isAutoPlaying = false
        document.querySelector('.auto-play-button')
            .innerHTML = 'Auto Play'
    }

}

document.querySelector('.js-rock-button')
    .addEventListener('click', () => {
        playGame('Rock')
    })

document.querySelector('.js-scissors-button')
    .addEventListener('click', () => {
        playGame('Scissors')
    })

document.querySelector('.js-paper-button')
    .addEventListener('click', () => {
        playGame('Paper')
    })

document.body.addEventListener('keydown', event => {
    if (event.key === 'r') {
        playGame('Rock')
    } else if (event.key === 'p') {
        playGame('Paper')
    } else if (event.key === 's') {
        playGame('Scissors')
    } else if (event.key === ' ') {
        confirmReset()
    }
})


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

document.querySelector('.reset-score-button')
    .addEventListener('click', () => {
        confirmReset()
    })


function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;

    localStorage.removeItem('score')

    updateScoreElement();
}

function confirmReset() {
    document.querySelector('.confirm-button')
        .innerHTML = `
        <div>
            Are you sure you want to reset the score?
            <button class="reset-yes">Yes</button>
            <button class="reset-no">No</button>
        </div>`

    document.querySelector('.reset-yes')
        .addEventListener('click', () => {
            resetScore()

            document.querySelector('.confirm-button')
                .innerHTML = ' '
        })

    document.querySelector('.reset-no')
        .addEventListener('click', () => {
            document.querySelector('.confirm-button')
                .innerHTML = ' '
        })

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