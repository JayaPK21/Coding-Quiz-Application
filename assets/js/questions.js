var quizScreen = document.getElementById("questions");
var endScreen = document.getElementById("end-screen");
var questionEl = document.getElementById("question-title");
var choicesEl = document.getElementById("choices");

var button1El = document.createElement("button");
var button2El = document.createElement("button");
var button3El = document.createElement("button");
var button4El = document.createElement("button");

var quizObjOne = {
    question : "first question?",
    choiceList : ["option1", "option2", "option3", "option4"],
    correctAnswer : 2
};

var quizObjTwo = {
    question : "second question?",
    choiceList : ["a", "b", "optionc", "optiond"],
    correctAnswer : 0
};

var quizObjThree = {
    question : "third question?",
    choiceList : ["optiona", "b", "optionc", "optiond"],
    correctAnswer : 0
};

var quizObjFour = {
    question : "fourth question?",
    choiceList : ["optiona", "optionb", "optionc", "optiond"],
    correctAnswer : 0
};

var quizObjFive = {
    question : "fifth question?",
    choiceList : ["a", "b", "optionc", "optiond"],
    correctAnswer : 0
};

var quizObjList = [quizObjOne, quizObjTwo, quizObjThree, quizObjFour, quizObjFive];
var quizListIndex = 0;

function displayQuiz() {

    quizScreen.classList.remove("hide");
    displayQuestion(quizObjList[quizListIndex]);
}

function displayQuestion(quizObj) {
    console.log(JSON.stringify(quizObj));
    questionEl.textContent = quizObj.question;

    button1El.textContent = quizObj.choiceList[0];
    button2El.textContent = quizObj.choiceList[1];
    button3El.textContent = quizObj.choiceList[2];
    button4El.textContent = quizObj.choiceList[3];
    
    choicesEl.appendChild(button1El);
    choicesEl.appendChild(button2El);
    choicesEl.appendChild(button3El);
    choicesEl.appendChild(button4El);

    quizListIndex++;
    choicesEl.addEventListener("click", function(event) {
        event.stopImmediatePropagation();
        if(quizListIndex === quizObjList.length){
            displayEndScreen();
            return;
        }
        console.log("quiz index: "+quizListIndex);
        displayQuestion(quizObjList[quizListIndex]);
    }); 
}

function displayEndScreen() {
    quizScreen.classList.add("hide");
    endScreen.classList.remove("hide");
}