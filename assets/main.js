const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playBtn = document.getElementById('button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        })
    }

    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const compHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            })
        })

        const compOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function(){
                const compNumber = Math.floor(Math.random() * 3);
                const computerChoice = compOptions[compNumber];

                playerHand.src = 'assets/rock.png';
                compHand.src = 'assets/rock.png';

                setTimeout(() => {
                    compareHand(this.textContent, computerChoice);
                    playerHand.src = `assets/${this.textContent}.png`;
                    compHand.src = `assets/${computerChoice}.png`;
                }, 700);
                
                playerHand.style.animation = 'shakeP 0.8s ease';
                compHand.style.animation = 'shakeC 0.8s ease';
            })
        })
    }

    const update = () => {
        const playerScore = document.querySelector('.player-score');
        const computerScore = document.querySelector('.computer-score');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHand = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');
        if(playerChoice === computerChoice){
            winner.textContent = 'Tie';
            return;
        }
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'You win!';
                pScore++;
                update();
                return;
            } else {
                winner.textContent = 'Computer wins!';
                cScore++;
                update();
                return;
            }
        }
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer wins!';
                cScore++;
                update();
                return;
            } else {
                winner.textContent = 'You win!';
                pScore++;
                update();
                return;
            }
        }
        
        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer wins!';
                cScore++;
                update();
                return;
            } else {
                winner.textContent = 'You win!';
                pScore++;
                update();
                return;
            }
        }
    }

    startGame();
    playMatch();
}
game();

document.querySelector('.restart').addEventListener('click', () => {
    location.reload()
})