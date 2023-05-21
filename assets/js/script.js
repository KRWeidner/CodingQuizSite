var timerElement = document.querySelector("#timerSeconds");
var startQuizButton = document.querySelector(".startQuizButton");
var questionText = document.querySelector("#questionText");
var questionNumber = document.querySelector("#questionNumber");
var quizSummaryText = document.querySelector("#quizSummaryText");
var buttons = document.querySelectorAll(".buttons")
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");
var answerResult = document.querySelector("#answerResult");
var finalScore = document.querySelector("#finalScore");
var quizPages = document.querySelector(".quizPages");
var finalScorePage = document.querySelector(".finalScorePage");
var firstPage = document.querySelector(".firstPage");

var timer;
var timerCount = 75;
var questionCount = 0;
var quizQuestions = [{
    question: "_____ are used to store information that will be referenced and manipulated in a computer program.",
    answer: "Variables",
    options: ["Modules", "Actions", "Variables", "Timers"]
}, {
    question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    answer: "alt",
    options: ["alt", "src", "title", "desc"]
}, {
    question: "Which CSS property controls the text size?",
    answer: "font-size",
    options: ["font-style", "font-size", "text-style", "text-size"]
}, {
    question: "_____ are functions passed into another function as an argument.",
    answer: "Callback Functions",
    options: ["Callback Functions", "Async Functions", "Regular Functions", "Argument Functions"]
}, {
    question: "Which method removes an item from an array?",
    answer: "pop()",
    options: ["concat()", "push()", "splice()", "pop()"]
}]

startQuizButton.addEventListener("click", startQuiz);
quizPages.setAttribute("style", "display:none");
finalScorePage.setAttribute("style", "display:none");

function startQuiz() {
    startTimer();
    firstPage.setAttribute("style", "display:none");
    quizPages.setAttribute("style", "display:flex");
    answerQuestions(questionCount);
}

function answerQuestions(i) {
    if(i < quizQuestions.length){
        questionNumber.textContent = questionCount + 1;
        questionText.textContent = quizQuestions[i].question;
        button1.textContent = quizQuestions[i].options[0];
        button2.textContent = quizQuestions[i].options[1];
        button3.textContent = quizQuestions[i].options[2];
        button4.textContent = quizQuestions[i].options[3]; 
    }
    else{
        displayFinalResults();
    }
}

buttons.forEach(item => {item.addEventListener("click", function(event) {
    console.log(event.target.textContent + " "+quizQuestions[questionCount].answer);
    if(event.target.textContent === quizQuestions[questionCount].answer)
    {
        answerResult.textContent = "Correct!";
        questionCount++;
        answerQuestions(questionCount); 
    }
    else{
        answerResult.textContent = "Wrong";
        questionCount++;
        timerCount = timerCount-10;
        answerQuestions(questionCount);  
    }        
})});

function displayFinalResults() {
    quizPages.setAttribute("style", "display:none");
    finalScorePage.setAttribute("style", "display:flex");
    finalScore.textContent = timerCount;
    clearInterval(timer);
    timerElement.textContent = 0;
}

function startTimer() {
    // Sets timer
    timer = setInterval(function () {
        timerElement.textContent = timerCount;
        // if time =0 or all questions are answered
        if (timerCount === 0) {
            // Clears interval and go to final page
            clearInterval(timer);
            displayFinalResults();
        }
        timerCount--;
    }, 1000);
}