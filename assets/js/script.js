var timerEl = document.getElementById('time-left');
var scoreEl = document.getElementById('high-score');
var score = 0;

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
    'Answer as many questions as possible while time still remains. Any wrong answer will decrease your time by 90 seconds. Good Luck!';
welcome.appendChild(gameRulesMsg);

var startbtnEl = document.createElement('button');
startbtnEl.textContent = 'Start Quiz Now';
startbtnEl.id = 'start-btn'
welcomeDiv.appendChild(startbtnEl);

var viewHighScoreBtnEl = document.createElement('button');
viewHighScoreBtnEl.textContent = 'View High Score'
viewHighScoreBtnEl.id = 'high-score'
welcomeDiv.appendChild(viewHighScoreBtnEl)

var timeLeft = 90
var startQuiz = function () {

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
    printBtnEl();
};


startbtnEl.onclick = startQuiz;

var theQuestions = [
    { q: 'What color is the sky?.', choices: ["Red", "Blue", "Brown", "Purple", "Orange"], a: 'Blue' },
    { q: 'What is the most dangerous animal in the world?.', choices: ["Black Cats", "Blue Dogs", "Giraffes", "Lion", "Tiny Great White Shark"], a: 'Blue Dogs' },
    { q: 'What is your Favorite number?.', choices: ["1", "0", "10", "7", "5"], a: '7' },
    { q: 'What is your favorite Mel Gibson movie?', choices: ["Brave Heart", "Lethal Weapon", "Maverick", "Forever Young", "Signs"], a: 'Brave Heart' },
    { q: 'If A = 1 & B = 2 and Y = 25 & Z = 26, then what number value is Cat?.', choices: ["16", "20", "24", "28", "32"], a: '24' },
    { q: 'How much wood could a wood chuck, chuck, if a wood chuck could chuck wood?', choices: ["16 cords", "24 cords", "32 cords", "40 cords", "48 cords"], a: '48 cords' },

];

console.log(theQuestions)
var index = 0;

questionIdCounter++;
var printBtnEl = function (questionIdCounter) {

    var questions = document.getElementById('quiz')

    var currentQuestion = theQuestions[index]
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
    if (this.value === theQuestions[index].a) {
        score++;
        scoreEl.textContent = ' Your score is ' + score;
    }
    else {
        timeLeft -= 15
    }
    index++;
    if (theQuestions.length === index) {
        endGame()
    }
    else {
        printBtnEl()
    }
}


var endGame = function () {

    questions.remove();
    timeLeft = 0;

    var remove = document.querySelectorAll('.remove')
    console.log(remove)

    remove.forEach(function (button, i) {
        console.log(button, i)
        button.remove()
    })

    const endOfGame = document.getElementById('quiz')
    const formInput = document.createElement('div')
    formInput.id = 'formInput'
    endOfGame.appendChild(formInput)
    const input = document.getElementById('formInput')

    const enterNameHere = document.createElement('h2')
    enterNameHere.id = 'enterNameHere'
    enterNameHere.textContent = 'Enter your name and save your score'
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

    var viewHighScoreBtnEl = document.createElement('button');
    viewHighScoreBtnEl.textContent = 'View High Score'
    viewHighScoreBtnEl.id = 'high-score'
    input.appendChild(viewHighScoreBtnEl)

    saveScore.onclick = saveHighScore;
    newGame.onclick = startNewGame;
    viewHighScoreBtnEl.onclick = viewhighScores;
}


var startNewGame = function init() {
    console.log(theQuestions)
    startQuiz(location.reload())
}


var saveHighScore = function () {
    var name = document.getElementById('nameInput').value;
    var savedScore = JSON.parse(localStorage.getItem('highScores')) || []
    var newHighScore = {
        name: name,
        yourScore: score
    }
    savedScore.push(newHighScore)
    localStorage.setItem('highScores', JSON.stringify(savedScore));
    console.log(score);
}


var savedScore = JSON.parse(localStorage.getItem('highScores')) || []
// console.log(savedScore)

const viewhighScores = function () {
    const savedScore = JSON.parse(localStorage.getItem('highScores')) || []
    // this is an array/object processing, to grab the last six name/score objects from local storage, then create a new array that can only hold 6 array indexes before implimenting a function to get the values from the objects. This is how the webpage was displaying the name/scores "[object Object]"
    // const sixth = savedScore[savedScore.length - 6]
    // const fifth = savedScore[savedScore.length - 5]
    // const forth = savedScore[savedScore.length - 4]
    // const third = savedScore[savedScore.length - 3]
    // const second = savedScore[savedScore.length - 2]
    // const first = savedScore[savedScore.length - 1]
    // const allSix = [sixth, fifth, forth, third, second, first]
    // console.log(allSix)
    // console.log(allSix[0])

    // I just recalled the method of splitting an array from and index position from a 2 minute playing with code from a month ago or so, just googled and found an easier way of split into a new array only container 6 indexes, it's less code than above. This and my template literal for loops will cut down a lot of this code. but I'm gonna leave it for my learning purposes.

    // this was found online, and then eureka, a much better arrayer splicer than the above, sixth, fifth etc, index position.
    recentSix = savedScore.splice(-10)
    console.log(recentSix)
    // x = ["a", "b", "c", "d", "e", "f", "g"];
    // y = x.splice(3);
    // console.log(x);

    function getFields(input, field) {
        const output = [];
        for (let i = 0; i < input.length; ++i)
            output.push(input[i][field]);
        return output;
    }

    // var playerName = getFields(allSix, "name",);
    // var playerScore = getFields(allSix, "yourScore");

    var playerName = getFields(recentSix, "name",);
    var playerScore = getFields(recentSix, "yourScore");

    console.log(playerName)
    console.log(playerScore)

    const scoreSection = document.getElementById('quiz')
    const highScoreDiv = document.createElement('div')
    highScoreDiv.id = 'high-core-page'
    scoreSection.appendChild(highScoreDiv)

    const displayScores = document.createElement('h1')
    // displayScores.id = 'high-score-msg'
    displayScores.textContent = '10 Most Recent Scores'
    highScoreDiv.appendChild(displayScores)

    // This is a manually one by one way to pull from the last positions of the array, this worked but not implemeneted in my weather app, which I can actually do with this method to limit the number of recent city searches, because the forloop doens't work to limit.

    // sixthList = document.createElement('li')
    // sixthList.textContent = `Player: ${playerName[0]} has a score of: ${playerScore[0]}`
    // highScoreDiv.appendChild(sixthList)

    // fifthList = document.createElement('li')
    // fifthList.textContent = `Player: ${playerName[1]} has a score of: ${playerScore[1]}`
    // highScoreDiv.appendChild(fifthList)

    // forthList = document.createElement('li')
    // forthList.textContent = `Player: ${playerName[2]} has a score of: ${playerScore[2]}`
    // highScoreDiv.appendChild(forthList)

    // thirdList = document.createElement('li')
    // thirdList.textContent = `Player: ${playerName[3]} has a score of: ${playerScore[3]}`
    // highScoreDiv.appendChild(thirdList)

    // secondList = document.createElement('li')
    // secondList.textContent = `Player: ${playerName[4]} has a score of: ${playerScore[4]}`
    // highScoreDiv.appendChild(secondList)

    // firstList = document.createElement('li')
    // firstList.textContent = `Player: ${playerName[5]} has a score of: ${playerScore[5]}`
    // highScoreDiv.appendChild(firstList)

    // this for loop, like the weather app code I experimented with, works to list only the 6 most recent scores. This one works, exactly as the code from lines 234 to 256. I got the for loop to work with a template literl to display the player name and scores. the name matches up in the forloop with the player score. The playerScore array loops with the playerName array. This is freakin sweet. I'm leaving uncommonted for my demonstration purposes that they perform the exact same way. but the for loop is mutch less coding and much more practical which doesn't require more code should I choise to increas the size of the array.

    for (var i = 0; i < playerName.length; i++) {

        console.log(playerName[i])
        var list = document.createElement('li')
        list.textContent = `${playerName[i]} Score ${playerScore[i]}`
        highScoreDiv.appendChild(list)
    }

    var scoreStartbtnEl = document.createElement('button');
    scoreStartbtnEl.textContent = 'Start Quiz Now';
    scoreStartbtnEl.id = 'start-btn'
    highScoreDiv.appendChild(scoreStartbtnEl);

    scoreStartbtnEl.onclick = startNewGame;

    viewHighScoreBtnEl.remove()
    welcomeMsg.remove()
    gameRulesMsg.remove()
    startbtnEl.remove()
    formInput.remove()
}

viewHighScoreBtnEl.onclick = viewhighScores;



// found these online and played and lerned to use them to get the values from the objects in the array, to display those values on page instead of displaying [object Object] on the page.

// objArray = [ { foo: 1, bar: 2}, { foo: 3, bar: 4}, { foo: 5, bar: 6} ];


// function getFields(input, field) {
//     var output = [];
//     for (var i=0; i < input.length ; ++i)
//         output.push(input[i][field]);
//     return output;
// }

// var result1 = getFields(objArray, "foo", "bar"); // returns [ 1, 3, 5 ]
// var result2 = getFields(objArray, "bar"); // returns [ 2, 4, 6 ]
// console.log(result1)
// console.log(result2)

// x = ["a", "b", "c", "d", "e", "f", "g"];
// y = x.splice(-2);
// console.log(x); // ["a", "b", "c"]
// console.log(y); // ["d", "e", "f", "g"]