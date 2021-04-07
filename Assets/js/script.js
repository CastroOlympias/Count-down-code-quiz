// Presented with option to start the quiz, I press the button to begin the timer.
// Create a function to lsiten to the pressed button, and begin the count down timer

var timerEl = document.getElementById('time-left');
//var startBtn = document.getElementById('start-quiz');
var score = 0;

var body = document.body;

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
body.appendChild(startbtnEl);


// Start timer countdown
var timeLeft = 10;
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


// After pressing start quiz button, begin the first round of muliple choice questions

var listBrand = [
    { q: 'What color is the sky?.', choices: ["red", "blue", "brown", "pruple", "orange"], a: 'blue' },
    { q: 'What color clear?.', choices: ["red", "blue", "brown", "pruple", "orange"], a: 'blue' },
    { q: 'What color is the sky?.', choices: ["red", "blue", "brown", "pruple", "orange"], a: 'blue' },
    { q: 'What color is the sky?.', choices: ["red", "blue", "brown", "pruple", "orange"], a: 'blue' },




    // { q: 'There are 365 days in a year.', a: 't' },
    // { q: 'There are 42 ounces in a pound.', a: 'f' },
    // { q: 'The Declaration of Independence was created in 1745.', a: 'f' },
    // { q: 'Bananas are vegetables.', a: 'f' },
    // { q: 'Is water wet?', a: 't' }
  ]; 
  var index = 0;
//the array
var printBtnEl = function() {
    var currentQuestion = listBrand[index]
    var h2El = document.createElement("h2")
    h2El.textContent = currentQuestion.q
    var questionsDiv = document.querySelector(".questions")
    questionsDiv.innerHTML = ""
    questionsDiv.appendChild(h2El)
        currentQuestion.choices.forEach(function(choice,i){
        var btn = document.createElement("button");
        btn.setAttribute("value", choice)
        btn.onclick = checkAnswer
       //var t = document.createElement("button");
       btn.textContent = choice
       //btn.appendChild(t);
       questionsDiv.appendChild(btn);
    })
    startbtnEl.remove();
}

var checkAnswer = function() {
    if (this.value === listBrand[index].a) {
        alert("this is correct")
    } else {
        alert("youre are very wrong")
        timeLeft -= 2
    }
    index ++;
    printBtnEl()
}



    // for (var i = 0; i < listBrand.choices.length; i++) {
       // remember index ++ to get new set of questions/answers
    //}
    
    
    //printBtnTwoEl();


// // after answering first question begin second quation

// var listBrandTwo =['Porsche','Dodge','Truck','Car','wag'];   
// //the array
// var printBtnTwoEl = function() {
    
    
//     for (var i = 0; i < listBrandTwo.length; i++) {
//        var btnTwo = document.createElement("button");
//         var t = document.createTextNode(listBrandTwo[i]);
//        btnTwo.appendChild(t);
//        document.body.appendChild(btnTwo);
//     }
// }







// var roundOne = function() {
//     //window.location.href = "./RoundOne.html";
    
//     var roundOnebtnEl = document.createElement('button');
//     roundOnebtnEl.id = 'firstQuestion';
//     roundOnebtnEl.textContent = 'Round One?';
//     roundOnebtnEl.setAttribute('style', 'font-size: 30px;','box-align: center;');
//     body.appendChild(roundOnebtnEl)
    
//     roundTwo()

// };


// // body.appendChild(roundTwobtnEl);

// var roundTwo = function() {
   
     
//     // var roundTwobtnEl = document.createElement('button');
//     // roundTwobtnEl.id = 'secondQuestion';
//     // roundTwobtnEl.textContent = 'Round two?';
//     // roundTwobtnEl.setAttribute('style', 'font-size: 30px;','box-align: center;');
    
//     body.appendChild(roundTwobtnEl);
    
// }



// if you chose the right answer, then add a point to your score but if you should the wrong answer then dcrease subtract seconds from the timer.






// if you chose the right answer, then add a point to your score but if you should the wrong answer then dcrease subtract seconds from the timer.


// var listBrand =['LEXUS','AUDI','MAYBACK','FERRARI','TOYOTA'];   
// //the array
// var printBtn = function() {
//     for (var i = 0; i < listBrand.length; i++) {
//        var btn = document.createElement("button");
//        var t = document.createTextNode(listBrand[i]);
//        btn.appendChild(t);
//        document.body.appendChild(btn);
//     }
// }