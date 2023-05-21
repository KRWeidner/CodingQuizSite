var timerElement = document.querySelector("#timerSeconds");
var startQuizButton = document.querySelector(".startQuizButton");
var questionText = document.querySelector("#questionText");
var questionNumber = document.querySelector("#questionNumber");
var quizSummaryText = document.querySelector("#quizSummaryText");
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");
var answerResult = document.querySelector("#answerResult");
var finalScore = document.querySelector("#finalScore");

var timer;
var timerCount = 75;
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

function startQuiz() {
    var firstPage = document.querySelector(".firstPage");
    firstPage.setAttribute("style", "display:none");
    startTimer();
    answerQuestions();
}

function answerQuestions() {

}

function startTimer() {
    // Sets timer
    timer = setInterval(function () {
        timerElement.textContent = timerCount;
        // if time =0 or all questions are answered
        if (timerCount === 0) {
            // Clears interval and go to final page
            clearInterval(timer);
        }
        timerCount--;
    }, 1000);
}



document.addEventListener("click", function (event) {
    
});