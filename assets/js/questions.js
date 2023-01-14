// Creating an object that can be called to play the corresponding sounds when the selected answer is right or wrong in the quiz.
var correctAnsAudio = new Audio("assets/sfx/correct.wav");
var wrongAnsAudio = new Audio("assets/sfx/incorrect.wav");

var quizScreen = document.getElementById("questions");
var endScreen = document.getElementById("end-screen");
var questionEl = document.getElementById("question-title");
var choicesEl = document.getElementById("choices");
var finalScoreEl = document.getElementById("final-score");

// Buttons representing the corresponding choices for every question in the quiz.
var button1El = document.createElement("button");
var button2El = document.createElement("button");
var button3El = document.createElement("button");
var button4El = document.createElement("button");

// Holds the list of buttons for all the answer choices to every question in the quiz.
var buttonList = [button1El, button2El, button3El, button4El];

// Each quiz object represents a question and their corresponding answer choices in the quiz. The 'correctAnswer' property holds the index that corresponds to the correct choice element in the choiceList array.
var quizObjOne = {
    question : "Inside which HTML element do we put the JavaScript?",
    choiceList : ["<js>", "<javascript>", "<script>", "<scripting>"],
    correctAnswer : 2
};

var quizObjTwo = {
    question : "How do you call a function named \"myFunction\"?",
    choiceList : ["myFunction()", "call myFunction()", "call function myFunction()", "myFunction"],
    correctAnswer : 0
};

var quizObjThree = {
    question : "How can you add a comment in JavaScript?",
    choiceList : ["'This is a comment", "<!-- This is a comment -->", "// This is a comment", "(This is a comment)"],
    correctAnswer : 2
};

var quizObjFour = {
    question : "How do you create Arrays in JavaScript?",
    choiceList : ["var colors = (1:\"red\", 2:\"green\", 3:\"blue\")", 
                    "var colors = [\"red\", \"green\", \"blue\"]",
                    "var colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue\")",
                    "var colors = \"red\", \"green\", \"blue\""],
    correctAnswer : 1
};

var quizObjFive = {
    question : "Which of the following functions can you use to round to the lowest integer value?",
    choiceList : ["Math.random()", "Math.round()", "Math.ceil()", "Math.floor()"],
    correctAnswer : 3
};

// Holds the list of all questions in the quiz. The initial index for this array is set to 0.
var quizObjList = [quizObjOne, quizObjTwo, quizObjThree, quizObjFour, quizObjFive];
var quizListIndex = 0;

// Displays the quiz and the feedback screen. Then proceeds to display the first question in the quiz.
function displayQuiz() {

    quizScreen.classList.remove("hide");
    feedbackEl.classList.remove("hide");
    displayQuestion(quizObjList[quizListIndex]);
}

// Displays each question with their corresponding choices in the quiz.
function displayQuestion(quizObj) {

    // Sets the question text from quiz object to the question element in the html.
    questionEl.textContent = quizObj.question;

    // Loops through the button list to add a button for each answer choice for the question.
    for(var i=0; i < buttonList.length; i++) {
        buttonList[i].textContent = quizObj.choiceList[i];

        // Checks to see if the answer choice is the correct one for the question and sets the corresponding data attribute to the button element.
        if(quizObj.correctAnswer === i) {

            buttonList[i].setAttribute("data-answer", "correct");

        } else {

            buttonList[i].setAttribute("data-answer", "wrong");
        }
        
        choicesEl.appendChild(buttonList[i]);
    }

    // Increments the index for the quiz list to go to the next question.
    quizListIndex++;

    // This event is used to listen to the coice button that was selected and update the corresponding right or wrong choice made for the question.
    choicesEl.addEventListener("click", function(event) {
        event.stopImmediatePropagation();

        var currElement = event.target;

        // Checks the data attribute of the element selected to see if it is the right or wrong answer.
        if(currElement.dataset.answer === "correct"){
            console.log("Correct Answer!");

            // Plays the corresponding audio for the correct answer.
            correctAnsAudio.play();
            showAnswer("Correct!");
        }else{
            console.log("Wrong Answer!");

            // As the selected choice is wrong, 10 seconds is deducted from the timer.
            scores.timeLeft = scores.timeLeft - 10;

            // Plays the corresponding audio for the wrong answer.
            wrongAnsAudio.play();
            showAnswer("Wrong!");
        }

        // Checks to see if all the questions in the quiz has been attempted.
        if(quizListIndex === quizObjList.length){
            scores.endOfQuiz = true;
            displayEndScreen();
            return;
        }

        // If some questions are left, this function is called again to display the next question in the list.
        displayQuestion(quizObjList[quizListIndex]);
    }); 
}

// This function is used to display the feedback that says if the selected answer for a question is right or wrong. There is a timer set to display this feedback only for 100 milliseconds.
function showAnswer(answer) {
    var timeInterval = setInterval(myTimer, 100);

    function myTimer() {
        clearInterval(timeInterval);
        feedbackEl.textContent = "";
    }
    feedbackEl.textContent = answer;
}
