const cards = document.querySelectorAll('.card');

const rock = document.querySelector('#user-rock');
const paper = document.querySelector('#user-paper');
const scissors = document.querySelector('#user-scissors');

const compRock = document.querySelector('#computer-rock');
const compPaper = document.querySelector('#computer-paper');
const compScissors = document.querySelector('#computer-scissors');


const result = document.querySelector('#result');



const moveUpCard = (card) => {
    card.classList.add('move-up');
    setTimeout(() => {
        card.classList.remove('move-up');
    }, 1000);
}

const moveDownCard = (card) => {
    card.classList.add('move-down');
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
    moveUpCard(rock);
    if (computerMove === 'rock') {
        console.log('Tie');
        result.innerHTML = "Tie";
    } else if (computerMove === 'paper') {
        moveDownCard(compPaper);
        console.log('You Lose');
        result.innerHTML = "You Lose";
    } else {
        moveDownCard(compScissors);
        console.log('You Win');
        result.innerHTML = "You Win";
    }
}

const selectPaper = () => {
    const computerMove = computerChoice();
    moveUpCard(paper);
    if (computerMove === 'rock') {
        moveDownCard(compRock);
        console.log('You Win');
        result.innerHTML = "You Win";
    } else if (computerMove === 'paper') {
        console.log('Tie');
        result.innerHTML = "Tie";
    } else {
        moveDownCard(compScissors);
        console.log('You Lose');
        result.innerHTML = "You Lose";
    }
}


const selectScissors = () => {
    const computerMove = computerChoice();
    moveUpCard(scissors);
    if (computerMove === 'rock') {
        moveDownCard(compRock);
        console.log('You Lose');
        result.innerHTML = "You Lose";
    } else if (computerMove === 'paper') {
        moveDownCard(compPaper);
        console.log('You Win');
        result.innerHTML = "You Win";
    } else {
        moveDownCard(compScissors);
        console.log('Tie');
        result.innerHTML = "Tie";
    }
}

rock.addEventListener('click', selectRock);
paper.addEventListener('click', selectPaper);
scissors.addEventListener('click', selectScissors);
