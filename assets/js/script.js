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
var submitFinalScoreButton = document.querySelector("#submitFinalScore");
var inputBox = document.querySelector("#inputBox");
var resultDiv = document.querySelector(".resultDiv");

//defining some constants including our timer clock and our question options
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

var highscoreInital;
var highscoreNumber;

//on click start quiz button, run function startQuiz and set firstPage to display none
//quiz section and final results section start as display none
startQuizButton.addEventListener("click", startQuiz);
quizPages.setAttribute("style", "display:none");
finalScorePage.setAttribute("style", "display:none");

//start timer countdown, change display values and call answerQuestion function
function startQuiz() {
    startTimer();
    firstPage.setAttribute("style", "display:none");
    resultDiv.setAttribute("style","display:none");
    quizPages.setAttribute("style", "display:flex");
    answerQuestions(questionCount);
}

//while questionCount < the total number of questions, set question text element,
//question number, and all the option buttons text
//if we've reached the end of the questions go to final results section
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
        //wiat 2 seconds before moving so we can display correct or wrong for
        //the user for the last question
        setTimeout(function() {
            displayFinalResults();
        },2000);
    }
}

//on click from any of the option buttons, retrieve textContent from clicked button,
//if that answer matches the correct answer, set result element to correct,
//otherwise set to wrong and - 10 sceonds from clock. 
//Increment the questionCounter and recall answerQuestion function to load next question
buttons.forEach(item => {item.addEventListener("click", function(event) {
    resultDiv.setAttribute("style","display:flex");
    if(event.target.textContent === quizQuestions[questionCount].answer)
    {
        answerResult.setAttribute("style","color:green");
        answerResult.textContent = "Correct!";
        questionCount++;
        answerQuestions(questionCount); 
    }
    else{
        answerResult.setAttribute("style","color:red");
        answerResult.textContent = "Wrong";
        questionCount++;
        timerCount = timerCount-10;
        answerQuestions(questionCount);  
    }        
})});

//displays the last section final results, displays score, clears clock
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
        timerCount--;
        timerElement.textContent = timerCount;
        // if time =0 or all questions are answered
        if (timerCount === 0) {
            // Clears interval and go to final page
            clearInterval(timer);
            displayFinalResults();
        }
    }, 1000);
}

//on click of submit button on results final section, 
//check if we have value already in localstorage and compare if so to get the highest number
//if score is null or better, set localstorage variable to new name and score
//redirect to highscore.html page
submitFinalScoreButton.addEventListener("click", function(){
    var number = localStorage.getItem("HighscoreNumber");
    if(number === null || number < finalScore.textContent)
    {
        localStorage.setItem("HighscoreNumber", finalScore.textContent);
        localStorage.setItem("HighscoreInitials", inputBox.value);
    }
    window.location.href = "highscores.html";
})