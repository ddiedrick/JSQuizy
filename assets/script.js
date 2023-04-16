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

    { question: "Which is the correct way to write a comment in JavaScript?",
      answers: {
        0: "{# ... #}",
        1: "<!--- .... ---!>",
        2: "// ....",
        3: "|| ..."

    },
    correctAnswer: "2"
    },

    { question: "Which array method sorts the elements of an array?",
    answers: {
      0:"sort()",
      1:"arraySort()",
      2:"order",
      3:"changeOrder()"

  },
  correctAnswer: "0"
    },
    { question: "What is a function with no return value called?",
    answers: {
      0:"Static function",
      1:"Method",
      2:"proccedure",
      3:"Dynamic function"

  },
  correctAnswer: "2"
    },
    { question: "Which of the following is a correct way to write “Hello World” on the web page?",
    answers: {
      0:"document.write(“Hello World”);",
      1:"system.out.println(“Hello World”);",
      2:"print(“Hello World”);",
      3:"response.write(“Hello World”);"

  },
  correctAnswer: "0"
    },
    { question: "How do you create a new function in JavaScript?",
    answers: {
      0:"new.function() {}",
      1:"function myFunction() {}",
      2:"function:myFunction() {}",
      3:"function = myFunction() {}"

  },
  correctAnswer: "1"
    },
    { question: "Can you set any style to HTML tag using JavaScript?",
    answers: {
      0:"yes",
      1:"no",
      2:"",
      3:""

  },
  correctAnswer: "0"
    },
    { question: "How do you open a new window with JavaScript?",
    answers: {
      0:"window.open();",
      1:"window.new();",
      2:"open(new window());",
      3:"window.open_new();"

  },
  correctAnswer: "0"
    },
    { question: "",
    answers: {
      0:"{# ... #}",
      1:"<!--- .... ---!>",
      2:"// ....",
      3:"\\ ..."

  },
  correctAnswer: ""
    },
 
   
]
function startGame() {
  document.querySelector("#main").setAttribute("class","show");
  document.querySelector("#start").setAttribute("class","hide");
 loadQuestion(0);
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
answerBtn1.textContent = questions[n].answers[0];
answerBtn2.textContent = questions[n].answers [1];
answerBtn3.textContent = questions[n].answers [2];
answerBtn4.textContent = questions[n].answers [3];
questionNumber = n;
}

function resetGame() {
  
  document.querySelector("#start").setAttribute("class","show");
  document.querySelector("#main").setAttribute("class","hide");
 
}
// Attaches event listener to button
resetBtn.addEventListener("click", resetGame);

/*startBtn.addEventListener("click", function(){
  document.querySelector("#main").setAttribute("class","show");
  document.querySelector("#start").setAttribute("class","hide");
});*/
startBtn.addEventListener("click",startGame);
function testing(){
alert("testing");
}
//startBtn.addEventListener("click", testing);
//mainEL.setAttribute("display","block");
