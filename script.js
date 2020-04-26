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
            question: "What does CSS stand for?",
            choices: [
                "Celular Styling System",
                "Cascading Style Sheet",
                "Choice of Style Sheet",
                "Character Styling Sheet"
            ],
            answer: 1,
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
/*

const titleInfo = {
        title: "The Coding Quiz",
        theBody: "Test your coding knowledge with the following questions within the time limit. Think twice before clicking though as incorrect answers will penalize your score as well as the time you have left by 10 seconds!",
        toStart: "Start Quiz",
}
const gameOverInfo = {
        title: "That's All Folks!",
        score: "",
        infoBox: "Enter initials here please",
        initialsBox: "Initials",
        submitButton: "Submit",
}

const scoreboardInfo = {
        title: "Top Players Scoreboard",
        score: "",
        backButton: "Go Back",
        clearButton: "Clear Score",
}
*/

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
const questionsList = data.questions
const titleInfo = data.titleInfo[0]
const gameOverInfo = data.gameOverInfo
const scoreboardInfo = data.scoreboardInfo

let ansValidation = ""
let currentQuestionIndex = 0;
let currentScore = 0;
const topScorerInitials = ["ttt", "rrr", "www"];
const topScoresList = [12, 14, 111];
let theFinalScore = 0

//add display of right or wrong pop up 



//timer functionalities
const countDown = document.getElementById("time");
let timeLeft = 66;
let timerInterval;

function tickTock() {
    timeLeft--;
    countDown.textContent = "timer: " + timeLeft;
    
    if(timeLeft === 0) {
        clearInterval(timerInterval);
        gameOver();
    }
};

function setTime() {
    startPage.classList.add('hide');
    timeLeft = 66;

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
    console.log('this is the initials' + topScorerInitials[0])
    gameOverPage.classList.add('hide');
    breaker.classList.add('hide');
    countDown.classList.add('hide');
    scoreboardPage.classList.remove('hide');
    currentQuestionIndex = 0
    constructScoreboardPage(topScorerInitials, topScoresList);

}


function questionChecker() {
    currentQuestionIndex++
    console.log(currentQuestionIndex);
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
        console.log(event)
        

        if (event.target.matches('button')) {
            const id = event.target.id
            console.log(id);
            console.log(currentScore);
            breaker.classList.remove('hide');
            if (id == answer) {
                currentScore += 10
                
                ansValidation = "Correct!"
                console.log("newscore " + ansValidation)
            }else {
                timeLeft -= 15
                ansValidation = "Wrong!"
            }
            questionChecker()
        }
        rightWrong.textContent = ansValidation
    }
    
}
// 
// function clickedAnswer(event) {
//     console.log(event)
//     if (event.target.matches('button')) {
//         const id = event.target.id
//         console.log(id);
//         console.log(currentScore);
        
//         if (id == answer) {
//             currentScore += 10
//             console.log("newscore " + currentScore)
            
//         }
//         questionChecker()
//     }
// }

function runQA() {
    questionsPage.classList.remove('hide');

    const question = questionsList[currentQuestionIndex].question
    const choices = questionsList[currentQuestionIndex].choices
    const answer = questionsList[currentQuestionIndex].answer
    constructQuestionsPage(question, choices, answer);
}




//back to the title page
function goBackInTime() {
    scoreboardPage.classList.add('hide');
    startPage.classList.remove('hide');
    timeLeft = 66
    showScoreHere.innerHTML = ""
    console.log("the score array" + topScoresList)
    countDown.classList.remove('hide');

}





//create highscores page
function constructScoreboardPage(person, theScore) {
    console.log(person)
    //sort array to highest first
    //topScoresList.sort(function(a, b){return b-a})
    //topScorerInitials
    console.log("assorted array" + topScoresList)

    person.forEach(function(initials, index) {
        const pDiv = document.createElement('div')
        pDiv.setAttribute('class', 'alert alert-dark')
        pDiv.setAttribute('id', index)
        let number = index + 1
        // currentInitial = initials
        v = theScore[index]
        pDiv.textContent = number + ". " + initials + " scored " + currentScore

        showScoreHere.appendChild(pDiv)
        
  

        // theScore.forEach(function(scoreNumb, index) {
        //     console.log(scoreNumb + " this is the scorenumb")
        //     currentScoreNum = scoreNumb
            
        //     pDiv.textContent += " scored " + currentScoreNum
        // })

    })
    
}
// function scoresAddition(theScore) {
// theScore.forEach(function(scoreNumb, index) {
//             console.log(scoreNumb + " this is the scorenumb")
//             currentScoreNum = scoreNumb
//             pDiv[index].textContent += " scored " + currentScoreNum
//         })
// }

function clearTheScore() {}


goBackBtn.addEventListener('click', goBackInTime)
clearScoreBtn.addEventListener('click', clearTheScore)
starterBtn.addEventListener('click', setTime)
scoreSubmit.addEventListener('click', constructGameOverInfo)

