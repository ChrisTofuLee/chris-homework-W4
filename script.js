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

/*const questions1 = [
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
]


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
const startPage = document.getElementById('start')
const gameOverPage = document.getElementById('gameOver')
const questionsPage = document.getElementById('questions')
const questionsList = data.questions
const titleInfo = data.titleInfo[0]
const gameOverInfo = data.gameOverInfo
const scoreboardInfo = data.scoreboardInfo

let currentQuestionIndex = 0;




//timer functionalities
const countDown = document.getElementById("time");
let timeLeft = 5;
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
function constructGameOverInfo(gameOverInfo) {
    const titleEl = document.createElement('h2');
    const scoreEl = document.createElement('div');

    gameOverPage.classList.remove('hide');

    /* titleEl.textContent = gameOverInfo.title;
    scoreEl.textContent = "Your final score is..." + gameOverInfo.score;


    titleEl.setAttribute('class', "py-3 pt-md-5 pb-md-4");
    scoreEl.setAttribute('class', 'pb-3')
*/

    /*score: "",
    infoBox: "Enter initials here please",
    initialsBox: "Initials",
    submitButton: "Submit"*/
   
}


function questionChecker() {
    currentQuestionIndex++
    console.log(currentQuestionIndex);
    questionsPage.innerHTML = ""
    runQA()
}

function clickedAnswer(event) {
    console.log(event)
    if (event.target.matches('button')) {
        const id = event.target.id
        console.log(id);
        questionChecker()
    }
}
//create Question pages
function constructQuestionsPage(question, choices) {
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
        gameOverPage.classList.remove('hide')
    }
    
}

function runQA() {
    questionsPage.classList.remove('hide');

    const question = questionsList[currentQuestionIndex].question
    const choices = questionsList[currentQuestionIndex].choices
    const qa = constructQuestionsPage(question, choices);
}

//questions.forEach(constructQuestionsPage)



//create title page
function constructTitlePage(titleInfo) {}





//create highscores page
function constructScoreboardPage(scoreboardInfo) {

}



starterBtn.addEventListener('click', setTime)
