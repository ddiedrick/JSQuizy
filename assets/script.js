var timerInterval = document.querySelector(".time-left");
var startBtn = document.querySelector(".startBtn1");
var resetBtn = document.querySelector(".refresh");
var score = document.querySelector(".points");
var mainEL = document.querySelector("#main");
var askQ = document.querySelector("#ask");
var timer;
var timerCount;
var answerBtn1 = document.querySelector("#ans1");
var answerBtn2 = document.querySelector("#ans2");
var answerBtn3 = document.querySelector("#ans3");
var answerBtn4 = document.querySelector("#ans4");


const questions = [

    { question: "",
      answers: [

    ],
    answer: ""
    },

    { question: "",
      answers: [

    ],
    answer: ""
    },
    { question: "",
      answers: [

    ],
    answer: ""
    },
    { question: "",
      answers: [

    ],
    answer: ""
    },
    { question: "",
      answers: [

    ],
    answer: ""
    },
    { question: "",
      answers: [

    ],
    answer: ""
    },
    { question: "",
      answers: [

    ],
    answer: ""
    },
    { question: "",
      answers: [

    ],
    answer: ""
    },
    { question: "",
      answers: [

    ],
    answer: ""
    },
    { question: "",
      answers: [

    ],
    answer: ""
    }
 
   
]
function startGame() {
  document.querySelector("#main").setAttribute("class","show");
  document.querySelector("#start").setAttribute("class","hide");
 
  timerCount = 60;


  //renderBlanks()
  startTimer()
}
function startTimer() {
  
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}


function loadQuestion(n){
askQ.textContent=questions[n].question;
answerBtn1.textContent - questions[n].answers[0];
answerBtn2.textContent - questions[n].answers [1];
answerBtn3.textContent - questions[n].answers [2];
answerBtn4.textContent - questions[n].answers [3];
questionNumber = n;
}

function resetGame() {
  
  document.querySelector("#start").setAttribute("class","show");
  document.querySelector("#main").setAttribute("class","hide");
 
}
// Attaches event listener to button
resetBtn.addEventListener("click", resetGame);

startBtn.addEventListener("click", function(){
  document.querySelector("#main").setAttribute("class","show");
  document.querySelector("#start").setAttribute("class","hide");
});

function testing(){
alert("testing");
}
//startBtn.addEventListener("click", testing);
//mainEL.setAttribute("display","block");
