var timerInterval = document.querySelector(".time-left");
var startBtn = document.querySelector(".startBtn1");
var resetBtn = document.querySelector(".refresh");
const quizContainer = document.getElementById('main');
const options = document.getElementById('options');
const submitButton = document.getElementById('submit');
const ans1 = document.getElementById('ans1');
const ans2 = document.getElementById('ans2');
const ans3 = document.getElementById('ans3');
const ans4 = document.getElementById('ans4');
var timerCount=60;
var timerElement = document.querySelector(".timer");
var id=0;
var initials="";

const questions = [

    { id: 0,
      q: "Which is the correct way to write a comment in JavaScript?",
      a: [{ text: "{# ... #}", isCorrect: false },
          { text: "<!--- .... ---!>", isCorrect: false },
          { text: "// ....", isCorrect: true },
          { text: "|| ...", isCorrect: false }
      ]
  
  },
  {
      id: 1,
      q: "Which array method sorts the elements of an array?",
      a: [{ text: "Sort()", isCorrect: true, isSelected: false },
          { text: "arraySort()", isCorrect: false },
          { text: "order()", isCorrect: false },
          { text: "changeOrder()", isCorrect: false }
      ]
  
  },
  {
      id: 2,
      q: "What is a function with no return value called?",
      a: [{ text: "static function", isCorrect: false },
          { text: "dynamic function", isCorrect: false },
          { text: "proccedure", isCorrect: true },
          { text: "method", isCorrect: false }
      ]
  
  },
  {
      id: 3,
      q: "Which of the following is a correct way to write “Hello World” on the web page?",
      a: [{ text: "system.out.println(“Hello World”);", isCorrect: false, isSelected: false },
          { text: "print(“Hello World”);", isCorrect: false },
          { text: "response.write(“Hello World”);", isCorrect: false },
          { text: "document.write(“Hello World”);", isCorrect: true }
      ]
  
  },
  {
      id: 4,
      q: "How do you create a new function in JavaScript?",
      a: [{ text: "function = myFunction() {...}", isCorrect: false, isSelected: false },
          { text: "function:myFunction() {...}", isCorrect: false },
          { text: "new.function() {...}", isCorrect: false },
          { text: "function myFunction() {...}", isCorrect: true }
      ]
  
  },
  {
      id: 5,
      q: "Can you set any style to HTML tag using JavaScript?",
      a: [{ text: "yes", isCorrect: false, isSelected: true },
          { text: "no", isCorrect: false },
          { text: "sometimes", isCorrect: false },
          { text: "never", isCorrect: false }
      ]
  
  },
  {
      id: 6,
      q: "How do you open a new window with JavaScript?",
      a: [{ text: "window.open_new();", isCorrect: false, isSelected: false },
          { text: "window.new();", isCorrect: false },
          { text: "open(new window());", isCorrect: false },
          { text: "window.open();", isCorrect: true }
      ]
  
  },
    
   
]
function startTimer() {
  
  // Sets timer
  var timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    
    // Tests if time has run out
    if (timerCount == 0) {
      // Clears interval
      
      quizContainer.setAttribute("class","hide");
      options.textContent="game over"
     
      timerElement.textContent = 0;
      clearTimeout(timer);
    }
  }, 1000);
  
  
}
function getInitials() {


  initials = prompt("Enter your initials");
  
  alert("Thank you for playing "+initials);
  quizContainer.setAttribute("class","hide");
  options.setAttribute("class","hide");
}
function loadQuiz(){// variable to store the HTML output
  var start = true;
  
  quizContainer.setAttribute("class","show");
  options.setAttribute("class","show");
  document.querySelector("#start").setAttribute("class","hide");
 
  var results = document.getElementsByClassName("results");
  results[0].innerText = "";
  

  // Setting the question text
  quizContainer.innerText = questions[id].q;
  
  
  // Providing option text
  ans1.innerText = questions[id].a[0].text;
  ans2.innerText = questions[id].a[1].text;
  ans3.innerText = questions[id].a[2].text;
  ans4.innerText = questions[id].a[3].text;
  
  // Providing the true or false value to the options
  ans1.value = questions[id].a[0].isCorrect;
  ans2.value = questions[id].a[1].isCorrect;
  ans3.value = questions[id].a[2].isCorrect;
  ans4.value = questions[id].a[3].isCorrect;
  
  var selected = "";
  
  // Show selection for ans1
  ans1.addEventListener("click", () => {
      ans1.style.backgroundColor = "grey";
      ans2.style.backgroundColor = "aliceblue";
      ans3.style.backgroundColor = "aliceblue";
      ans4.style.backgroundColor = "aliceblue";
      selected = ans1.value;
  })
  
  // Show selection for ans2
  ans2.addEventListener("click", () => {
      ans1.style.backgroundColor = "aliceblue";
      ans2.style.backgroundColor = "grey";
      ans3.style.backgroundColor = "aliceblue";
      ans4.style.backgroundColor = "aliceblue";
      selected = ans2.value;
  })
  
  // Show selection for ans3
  ans3.addEventListener("click", () => {
      ans1.style.backgroundColor = "aliceblue";
      ans2.style.backgroundColor = "aliceblue";
      ans3.style.backgroundColor = "grey";
      ans4.style.backgroundColor = "aliceblue";
      selected = ans3.value;
  })
  
  // Show selection for ans4
  ans4.addEventListener("click", () => {
      ans1.style.backgroundColor = "aliceblue";
      ans2.style.backgroundColor = "aliceblue";
      ans3.style.backgroundColor = "aliceblue";
      ans4.style.backgroundColor = "grey";
      selected = ans4.value;
  })
  
  // Grabbing the evaluate button
  const evaluate = document.getElementsByClassName("evaluate");
  
  // Evaluate method
  evaluate[0].addEventListener("click", () => {
      if (selected == "true") {
          results[0].innerHTML = "True";
          results[0].style.color = "green";
      } else {
          results[0].innerHTML = "False";
          results[0].style.color = "red";
          timerCount=timerCount-5;
      }
  })
  
  const next = document.getElementsByClassName('next')[0];
 
  next.addEventListener("click", () => {
    
    
    if (id < 7) {
        id++;
        loadQuiz(id);
        console.log(id);
    }
    else{
      quizContainer.innerText= "game over";
      getInitials();
      id=0;
     


  }
 
})

 
}
 







// display quiz after start button is clicked
startBtn.addEventListener("click",loadQuiz);

startBtn.addEventListener("click",startTimer);


// on submit, show resultsContainer
//submitButton.addEventListener('click', showResults);
resetBtn.addEventListener('click',loadQuiz);
id=0;
resetBtn.addEventListener('click',startTimer);
