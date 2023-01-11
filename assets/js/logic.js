var startTime = 75;
var timerEl = document.getElementById("time");
var startButton = document.getElementById("start");
var startScreen = document.getElementById("start-screen");

var scores = {
    scoreTotal : 0,
    timeLeft: 75
};

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