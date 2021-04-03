// Presented with option to start the quiz, I press the button to begin the timer.
// Create a function to lsiten to the pressed button, and begin the count down timer

var timerEl = document.getElementById('time-left');
var startBtn = document.getElementById('start-quiz');
var score = 0;
var body = document.body;



var body = document.body;

var h1El = document.createElement('h1');

h1El.textContent = 'Hello Over Risers!';

h1El.setAttribute('style', 'margin:auto; width:50%; text-align:center;');

body.appendChild(h1El);

var h2El = document.createElement('h2');
h2El.textContent =
  'Answer as many questions as possible while time still remains. Any wrong answer will decrease your time by 15 seconds. Good Luck!';
h2El.setAttribute('style', 'margin:auto; width:60%; text-align:center;');
body.appendChild(h2El);

var btnEl = document.createElement('button');
btnEl.id = 'start-quiz';
btnEl.textContent = 'Start Quiz now?';
btnEl.setAttribute('style', 'font-size: 30px;','box-align: center;');
body.appendChild(btnEl);


var startQuiz = function(event) {
    event.preventDefault();
    var timeLeft = 15;

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

    btnEl.remove();
    roundOne();
};
btnEl.onclick = startQuiz;

console.log(startQuiz);

// After pressing start quiz button, begin the first round of muliple choice questions

var roundOne = function() {
    //window.location.href = "./RoundOne.html";
    
    var btnEl = document.createElement('button');
    btnEl.id = 'start-quiz';
    btnEl.textContent = 'Round One?';
    btnEl.setAttribute('style', 'font-size: 30px;','box-align: center;');
    body.appendChild(btnEl);


}


var roundTwo = function() {
    var btnEl = document.createElement('button');
btnEl.id = 'start-quiz';
btnEl.textContent = 'Round two?';
btnEl.setAttribute('style', 'font-size: 30px;','box-align: center;');
body.appendChild(btnEl);
}
// if you chose the right answer, then add a point to your score but if you should the wrong answer then dcrease subtract seconds from the timer.




