// startButton
var startButton = document.getElementById("start-button")
var index = 0;
console.log(startButton)
// questionsArray [{}]
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
startButton.addEventListener("click", function(){
    var startElement = document.getElementById("start");
    startElement.setAttribute("class", "hide")
    var quizElement = document.getElementById("quiz");
    quizElement.removeAttribute("class");
    buildQuestion();
})
function buildQuestion() {
    var quizTitle = document.getElementById("question-title");
    quizTitle.textContent = questionsArray[index].text;
    var buttonBox = document.getElementById("button-box");
    buttonBox.innerHTML = "";
    questionsArray[index].choices.forEach(function(choice) {
        var button = document.createElement("button");
        button.textContent = choice;
        button.setAttribute("value", choice)
        button.onclick = function() {
            console.log(this.value)
            if (this.value === questionsArray[index].answer) {
                console.log("right");
            }
            else {
                console.log("wrong");
            }
            index++;
            if(index === questionsArray.length) {
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