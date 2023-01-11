var quizScreen = document.getElementById("questions");
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
    choiceList : ["option1", "option2", "option3", "option4"],
    correctAnswer : 0
};

function displayQuiz() {

    quizScreen.classList.remove("hide");
    questionEl.textContent = quizObjOne.question;

    button1El.textContent = quizObjOne.choiceList[0];
    button2El.textContent = quizObjOne.choiceList[1];
    button3El.textContent = quizObjOne.choiceList[2];
    button4El.textContent = quizObjOne.choiceList[3];
    
    choicesEl.appendChild(button1El);
    choicesEl.appendChild(button2El);
    choicesEl.appendChild(button3El);
    choicesEl.appendChild(button4El);
}