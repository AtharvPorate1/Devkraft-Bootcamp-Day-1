// Select all elements with the class "card"
const cards = document.querySelectorAll('.card');

const rock = document.querySelector('#user-rock');
const paper = document.querySelector('#user-paper');
const scissors = document.querySelector('#user-scissors');

const compRock = document.querySelector('#computer-rock');
const compPaper = document.querySelector('#computer-paper');
const compScissors = document.querySelector('#computer-scissors');

//code for moving the cards
const moveUpCard = (card) => {
    card.classList.add('move-up'); // Add the class for moving up

    // Set a timeout to remove the class after 1 second (adjust as needed)
    setTimeout(() => {
        card.classList.remove('move-up');
    }, 1000);
}

const moveDownCard = (card) => {
    card.classList.add('move-down'); // Add the class for moving down

    // Set a timeout to remove the class after 1 second (adjust as needed)
    setTimeout(() => {
        card.classList.remove('move-down');
    }, 1000);
}




const computerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const selectRock = () => {
    const computerMove = computerChoice();
    if (computerMove === 'rock') {
        console.log('tie', computerChoice);
    } else if (computerMove === 'paper') {
        console.log('lose', computerChoice);
    } else {
        console.log('win', computerChoice);
    }
}

const selectPaper = () => {
    const computerMove = computerChoice();
    if (computerMove === 'rock') {
        console.log('win', computerMove);
    } else if (computerMove === 'paper') {
        console.log('tie', computerMove);
    } else {
        console.log('lose', computerMove);
    }
}

const selectScissors = () => {
    const computerMove = computerChoice();
    moveUpCard(scissors)
    if (computerMove === 'rock') {
        moveDownCard(compRock);
        console.log('lose');
    } else if (computerMove === 'paper') {
        moveDownCard(compPaper);
        console.log('win');
    } else {
        moveDownCard(compScissors);
        console.log('tie');
    }
}


rock.addEventListener('click',()=> selectRock());
paper.addEventListener('click',()=> selectPaper());
scissors.addEventListener('click',()=> selectScissors());















// const Winner = document.querySelector('#mouse-pos');

// Use a for loop to add a click event listener to each card
// for (let i = 0; i < cards.length; i++) {
//   cards[i].addEventListener('click', function() {
//     // Get the name attribute of the clicked card's image
//     const cardName = this.querySelector('img').getAttribute('name');

//     // Log or use the cardName as needed
//     console.log('Card Name:', cardName);
//     userMove(cardName)
//   });


// }


// const userMove = (cardName) => {
//   const computerMove = computerChoice();
//   const winner = getWinner(cardName, computerMove);
//   const message = `You picked ${cardName}. Computer picked ${computerMove}. ${winner}`;
//   console.log(message);
//     Winner.innerHTML = message;
// }

// const computerChoice = () => {
//   const choices = ['rock', 'paper', 'scissors'];
//   const randomIndex = Math.floor(Math.random() * choices.length);
//   return choices[randomIndex];
// }

// const getWinner = (userMove, computerMove) => {
//     if (userMove === computerMove) {
//         return 'It\'s a tie!';
//     } else if (userMove === 'user-rock' && computerMove === 'paper') {
//         return 'Computer wins!';
//     } else if (userMove === 'user-paper' && computerMove === 'scissors') {
//         return 'Computer wins!';
//     } else if (userMove === 'user-scissors' && computerMove === 'rock') {
//         return 'Computer wins!';
//     } else {
//         return 'You win!';
//     }
// }



