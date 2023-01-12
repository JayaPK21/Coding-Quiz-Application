var quizScreen = document.getElementById("questions");
var endScreen = document.getElementById("end-screen");
var questionEl = document.getElementById("question-title");
var choicesEl = document.getElementById("choices");
var finalScoreEl = document.getElementById("final-score");

var button1El = document.createElement("button");
var button2El = document.createElement("button");
var button3El = document.createElement("button");
var button4El = document.createElement("button");

var buttonList = [button1El, button2El, button3El, button4El];

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

var quizObjList = [quizObjOne, quizObjTwo, quizObjThree, quizObjFour, quizObjFive];
var quizListIndex = 0;

function displayQuiz() {

    quizScreen.classList.remove("hide");
    feedbackEl.classList.remove("hide");
    displayQuestion(quizObjList[quizListIndex]);
}

function displayQuestion(quizObj) {
    var correctAnswer = quizObj.correctAnswer;
    // console.log(JSON.stringify(quizObj));
    // console.log("Correct Answer test: "+correctAnswer);
    questionEl.textContent = quizObj.question;

    for(var i=0; i < buttonList.length; i++) {
        buttonList[i].textContent = quizObj.choiceList[i];

        if(quizObj.correctAnswer === i) {

            buttonList[i].setAttribute("data-answer", "correct");

        } else {

            buttonList[i].setAttribute("data-answer", "wrong");
        }
        
        choicesEl.appendChild(buttonList[i]);
    }

    quizListIndex++;
    choicesEl.addEventListener("click", function(event) {
        event.stopImmediatePropagation();

        var currElement = event.target;
        console.log("Data index: "+currElement.dataset.answer);
        // console.log("Correct Answer: "+correctAnswer);
        if(currElement.dataset.answer === "correct"){
            console.log("Correct Answer!");
            scores.scoreTotal = scores.scoreTotal + 20;
            feedbackEl.textContent = "Correct!";
        }else{
            console.log("Wrong Answer!");
            scores.timeLeft = scores.timeLeft - 10;
            feedbackEl.textContent = "Wrong!";
        }
        if(quizListIndex === quizObjList.length){
            displayEndScreen();
            return;
        }
        // console.log("quiz index: "+quizListIndex);
        // console.log("Total Score: "+scores.scoreTotal);
        displayQuestion(quizObjList[quizListIndex]);
    }); 
}
