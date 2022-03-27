// GLOBAL VARIABLES //
var startButton = document.getElementById("start-button");
// I DONT REALLY UNDERSTAND WHAT THIS DOES:
var i = 0;
var score = 0;

// EXPLAINING THE CONTENT OF EACH QUESTION IN THE QUIZ //
var questionsArray = [
    {
        text: "question one",
        choices: [1, 2, 3],
        answer: 3
    },
    {
        text: "question two",
        choices: [1, 2, 3],
        answer: 3
    },
    {
        text: "question three",
        choices: [1, 2, 3],
        answer: 3
    }, 
]


// EVERYTHING UNDER THIS LINE WAS DONE DURING TUTOR SESSION 3.26.22 //

// THIS LISTENER WILL HIDE THE START PAGE&SHOW THE FIRST QUESTION WHEN THE BUTTON IS CLICKED
startButton.addEventListener("click", function(){
// HIDE THE START PAGE:
    var startElement = document.getElementById("start");
    startElement.setAttribute("class", "hide")
// SHOW THE QUESTIONS:
    var quizElement = document.getElementById("quiz");
    quizElement.removeAttribute("class");
// CALL THE FUNCTION TO START BUILDING THE QUESTIONS:
    buildQuestion();
})

// THIS FUNCTION WILL DISPLAY A QUESTION FOR THE USER TO ANSWER //
function buildQuestion() {
// THIS WILL DISPLAY THE TEXT ATTRIBUTE OF THE QUESTIONS ARRAY //
    var quizTitle = document.getElementById("question-title");
    quizTitle.textContent = questionsArray[i].text;
// !!!!!! I DONT KNOW WHAT THIS DOES
    var buttonBox = document.getElementById("button-box");
    buttonBox.innerHTML = "";
// THIS LOCAL FUNCTION  WILL RUN THROUGH QUESTIONS ARRAY UNTIL ALL ASKED AND ANSWERED //
    questionsArray[i].choices.forEach(function(choice) {
        var button = document.createElement("button");
// THIS DECLARES THAT WHEN THE USER CLICKS A BUTTON TO MAKE A CHOICE...
        button.textContent = choice;
// THIS SETS AN ATTRIBUTE "VALUE" WHICH IS EQUAL TO THE CHOICE THE USER MADE
        button.setAttribute("value", choice)
// THE USER MAKES THE CHOICE BASED 
        button.onclick = function() {
            console.log(this.value)
            console.log(questionsArray[i].answer)

            if (this.value == questionsArray[i].answer) {
                console.log("right");
            }
            else {
                console.log("wrong");
            }

            i++;

            if (i === questionsArray.length) {
                console.log("end game");
            }
            else {
                buildQuestion();
            }
        }
        buttonBox.appendChild(button);
    })
}
var highscores = []
var scoreObj = {
    name: "CQY",
    score: 10
}
highscores.push(scoreObj)
// EVERYTHING ABOVE THIS LINE WAS DONE DURING TUTOR SESSION 3.26.22 //