var timerEl = document.getElementById('time-left');
var scoreEl = document.getElementById('high-score');
var startBtn = document.getElementById('start-quiz');
startBtn.setAttribute('style', 'font-size: 30px;','box-align: center;');
var score = 0;

var body = document.body;

var questionIdCounter = 0

// html insertion of rules for challenge

var body = document.body;
var h1El = document.createElement('h1');
h1El.textContent = 'Hello World!';
h1El.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
body.appendChild(h1El);
var h2El = document.createElement('h2');
h2El.textContent =
  'Answer as many questions as possible while time still remains. Any wrong answer will decrease your time by 15 seconds. Good Luck!';
h2El.setAttribute('style', 'margin:auto; width:60%; text-align:center;');
body.appendChild(h2El);

// Start button, initiate countdown timer

var startbtnEl = document.createElement('button');
startbtnEl.id = 'start-quiz';
startbtnEl.textContent = 'Start Quiz now?';
startbtnEl.setAttribute('style', 'font-size: 30px;','box-align: center;');
//body.appendChild(startbtnEl);


// Start timer countdown
var timeLeft = 15;
var startQuiz = function(event) {
    event.preventDefault();


    var timeInterval = setInterval(function() {
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
        }
    }, 1000);

    // Start button creation for first question
    printBtnEl();
    

};
startbtnEl.onclick = startQuiz;
startBtn.onclick = startQuiz;

// After pressing start quiz button, begin the first round of muliple choice questions

var listBrand = [
    { q: 'What color is the sky?.', choices: ["Red", "Blue", "Brown", "Purple", "Orange"], a: 'Blue' },
    { q: 'What is the most dangerous animal in the world?.', choices: ["Black Cats", "Blue Dogs", "Giraffes", "Lion", "Tiny Great White Shark"], a: 'Blue Dogs' },
    { q: 'What is your Favorite number?.', choices: ["1", "0", "10", "7", "5"], a: '7' },
    { q: 'What is your favorite Mel Gibson movie?', choices: ["Brave Heart", "Lethal Weapon", "Maverick", "Forever Young", "Signs"], a: 'Brave Heart' },
    { q: 'If A = 1 & B = 2 and Y = 25 & Z = 26, then what number value is Cat?.', choices: ["16", "20", "24", "28", "32"], a: '24' },
    { q: 'How much wood could a wood chuck, chuck, if a wood chuck could chuck wood?', choices: ["16 cords", "24 cords", "32 cords", "40 cords", "48 cords"], a: '48 cords' },
    
  ]; 
  var index = 0;
//the array

questionIdCounter++;

var printBtnEl = function(questionIdCounter) {
    var currentQuestion = listBrand[index]
    var h2El = document.createElement("h2")
    h2El.textContent = currentQuestion.q
    var questionsDiv = document.querySelector(".questions")
    questionsDiv.innerHTML = ""
    questionsDiv.appendChild(h2El)
    
    currentQuestion.choices.forEach(function(choice,i){
    var btn = document.createElement("button");
    btn.setAttribute("value", choice)
    btn.setAttribute("data-answer-id", questionIdCounter)
    btn.onclick = checkAnswer
    //var t = document.createElement("button");
    btn.textContent = choice
    //btn.appendChild(t);
    questionsDiv.appendChild(btn);
    })

  
    startbtnEl.remove();
    startBtn.remove();
    
}

var checkAnswer = function() {
    if (this.value === listBrand[index].a) {
        //alert("this is correct")
        score ++;
        scoreEl.textContent = ' Your score is ' + score;
    } else {
        //alert("youre are very wrong")
        timeLeft -= 15
    }
    index ++;
    printBtnEl()
    console.log(score);
}



var endGame = function() {

}

var saveScore = function() {

}