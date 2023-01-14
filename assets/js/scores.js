var highScoresEl = document.getElementById("highscores");
var clearScoresEl = document.getElementById("clear");

// Gets the high scores list from the local storage.
var highScoresLocal = localStorage.getItem("highestScores");

// Object of high scores list.
var highScoresList = JSON.parse(highScoresLocal);

// Checks if the object returned from local storage is not null.
if(highScoresList != null) {

    // Sorts the list of scores in decending order.
    highScoresList.sort(function(a, b){return a.score - b.score});
    highScoresList.reverse();

    // Adds the list element for every user and their scores to be displayed in the website.
    for(var i=0; i<highScoresList.length; i++){

        var listItemEl = document.createElement("li");

        listItemEl.textContent = highScoresList[i].initial+" - "+highScoresList[i].score;
        highScoresEl.appendChild(listItemEl);
    }
}

// Function for clearing all the existing highscores list by removing them from the local storage.
clearScoresEl.addEventListener("click", function(){

    localStorage.removeItem("highestScores");

    // Updates the existing list displayed on the website, after removing the list from local storage.
    highScoresEl.innerHTML = "";
    
});