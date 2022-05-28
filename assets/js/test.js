// TEST SCRIPT BASED ON TUTORIAL FROM: 
    // https://www.sitepoint.com/simple-javascript-quiz/
    // TO HELP FIX SOME ISSUES I RAN INTO.
    //____________________________________//

// GLOBAL VARIABLES
var quizBox = document.getElementById("all-questions");
var submitButton = document.getElementById("submit");
var highScoresBox = document.getElementById("high-scores");

// ARRAY FOR MY QUESTIONS
var allQuestions = [
  {
    // QUESTION TEXT:
    question: "What does HTML stand for?",
    // POSSIBLE CHOICES:
    choices: {
      1: "Hyper Test Manager Language",
      2: "Hyper Text Markup Language",
      3: "Hard Time Markup Loss",
    },
    // CORRECT ANSWER:
    rightAnswer: "2",
  },
  {
    // QUESTION TEXT:
    question: "How many fingers am I holding up?",
    // POSSIBLE CHOICES:
    choices: {
      1: "two",
      2: "seven",
      3: "four",
    },
    // CORRECT ANSWER:
    rightAnswer: "1",
  },
  {
    // QUESTION TEXT:
    question: "?",
    // POSSIBLE CHOICES:
    choices: {
      1: "42",
      2: "yes",
      3: "!",
    },
    // CORRECT ANSWER:
    rightAnswer: "3",
  },
  {
    // QUESTION TEXT:
    question: "Do you believe birds are real?",
    // POSSIBLE CHOICES:
    choices: {
      1: "yes",
      2: "NO",
      3: "what?",
    },
    // CORRECT ANSWER:
    rightAnswer: "2",
  },
];

// FUNCTION TO START QUIZ
function startQuestions() {
    // THIS IS WHERE I STORE THE HTML OUTPUT:
    var output = [];

    // FOR EACH QUESTION:
    allQuestions.forEach {
        (userQuestion, questionNumber) => {
            // VARIABLE TO STORE POSSIBLE CHOICES:
            var choices = [];

            // SHOW EACH CHOICE AS:
            for(letter in userQuestion.choices) {


            }
        }
    }
};



// FUNCTION TO SHOW SCORE
function showScore() {

};

// START QUIZ
startQuestions();

// ON SUBMIT BUTTON CLICK, SHOW SCORE
submitButton.addEventListener("click", showScore);
