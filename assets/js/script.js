// GLOBAL VARIABLES:

var startButton = document.getElementById("start-button");

var index = 0;

var score = 0;

var count = 10;

// NEED TO MAKE A LISTENER EVENT TO SHOW WHEN AN A QUESTION HAS BEEN ANSWERED
// !!!

// EXPLAINING THE CONTENT OF EACH QUESTION IN THE QUIZ //
var questionsArray = [
  {
    // THIS IS A REFERENCE TO HTML ELEMENT*
    text: "this is text",
    // THIS DESCRIBES THE POSSIBLE CHOICES THE USER CAN MAKE
    choices: [1, 2, 3],
    // THIS IS THE CORRECT ANSWER
    answer: 2,
  },
  {
    text: "",
    choices: [1, 2, 3],
    answer: 3,
  },
  {
    text: "",
    choices: [1, 2, 3],
    answer: 1,
  },
  {
    text: "",
    choices: [1, 2, 3],
    answer: 2,
  },
  {
    text: "",
    choices: [1, 2, 3],
    answer: 1,
  },
  {
    text: "",
    choices: [1, 2, 3],
    answer: 3,
  },
  {
    text: "",
    choices: [1, 2, 3],
    answer: 3,
  },
];

console.log(questionsArray);

var counter;

function runTimer() {
  count--;
  if (count <= 0) {
    count = 0;
  }
  if (count === 0) {
    console.log("Out of Time.");
    clearInterval(counter);
  }
  document.getElementById("timerText").innerHTML = count + " seconds left";
}

startButton.addEventListener("click", function () {
  // HIDE THE START PAGE:
  var startElement = document.getElementById("start");
  startElement.setAttribute("class", "hide");

  // // SHOW THE QUESTIONS:
  // var quizElement = document.getElementById("all-questions");
  // quizElement.removeAttribute("class");

  // CALL THE FUNCTION TO START BUILDING THE QUESTIONS:
  var questionEl = document.getElementById("all-questions");

  questionEl.removeAttribute("class");
  counter = setInterval(runTimer, 1000);

  startQuestions();
});

// THIS FUNCTION WILL DISPLAY A QUESTION FOR THE USER TO ANSWER:
function startQuestions() {
  // THIS WILL DISPLAY THE TEXT ATTRIBUTE OF THE QUESTIONS ARRAY //
  var quizTitle = document.getElementById("question-title");
  quizTitle.textContent = questionsArray[index].text;

  var buttonBox = document.getElementById("button-box");
  buttonBox.innerHTML = "";

  // THIS LOCAL FUNCTION  WILL RUN THROUGH QUESTIONS ARRAY UNTIL ALL ASKED AND ANSWERED //
  questionsArray[index].choices.forEach(function (choice) {
    var button = document.createElement("button");
    // THIS DECLARES THAT WHEN THE USER CLICKS A BUTTON TO MAKE A CHOICE...
    button.textContent = choice;
    // THIS SETS AN ATTRIBUTE "VALUE" WHICH IS EQUAL TO THE CHOICE THE USER MADE
    button.setAttribute("value", choice);
    // THE USER MAKES THE CHOICE BY CLICKING THE BUTTON WITH THE CORRECT ANSWER:
    button.onclick = function () {
      // show me:
      console.log(this.value);
      // show me:
      console.log(questionsArray[index].answer);

      // IF THE CHOICE THE USER MADE IS THE CORRECT ANSWER:
      if (this.value == questionsArray[index].answer) {
        // show me:
        console.log("right");
      }
      // IF THE CHOICE THE USER MADE IS ANYTHING *BUT* THE CORRECT ANSWER:
      else {
        // show me:
        console.log("wrong");
        //assignment operator:
        count -= 10;
      }

      // THIS DECLARATION SHOWS THAT THE VALUE "i" IS INCREASING BY A FACTOR OF 1 EACH TIME:
      index++;
      // WHEN ALL QUESTIONS HAVE BEEN ASKED AND ANSWERED:
      if (index === questionsArray.length) {
        // CALL FUNCTION TO END GAME

        // show me:
        var questionEl = document.getElementById("all-questions");
        questionEl.setAttribute("class", "hide");
        console.log("end game");
      }

      // IF THERE ARE STILL QUESTIONS THAT NEED TO BE ASKED:
      else {
        startQuestions();
      }
    };

    // IN THE HTML ELEMENT BUTTON BOX, THE CONTENT(BUTTON) WILL BE APENDED TO REFLECT CHANGES:
    buttonBox.appendChild(button);
  });
}
// THIS IS THE END OF THE FUNCTION TO DISPLAY A QUESTION FOR THE USER TO ANSWER //

// HIGH-SCORE DATA:
var highscores = [];

// THIS VARIABLE WILL DEFINE "SCORE" AS AN OBJECT:
var scoreObj = {
  name: "srb", // THIS IS THE USER'S INITIALS
  score: 10, // THIS IS THE USER'S SCORE RESULTS = (CORRECT-ANSWER || TIME-LEFT)
};

// THIS IS A STATEMENT TO PUSH THE USER'S SCORE RESULTS INTO THE OBJECT "SCORE":
highscores.push(scoreObj);
