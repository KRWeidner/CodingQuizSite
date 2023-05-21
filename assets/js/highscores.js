var nameHighscore = document.querySelector("#nameHighscore");
var goBack = document.querySelector("#goBack");
var clearHighscores = document.querySelector("#clearHighscores");

console.log(localStorage.getItem("Highscore"));
nameHighscore.textContent = JSON.parse(localStorage.getItem("Highscore"));

goBack.addEventListener("click", function(){
    window.location.href = "index.html";
})

clearHighscores.addEventListener("click", function(){
    localStorage.clear();
})