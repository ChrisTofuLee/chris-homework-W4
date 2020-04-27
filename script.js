const data = {
    questions: [
        {
            question: "What does CSS stand for?",
            choices: [
                "Cell Styling System",
                "Cascading Style Sheet",
                "Choice of Style Sheet",
                "Character Styling Sheet"
            ],
            answer: 1,
        },
        {
            question: "What can arrays not contain?",
            choices: [
                "Empty objects",
                "Questions",
                "Pictures",
                "They can contain everything"
            ],
            answer: 3,
        },
        {
            question: "What is event bubbling?",
            choices: [
                "When a water boils and small bubbles appear",
                "When a function is called from an event handler",
                "When an event handler in the object's parent is triggered",
                "When you book too many events within the week and there is too many to go to"
            ],
            answer: 2,
        },
        {
            question: "What are closures in JavaScript?",
            choices: [
                "When the function folds itself up",
                "The plethora of data that is stored in the coded script",
                "Combination of a function bundled with references to it's surrounding state",
                "When a person stops having feelings for another person after breaking up"
            ],
            answer: 2,
        },
        {
            question: "What is a callback function in JavaScript?",
            choices: [
                "A function passed into another function as an argument",
                "When you call a function from an array",
                "It's the function when you call it back ",
                "It's not when you want to access the function when you want to"
            ],
            answer: 0,
        },
        {
            question: "What does CSS stand for?",
            choices: [
                "Celular Styling System",
                "Cascading Style Sheet",
                "Choice of Style Sheet",
                "Character Styling Sheet"
            ],
            answer: 1,
        },
    ],
    titleInfo: {
            title: "The Coding Quiz",
            theBody: "Test your coding knowledge with the following questions within the time limit. Think twice before clicking though as incorrect answers will penalize your score as well as the time you have left by 10 seconds!",
            toStart: "Start Quiz",
    },
    gameOverInfo: {
            title: "That's All Folks!",
            score: "",
            infoBox: "Enter initials here please",
            initialsBox: "Initials",
            submitButton: "Submit",
    },
    
    scoreboardInfo: {
            title: "Top Players Scoreboard",
            score: "",
            backButton: "Go Back",
            clearButton: "Clear Score",
    },
}

const starterBtn = document.getElementById('startBtn')
const scoreSubmit = document.getElementById('scoreSubmit')
const goBackBtn = document.getElementById('goBackBtn')
const clearScoreBtn = document.getElementById('clearScoreBtn')
const startPage = document.getElementById('start')
const gameOverPage = document.getElementById('gameOver')
const questionsPage = document.getElementById('questions')
const scoreboardPage = document.getElementById('scoreboard')
const displayScore = document.getElementById('displayScore')
const initialsInput = document.getElementById('initialsInput')
const breaker = document.getElementById('breaker')
const rightWrong = document.getElementById('rightWrong')
const showScoreHere = document.getElementById('showScoreHere')
const viewHighScore = document.getElementById('viewHighScore')
const questionsList = data.questions
const titleInfo = data.titleInfo[0]
const gameOverInfo = data.gameOverInfo
const scoreboardInfo = data.scoreboardInfo

let ansValidation = ""
let currentQuestionIndex = 0;
let currentScore = 0;
const topScorerInitials = [];
const topScoresList = [];
let theFinalScore = 0


//timer functionalities
const countDown = document.getElementById("time");
let timeLeft = 60;
let timerInterval;

function tickTock() {
    timeLeft--;
    countDown.textContent = "timer: " + timeLeft;
    
    if(timeLeft === 0) {
        clearInterval(timerInterval);
        currentQuestionIndex = 5
        questionsPage.classList.add('hide');
        questionsPage.innerHTML = ""
        
        runQA();
    }
};

function setTime() {
    startPage.classList.add('hide');
    timeLeft = 60;

    questionsPage.classList.remove('hide');
    countDown.classList.remove('hide');
    runQA()
    timerInterval = setInterval(tickTock, 1000);
};
/*
function gameOver () {
    countDown.textContent = " "
    main = document.querySelector("main");
    main.remove();
    
    constructGameOverInfo();
    
};
*/

//create game over screen
function constructTitle(titleInfo) {
    startPage.classList.remove('hide');

    //title.setAttribute('class', "py-3 pt-md-5 pb-md-4")
    
}
//(data, gameOverInfo) within the function to target that element not data.gameOverInfo 
function constructGameOverInfo(event) {

    event.preventDefault();
    if (initialsInput.value === "") {
        alert("no initials entered")
        return;
    }
    topScoreInitialTrim = initialsInput.value.trim();
    topScorerInitials.push(topScoreInitialTrim);
    topScoresList.push(theFinalScore);
    initialsInput.value = ""
  
    gameOverPage.classList.add('hide');
    breaker.classList.add('hide');
    countDown.classList.add('hide');
    scoreboardPage.classList.remove('hide');
    currentQuestionIndex = 0
    constructScoreboardPage(topScorerInitials, topScoresList);

}


function questionChecker() {
    currentQuestionIndex++

    questionsPage.innerHTML = ""
    runQA()
}

//create Question pages + score display
//hide timer on highscore page, show on quiz start
function constructQuestionsPage(question, choices, answer) {
    if (currentQuestionIndex < 5) {
    const h2 = document.createElement('h2')
    h2.setAttribute('class', 'py-3 pt-md-5 pb-md-4')
    h2.textContent = question
    questionsPage.appendChild(h2)
    
    const choicesDiv = document.createElement('div')
    choicesDiv.setAttribute('id', "choices")


    const qDiv = document.createElement('div')
    qDiv.setAttribute('class', 'py-1')

    choices.forEach(function(choice, index) {
        const qDiv = document.createElement('div')
        const button = document.createElement('button')

        qDiv.setAttribute('class', 'py-1')
        choicesDiv.appendChild(qDiv)

        button.innerHTML = choice
        button.setAttribute('class', 'btn btn-info btn-sm')
        button.setAttribute('id', index)
        button.addEventListener('click', clickedAnswer)
        qDiv.appendChild(button)
    })
    questionsPage.appendChild(choicesDiv)
    }else {
        //questionsPage.classList.add('hide');
        gameOverPage.classList.remove('hide');
        const finalScore = currentScore + timeLeft
        displayScore.textContent = finalScore
        theFinalScore = finalScore
        clearInterval(timerInterval)
        
    }

    function clickedAnswer(event) {

        

        if (event.target.matches('button')) {
            const id = event.target.id

            breaker.classList.remove('hide');
            if (id == answer) {
                currentScore += 10
                
                ansValidation = "Correct!"

            }else {
                timeLeft -= 15
                ansValidation = "Wrong!"
            }
            questionChecker()
        }
        rightWrong.textContent = ansValidation
    }
    
}


function runQA() {
    

    const question = questionsList[currentQuestionIndex].question
    const choices = questionsList[currentQuestionIndex].choices
    const answer = questionsList[currentQuestionIndex].answer
    constructQuestionsPage(question, choices, answer);
}




//back to the title page
function goBackInTime() {
    scoreboardPage.classList.add('hide');
    startPage.classList.remove('hide');
    timeLeft = 60
    currentScore = 0
    showScoreHere.innerHTML = ""

    

}





//create highscores page
function constructScoreboardPage(person, theScore) {

    //sort array to highest first
    //topScoresList.sort(function(a, b){return b-a})
    //topScorerInitials


    person.forEach(function(initials, index) {
        const pDiv = document.createElement('div')
        pDiv.setAttribute('class', 'alert alert-dark')
        pDiv.setAttribute('id', index)
        let number = index + 1
        // currentInitial = initials
        currentScore = theScore[index]
        pDiv.textContent = number + ". " + initials + " scored " + currentScore

        showScoreHere.appendChild(pDiv)

    })
    
}
// function scoresAddition(theScore) {
// theScore.forEach(function(scoreNumb, index) {
//             console.log(scoreNumb + " this is the scorenumb")
//             currentScoreNum = scoreNumb
//             pDiv[index].textContent += " scored " + currentScoreNum
//         })
// }
// function clearScorer(scorer) {
//     scorer = []
// }
// function clearInitials(initials) {
//     initials = []
// }

function clearTheScore() {
    // clearScorer(topScorerInitials);
    // clearInitials(topScoresList);
    topScorerInitials.length = 0
    topScoresList.length = 0
    showScoreHere.innerHTML = ""



}
function viewHighScoreFunc () {
    
    showScoreHere.innerHTML = ""
    gameOverPage.classList.add('hide');
    breaker.classList.add('hide');
    countDown.classList.add('hide');
    questionsPage.classList.add('hide');
    startPage.classList.add('hide');
    questionsPage.innerHTML = ""
    currentQuestionIndex = 0
    timeLeft = 60
    clearInterval(timerInterval);
    constructScoreboardPage(topScorerInitials, topScoresList)

    scoreboardPage.classList.remove('hide');

}

goBackBtn.addEventListener('click', goBackInTime)
clearScoreBtn.addEventListener('click', clearTheScore)
starterBtn.addEventListener('click', setTime)
scoreSubmit.addEventListener('click', constructGameOverInfo)
viewHighScore.addEventListener('click', viewHighScoreFunc)

