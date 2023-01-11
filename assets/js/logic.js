var startTime = 75;
var timerEl = document.getElementById("time");
var startButton = document.getElementById("start");

function countdown() {

    // Initializing the timer for the start of the quiz.
    var timeLeft = startTime;
    
    // The `setInterval()` method is used to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {

            if(timeLeft === 0) {
                // When time is over the interval functions is cleared.
                clearInterval(timeInterval);

                // Setting the content of timer to indicate time is over.
                timerEl.textContent = 0;
                return;
            }

            // At intervals of 1 second the time left is displayed on the screen.
            timerEl.textContent = timeLeft;
            timeLeft--;
        }, 1000);
}

startButton.addEventListener("click", function(){
    countdown();
});