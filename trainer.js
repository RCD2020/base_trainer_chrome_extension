let BASE = document.getElementById('base');
let LENGTH = document.getElementById('length');
let NUMBER = document.getElementById('number');
let ANSWER = document.getElementById('answer');
let TRAINER = document.getElementById('trainer');

let CHECK_ANSWER_BUTTON = document.getElementById('check_answer');
let GENERATE_PROBLEM_BUTTON = document.getElementById('generate_problem');
CHECK_ANSWER_BUTTON.addEventListener('click', checkAnswer);
GENERATE_PROBLEM_BUTTON.addEventListener('click', generateProblem);

var answer = 0


function getBase() {
    return Number(BASE.value);
}

function getLength() {
    return Number(LENGTH.value);
}


function randInt(max) {
    return Math.floor(Math.random() * (max + 1));
}


function generateProblem() {
    let base = Number(BASE.value);
    let length = Number(LENGTH.value);
    TRAINER.className = 'unanswered'

    var maxNum = (base ** length) - 1;
    answer = randInt(maxNum);
    var randNum = answer.toString(base);
    NUMBER.innerHTML = randNum;

    ANSWER.value = '';
}


function checkAnswer() {
    if (ANSWER.value == answer) {
        TRAINER.className = 'correct';
        console.log('correct');
    } else {
        TRAINER.className = 'incorrect';
        console.log('incorrect');
    }
    // console.log(ANSWER.value);
    // console.log(answer);
}