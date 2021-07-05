
var timerEl = document.getElementById('time-left');
var scoreEl = document.getElementById('high-score');
var score = 0;
console.log(score)

var body = document.body;

var questionIdCounter = 0

const quizSection = document.getElementById('quiz')
var welcomeDiv = document.createElement('div')
welcomeDiv.id = 'welcome'
quizSection.appendChild(welcomeDiv)

welcomeDiv = document.getElementById('welcome')
var welcomeMsg = document.createElement('h1');
var gameRulesMsg = document.createElement('h2');
welcomeMsg.textContent = 'Hello World!';
welcomeMsg.id = 'Hello-World';
gameRulesMsg.id = 'game-rules'
welcomeDiv.appendChild(welcomeMsg);

gameRulesMsg.textContent =
    'Answer as many questions as possible while time still remains. Any wrong answer will decrease your time by 15 seconds. Good Luck!';
welcome.appendChild(gameRulesMsg);

var startbtnEl = document.createElement('button');
startbtnEl.textContent = 'Start Quiz Now';
startbtnEl.id = 'start-btn'
welcomeDiv.appendChild(startbtnEl);

var viewHighScoreBtnEl = document.createElement('button');
viewHighScoreBtnEl.textContent = 'View High Score'
viewHighScoreBtnEl.id = 'high-score'
welcomeDiv.appendChild(viewHighScoreBtnEl)


// Start timer countdown
var timeLeft = 30
var startQuiz = function () {
    // event.preventDefault();


    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft + ' seconds remaining';

        if (timeLeft > 1) {
            timerEl.textcontect = timeLeft + 'seconds remaining';
        }

        else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        }

        else {
            timerEl.textContent = "Your time is up!";
            clearInterval(timeInterval);
            endGame();
        }
    }, 1000);


    // Start button creation for first question

    printBtnEl();

};
startbtnEl.onclick = startQuiz;


// After pressing start quiz button, begin the first round of muliple choice questions

var listBrand = [
    { q: 'What color is the sky?.', choices: ["Red", "Blue", "Brown", "Purple", "Orange"], a: 'Blue' },
    { q: 'What is the most dangerous animal in the world?.', choices: ["Black Cats", "Blue Dogs", "Giraffes", "Lion", "Tiny Great White Shark"], a: 'Blue Dogs' },
    { q: 'What is your Favorite number?.', choices: ["1", "0", "10", "7", "5"], a: '7' },
    { q: 'What is your favorite Mel Gibson movie?', choices: ["Brave Heart", "Lethal Weapon", "Maverick", "Forever Young", "Signs"], a: 'Brave Heart' },
    { q: 'If A = 1 & B = 2 and Y = 25 & Z = 26, then what number value is Cat?.', choices: ["16", "20", "24", "28", "32"], a: '24' },
    { q: 'How much wood could a wood chuck, chuck, if a wood chuck could chuck wood?', choices: ["16 cords", "24 cords", "32 cords", "40 cords", "48 cords"], a: '48 cords' },

];

console.log(listBrand)
var index = 0;
//the array


questionIdCounter++;
var printBtnEl = function (questionIdCounter) {

    var questions = document.getElementById('quiz')

    var currentQuestion = listBrand[index]
    var question = document.createElement("h2")
    question.id = 'questions'
    question.textContent = currentQuestion.q

    questions.innerHTML = ""
    questions.appendChild(question)

    currentQuestion.choices.forEach(function (choice, i) {

        var answerQuestions = document.createElement('button');
        answerQuestions.id = 'answers'
        answerQuestions.setAttribute("value", choice)
        answerQuestions.className = 'remove'
        answerQuestions.setAttribute("data-answer-id", questionIdCounter)
        answerQuestions.onclick = checkAnswer
        answerQuestions.textContent = choice
        questions.appendChild(answerQuestions);
    })



    startbtnEl.remove();
    welcomeDiv.remove();
    gameRulesMsg.remove();
}

var checkAnswer = function () {
    if (this.value === listBrand[index].a) {
        // alert("this is correct")
        score++;
        scoreEl.textContent = ' Your score is ' + score;
    }
    else {
        // alert("you are very wrong")
        timeLeft -= 15
    }
    index++;

    // this ends the game based on last question
    if (listBrand.length === index) {
        endGame()
    }
    else {
        printBtnEl()
    }

    console.log(score);
}



var endGame = function () {

    questions.remove();
    timeLeft = 0;




    var remove = document.querySelectorAll('.remove')
    console.log(remove)
    // remove.classList.add('hide')

    // remove.remove();

    remove.forEach(function (button, i) {
        console.log(button, i)
        button.remove()
    })

    const endOfGame = document.getElementById('quiz')
    const formInput = document.createElement('div')
    formInput.id = 'formInput'
    endOfGame.appendChild(formInput)
    const input = document.getElementById('formInput')

    const enterNameHere = document.createElement('h3')
    enterNameHere.id = 'enterNameHere'
    enterNameHere.textContent = 'Enter you name and save your score'
    input.appendChild(enterNameHere)

    const nameInput = document.createElement('input')
    nameInput.id = 'nameInput'
    input.appendChild(nameInput)

    const saveScore = document.createElement('button')
    saveScore.id = 'saveButton'
    saveScore.type = 'submit'
    saveScore.textContent = 'Save your score'
    input.appendChild(saveScore)

    const newGame = document.createElement('button')
    newGame.id = 'newGame'
    newGame.type = 'submit'
    newGame.textContent = "Start a new game?"
    input.appendChild(newGame)

    saveScore.onclick = saveHighScore;
    newGame.onclick = startNewGame
}


var startNewGame = function init() {
    // alert('start new game')
    timeLeft = 30
    listBrand[listBrand.length = 0]

    console.log(listBrand)
    startQuiz(location.reload())
}


var saveHighScore = function () {
    alert("Save your name and score into local storage, mkay?")
    var name = document.getElementById('nameInput').value;
    var savedScore = JSON.parse(localStorage.getItem('highScores')) || []
    var newHighScore = {
        name: name,
        yourScore: score
    }
    savedScore.push(newHighScore)
    localStorage.setItem('highScores', JSON.stringify(savedScore));

    //  var score = document.getElementById('high-score').value;
    console.log(score);
    //  localStorage.setItem('yourScore', JSON.stringify(score))
}


var savedScore = JSON.parse(localStorage.getItem('highScores')) || []
console.log(savedScore)
console.log(savedScore)

var viewhighScores = function () {
    var savedScore = JSON.parse(localStorage.getItem('highScores')) || []
    console.log(savedScore)
    console.log(Object.values(savedScore))
    var list = Object.values(savedScore)

    const scoreSection = document.getElementById('quiz')
    const highScoreDiv = document.createElement('div')
    highScoreDiv.id = 'high-core-page'
    scoreSection.appendChild(highScoreDiv)
    
    const displayScores = document.createElement('h1')
    displayScores.id='high-score-msg'
    displayScores.textContent = 'Recent Scores'
    highScoreDiv.appendChild(displayScores)



    for (var i = savedScore.length - 1; i >= 5; i--) {

        console.log(savedScore[i])
        list = document.createElement('li')
        list.textContent = savedScore[i]
        highScoreDiv.appendChild(list)

    }

    var scoreStartbtnEl = document.createElement('button');
    scoreStartbtnEl.textContent = 'Start Quiz Now';
    scoreStartbtnEl.id = 'start-btn'
    highScoreDiv.appendChild(scoreStartbtnEl);

    viewHighScoreBtnEl.remove()
    welcomeMsg.remove()
    gameRulesMsg.remove()
    startbtnEl.remove()

    scoreStartbtnEl.onclick = startQuiz;
}
viewHighScoreBtnEl.onclick = viewhighScores;


objArray = [{ foo: 1, bar: 2 }, { foo: 3, bar: 4 }, { foo: 5, bar: 6 }];

function getFields(input, field) {
    var output = [];
    for (var i = 0; i < input.length; ++i)
        output.push(input[i][field]);
    return output;
}

var result = objArray.map(a => a.foo);


console.log(result)
