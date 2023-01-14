var startTime = 75;
var timerEl = document.getElementById("time");
var startButton = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var submitButton = document.getElementById("submit");
var nameInitials = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

// Object used for storing the total score and time left in the quiz, and to check if it is the end of quiz.
var scores = {
    scoreTotal : 0,
    timeLeft: 75,
    endOfQuiz: false
};

// This object stores the users initials and their corresponding scores.
var scoreData = {
    initial : "",
    score : 0
}

// An array to store the list of users with their scores, which needs to be stored in local storage.
scoreDataLocal = [];

// Gets the initial data from the local storage containing the initials of users who have taken the quiz with their scores.
var initializeHighScores = function() {
    var highScoresData = localStorage.getItem("highestScores");
    if(highScoresData != null) {
        scoreDataLocal = JSON.parse(highScoresData) ;
    }
}

// Updates the high scores data with the new users initials and score.
var storeHighScores = function() {
    initializeHighScores();
    scoreDataLocal.push(scoreData);
    localStorage.setItem("highestScores", JSON.stringify(scoreDataLocal));
}

function countdown() {

    // Initializing the timer for the start of the quiz.
    scores.timeLeft = startTime;
    
    // The `setInterval()` method is used to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {

            if(scores.timeLeft <= 0 || scores.endOfQuiz) {
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

// This function is used to indicate the start of quiz.
startButton.addEventListener("click", function(){
    startScreen.classList.add("hide");

    // Starts the timer for quiz.
    countdown();
    
    // Starts the quiz with the first question.
    displayQuiz();
});

// This function displays the screen at the end of the quiz.
function displayEndScreen() {
    if(scores.timeLeft < 0) {
        scores.scoreTotal = 0;
    } else {

        // Total score is calculated by setting the time left at the end of quiz.
        scores.scoreTotal = scores.timeLeft;
    }

    // Following statements are executed to display the div containing the end screen and to hide the other divs.
    quizScreen.classList.add("hide");
    feedbackEl.classList.remove("feedback");
    endScreen.classList.remove("hide");
    
    // The final score in quiz is displayed in the end screen.
    finalScoreEl.textContent = scores.scoreTotal;
}

// Function used to submit the initials of the user with their final scores.
submitButton.addEventListener("click", function(){

    scoreData.initial = nameInitials.value;
    scoreData.score = scores.scoreTotal;

    storeHighScores();

    // Displays the highscores screen after the user submits their scores.
    window.location.href = "highscores.html";

});
