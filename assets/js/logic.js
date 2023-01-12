var startTime = 75;
var timerEl = document.getElementById("time");
var startButton = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var submitButton = document.getElementById("submit");
var nameInitials = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

var scores = {
    scoreTotal : 0,
    timeLeft: 75
};

var scoreData = {
    initial : "",
    score : 0
}

scoreDataLocal = [];

function countdown() {

    // Initializing the timer for the start of the quiz.
    scores.timeLeft = startTime;
    
    // The `setInterval()` method is used to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {

            if(scores.timeLeft <= 0) {
                // When time is over the interval functions is cleared.
                clearInterval(timeInterval);

                // Setting the content of timer to indicate time is over.
                timerEl.textContent = 0;
                displayEndScreen();
                return;
            }

            // At intervals of 1 second the time left is displayed on the screen.
            timerEl.textContent = scores.timeLeft;
            scores.timeLeft--;
        }, 1000);
}

startButton.addEventListener("click", function(){
    startScreen.classList.add("hide");
    countdown();
    
    displayQuiz();
});

function displayEndScreen() {
    scores.timeLeft = 0;
    quizScreen.classList.add("hide");
    feedbackEl.classList.remove("feedback");
    endScreen.classList.remove("hide");
    
    finalScoreEl.textContent = scores.scoreTotal;
}

submitButton.addEventListener("click", function(){

    scoreData.initial = nameInitials.value;
    scoreData.score = scores.scoreTotal;

    storeHighScores();
    console.log(scoreData.initial);

    window.location.href = "highscores.html";

});

function initializeHighScores() {
    var highScoresData = localStorage.getItem("highestScores");
    if(highScoresData != null) {
        scoreDataLocal = JSON.parse(highScoresData) ;
    }
}

function storeHighScores() {
    initializeHighScores();
    scoreDataLocal.push(scoreData);
    localStorage.setItem("highestScores", JSON.stringify(scoreDataLocal));
    console.log(scoreDataLocal);
}