// GLOBAL VARIABLES //
var startButton = document.getElementById("start-button");
// THIS IS DESCRIBING THAT THE VARIABLE "i" IS EQUAL TO THE FIRST ELEMENT IN AN ARRAY:
var i = 0;
// THIS IS DESCRIBING THAT THE VARIABLE "score" INITIALLY STARTS AT 0 POINTS:
var score = 0;

// EXPLAINING THE CONTENT OF EACH QUESTION IN THE QUIZ //
var questionsArray = [
    {
        text: "question one",   // THIS IS A REFERENCE TO HTML ELEMENT*
        choices: [1, 2, 3],     // THIS DESCRIBES THE POSSIBLE CHOICES THE USER CAN MAKE
        answer: 2               // THIS IS THE CORRECT ANSWER 
    },
    {
        text: "question two",   // THIS IS A REFERENCE TO HTML ELEMENT*
        choices: [1, 2, 3],     // THIS DESCRIBES THE POSSIBLE CHOICES THE USER CAN MAKE
        answer: 3               // THIS IS THE CORRECT ANSWER 
    },
    {
        text: "question three", // THIS IS A REFERENCE TO HTML ELEMENT*
        choices: [1, 2, 3],     // THIS DESCRIBES THE POSSIBLE CHOICES THE USER CAN MAKE
        answer: 1               // THIS IS THE CORRECT ANSWER 
    }, 
]
// ***(WHERE I AM BUILDING OUT THE QUESTIONS TITLE, BODY, ANSWERS, RATHER THAN IN JS).


// EVERYTHING UNDER THIS LINE WAS DONE DURING TUTOR SESSION 3.26.22 //

// THIS LISTENER WILL HIDE THE START PAGE&SHOW THE FIRST QUESTION WHEN THE BUTTON IS CLICKED
startButton.addEventListener("click", function() {
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
// THE USER MAKES THE CHOICE BY CLICKING THE BUTTON WITH THE CORRECT ANSWER
        button.onclick = function() {
            console.log(this.value)
            console.log(questionsArray[i].answer)
// IF THE CHOICE THE USER MADE IS THE CORRECT ANSWER:
            if (this.value == questionsArray[i].answer) {
                console.log("right");
            }
// IF THE CHOICE THE USER MADE IS ANYTHING *BUT* THE CORRECT ANSWER:
            else {
                console.log("wrong");
            }
// THIS DECLARATION SHOWS THAT THE VALUE "i" IS INCREASING BY A FACTOR OF 1 EACH TIME:
            i++;
// WHEN ALL QUESTIONS HAVE BEEN ASKED AND ANSWERED: 
            if (i === questionsArray.length) {
// CALL FUNCTION TO END GAME
                console.log("end game");
            }
// IF THERE ARE STILL QUESTIONS THAT NEED TO BE ASKED:
            else {
                buildQuestion();
            }
        }
// IN THE HTML ELEMENT BUTTON BOX, THE CONTENT(BUTTON) WILL BE APENDED TO REFLECT CHANGES:
        buttonBox.appendChild(button);
    })
}
// THIS IS THE END OF THE FUNCTION TO DISPLAY A QUESTION FOR THE USER TO ANSWER //


// THIS IS THE VARIABLE WHERE I AM DEFINING THE USER'S DATE AS HIGHSCORE*
var highscores = []
// *** I'M GOING TO BUILD OUT THE STRUCTURE FOR DISPLAYING HIGHSCORE IN HTML
// *** AS WITH THE QUESTIONS, I WOULD PREFER TO DESIGN THEM IN HTML AND CSS
// *** AND REFER TO THEM HERE IN JS TO MANIPULATE THE GAME FUNCTIONS.

// THIS VARIABLE WILL DEFINE "SCORE" AS AN OBJECT:
var scoreObj = {
    name: "srb", // THIS IS THE USER'S INITIALS
    score: 10 // THIS IS THE USER'S SCORE RESULTS = (CORRECT-ANSWER || TIME-LEFT)
}
// THIS IS A STATEMENT TO PUSH THE USER'S SCORE RESULTS INTO THE OBJECT "SCORE":
highscores.push(scoreObj)

// EVERYTHING ABOVE THIS LINE WAS DONE DURING TUTOR SESSION 3.26.22 //