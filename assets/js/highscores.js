var nameHighscore = document.querySelector("#nameHighscore");
var goBack = document.querySelector("#goBack");
var clearHighscores = document.querySelector("#clearHighscores");

if(localStorage.getItem("HighscoreInitials") != null 
    && localStorage.getItem("HighscoreNumber") != null)
{
    nameHighscore.textContent = localStorage.getItem("HighscoreInitials") + " - "
    + localStorage.getItem("HighscoreNumber");
}
else{
    nameHighscore.textContent = "";
}

goBack.addEventListener("click", function(){
    window.location.href = "index.html";
})

clearHighscores.addEventListener("click", function(){
    localStorage.clear();
    nameHighscore.textContent = "";
})