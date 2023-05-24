var nameHighscore = document.querySelector("#nameHighscore");
var goBack = document.querySelector("#goBack");
var clearHighscores = document.querySelector("#clearHighscores");

//if localstorage does not have value for name and score, display blank
//else display the name and score from localstorage
if(localStorage.getItem("HighscoreInitials") != null 
    && localStorage.getItem("HighscoreNumber") != null)
{
    nameHighscore.textContent = localStorage.getItem("HighscoreInitials") + " - "
    + localStorage.getItem("HighscoreNumber");
}
else{
    nameHighscore.textContent = "";
}

//go back button redirects back to index.hmtl
goBack.addEventListener("click", function(){
    window.location.href = "index.html";
})

//clear button clears everything in localstoarge and sets displayed text to blank
//otherwise this shows as null
clearHighscores.addEventListener("click", function(){
    localStorage.clear();
    nameHighscore.textContent = "";
})