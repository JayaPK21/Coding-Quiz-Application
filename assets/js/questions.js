var quizScreen = document.getElementById("questions");
var endScreen = document.getElementById("end-screen");
var questionEl = document.getElementById("question-title");
var choicesEl = document.getElementById("choices");

var button1El = document.createElement("button");
var button2El = document.createElement("button");
var button3El = document.createElement("button");
var button4El = document.createElement("button");

var buttonList = [button1El, button2El, button3El, button4El];

var quizObjOne = {
    question : "first question?",
    choiceList : ["option1", "option2", "option3", "option4"],
    correctAnswer : 1
};

var quizObjTwo = {
    question : "second question?",
    choiceList : ["a", "b", "optionc", "optiond"],
    correctAnswer : 0
};

var quizObjThree = {
    question : "third question?",
    choiceList : ["optiona", "b", "optionc", "optiond"],
    correctAnswer : 1
};

var quizObjFour = {
    question : "fourth question?",
    choiceList : ["optiona", "optionb", "optionc", "optiond"],
    correctAnswer : 0
};

var quizObjFive = {
    question : "fifth question?",
    choiceList : ["a", "b", "optionc", "optiond"],
    correctAnswer : 3
};

var quizObjList = [quizObjOne, quizObjTwo, quizObjThree, quizObjFour, quizObjFive];
var quizListIndex = 0;

function displayQuiz() {

    quizScreen.classList.remove("hide");
    displayQuestion(quizObjList[quizListIndex]);
}

function displayQuestion(quizObj) {
    var correctAnswer = quizObj.correctAnswer;
    console.log(JSON.stringify(quizObj));
    console.log("Correct Answer test: "+correctAnswer);
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
        scores.timeLeft = scores.timeLeft - 10;

        var currElement = event.target;
        console.log("Data index: "+currElement.dataset.answer);
        // console.log("Correct Answer: "+correctAnswer);
        if(currElement.dataset.answer === "correct"){
            console.log("Correct Answer!");
        }else{
            console.log("Wrong Answer!");
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

function displayEndScreen() {
    scores.timeLeft = 0;
    quizScreen.classList.add("hide");
    endScreen.classList.remove("hide");
}