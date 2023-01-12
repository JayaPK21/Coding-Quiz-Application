var highScoresEl = document.getElementById("highscores");
var clearScoresEl = document.getElementById("clear");

var highScoresLocal = localStorage.getItem("highestScores");
var highScoresList = JSON.parse(highScoresLocal);

if(highScoresList != null) {
    highScoresList.sort(function(a, b){return a.score - b.score});
    highScoresList.reverse();

    for(var i=0; i<highScoresList.length; i++){

        var listItemEl = document.createElement("li");

        listItemEl.textContent = highScoresList[i].initial+" - "+highScoresList[i].score;
        highScoresEl.appendChild(listItemEl);
    }
}


clearScoresEl.addEventListener("click", function(){

    localStorage.removeItem("highestScores");
    highScoresEl.innerHTML = "";
    
});