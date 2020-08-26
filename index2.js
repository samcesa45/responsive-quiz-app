function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.correctAnswer = function (choice) {
  return choice == this.answer;
};

function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
  return this.questions[this.questionIndex];
};

Quiz.prototype.isEnded = function () {
  return this.questions.length === this.questionIndex;
};

Quiz.prototype.isCorrect = function (answer) {
  if (this.getQuestionIndex().correctAnswer(answer)) {
    this.score++;
  }
  this.questionIndex++;
};

var questions = [
  new Question(
    "which one is not an object oriented programming language?",
    ["Java", "C#", "C++", "C"],
    ["C"]
  ),
  new Question(
    "which one of the following is a backend language?",
    ["html", "css", "php", "jquery"],
    ["php"]
  ),
  new Question(
    "which one of the following is a framework?",
    ["html", "angular", "react", "jquery"],
    ["angular"]
  ),
  new Question(
    "which one of the following is a javascript library?",
    ["flutter", "angular", "react", "vue"],
    ["react"]
  ),
  new Question(
    "another name for ECMA 2015 is ?",
    ["Es5", "Es3", "Es7", "Es6"],
    ["Es6"]
  ),
];

var quiz = new Quiz(questions);

function populate() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    //populate the ui with text
    var paraText = document.getElementById("text");
    paraText.textContent = quiz.getQuestionIndex().text;

    //populate the button

    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var buttonText = document.getElementById("btn" + i);
      buttonText.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }
    showProgress();
  }
}
populate();

function guess(id, guess) {
  var buttonClick = document.getElementById(id);
  buttonClick.onclick = function () {
    quiz.isCorrect(guess);
    populate();
  };
}

function showScores() {
  var gameOverHtml = "<h1>Result</h1>";
  gameOverHtml += "<h2> Your Score: " + quiz.score + "</h2>";
  var quizContainer = document.querySelector(".container");
  quizContainer.innerHTML = gameOverHtml;
}

function showProgress() {
  var currentIndexNumber = quiz.questionIndex + 1;
  var spanText = document.querySelector("span");
  spanText.innerHTML = `Question ${currentIndexNumber} of ${quiz.questions.length}`;
}
