// Here is all the variables used throughout JS but mostly is querySelectors
var time = "";
var timeLeft = "";
var highscores = document.querySelector("#highscores")
var question = document.querySelector("#question");
var input = document.querySelector("#input");
var answers = document.querySelector("#answers");
var a = document.querySelector("#a");
var b = document.querySelector("#b");
var c = document.querySelector("#c");
var d = document.querySelector("#d");
var start = document.querySelector("#start");
var userName = document.querySelector("#user-name");
var enterScore = document.querySelector("#enter-score");
var submit = document.querySelector("#submit");
var scoreboard = document.querySelector("#scoreboard");
var first = document.querySelector("#first");
var second = document.querySelector("#second");
var third = document.querySelector("#third");
var forth = document.querySelector("#forth");
var letsBeatIt = document.querySelector("#lets-beat-it");
var tally = document.querySelector("#tally");
var score = 0;

// This is for the time to run in the background and end at 0
function timer() {
  time = 60;
  timeLeft = setInterval(function() {
    time--;
    document.querySelector("#time").textContent = "Time Left: " + time;
    if (time === 0) {
      clearInterval(timeLeft);
      submitScore();
    }
  }, 1000);
}

// here is to start, editing the HTML to show what is wanted
function intro() {
  question.textContent = "Welcome to the JavaScript Code Quiz!"
  scoreboard.style.display = "none"
  if (input.style.display === "none") {
    input.style.display = "block"
  }
  if (tally.style.display === "none") {
    tally.style.display = "block"
  }
  start.addEventListener("click", timer, {once: true})
  start.addEventListener("click", quiz, {once: true})
}

// keeping score here
function scoreTally() {
  tally.textContent = "Correct!";
  score++;
}

// penalty for getting an answer wrong and a failsafe uncase an answer is wrong while time is under 5 seconds
function timeOff() {
  tally.textContent = "Incorrect"
  if (time > 4) {
    time = (time - 5)
  } else {
    time = 0
    if (time === 0) {
      document.querySelector("#time").textContent = "Time Left: " + time;
      clearInterval(timeLeft);
      submitScore();
    }
  }
}

// setting the score to 0 to start and beginning the quiz
function quiz() {
  score = 0
  input.style.display = "none"
  if (answers.style.display === "none") {
    answers.style.display = "block"
  }
  tally.textContent = ""
  questionOne()
}

// all the next "question" functions are the same, besides the text. The {once,true} is to keep it from listening throught the program
function questionOne() {
  question.textContent = "1: What is the correct way to declare a JavaScript variable?"
  a.textContent = "A: var myVariable;"
  b.textContent = "B: variable myVariable;"
  c.textContent = "C: let myVariable;"
  d.textContent = "D: const myVariable;"
  answers.addEventListener("click", function(event) {
    if (event.target.id === "a") {
      scoreTally() 
      questionTwo()
    } else {
      timeOff()
      questionTwo()
    }
  }, {once: true})
}

function questionTwo() {
  question.textContent = "2: Which of the following is NOT a JavaScript data type?"
  a.textContent = "A: string"
  b.textContent = "B: boolean"
  c.textContent = "C: number"
  d.textContent = "D: object"
  answers.addEventListener("click", function(event) {
    if (event.target.id === "d") {
      scoreTally() 
      questionThree()
    } else {
      timeOff()
      questionThree()
    }
  }, {once: true});
}

function questionThree() {
  question.textContent = '3: How do you write "Hello World" in an alert box in JavaScript?'
  a.textContent = 'A: alert("Hello World");'
  b.textContent = 'B: alertBox("Hello World");'
  c.textContent = 'C: msgBox("Hello World");'
  d.textContent = 'D: message("Hello World");'
  answers.addEventListener("click", function(event) {
    if (event.target.id === "a") {
      scoreTally() 
      questionFour()
    } else {
      timeOff()
      questionFour()
    }
  }, {once: true});
}

function questionFour() {
  question.textContent = "4: What is the correct way to write an if statement in JavaScript?"
  a.textContent = "A: if (x === 5) { }"
  b.textContent = "B: if x === 5 { }"
  c.textContent = "C: if x = 5 { }"
  d.textContent = "D: if x == 5 { }"
  answers.addEventListener("click", function(event) {
    if (event.target.id === "a") {
      scoreTally() 
      questionFive()
    } else {
      timeOff()
      questionFive()
    }
  }, {once: true});
}

function questionFive() {
  question.textContent = "5: How do you add a comment in JavaScript?"
  a.textContent = 'A: "This is a comment"'
  b.textContent = "B: // This is a comment"
  c.textContent = "C: /* This is a comment */"
  d.textContent = "D: ** This is a comment **"
  answers.addEventListener("click", function(event) {
    if (event.target.id === "b") {
      scoreTally() 
      questionSix()
    } else {
      timeOff()
      questionSix()
    }
  }, {once: true});
}

function questionSix() {
  question.textContent = '6: What is the result of the following expression: 5 + "5"?'
  a.textContent = "A: 10"
  b.textContent = 'B: "55"'
  c.textContent = "C: 25"
  d.textContent = 'D: "5 + 5"'
  answers.addEventListener("click", function(event) {
    if (event.target.id === "b") {
      scoreTally() 
      questionSeven()
    } else {
      timeOff()
      questionSeven()
    }
  }, {once: true});
}

function questionSeven() {
  question.textContent = "7: Which method is used to remove the last element from an array in JavaScript?"
  a.textContent = "A: pop()"
  b.textContent = "B: push()"
  c.textContent = "C: shift()"
  d.textContent = "D: unshift()"
  answers.addEventListener("click", function(event) {
    if (event.target.id === "a") {
      scoreTally() 
      questionEight()
    } else {
      timeOff()
      questionEight()
    }
  }, {once: true});
}

function questionEight() {
  question.textContent = "8: What is the correct way to write a for loop in JavaScript?"
  a.textContent = "A: for (i = 0; i < 5; i++) { }"
  b.textContent = "B: for (i < 5; i++) { }"
  c.textContent = "C: for (i = 0; i < 5) { }"
  d.textContent = "D: for (i = 0; i++) { }"
  answers.addEventListener("click", function(event) {
    if (event.target.id === "a") {
      scoreTally() 
      questionNine()
    } else {
      timeOff()
      questionNine()
    }
  }, {once: true});
}

function questionNine() {
  question.textContent = "9: What is the output of the following code: console.log(typeof true);"
  a.textContent = "A: boolean"
  b.textContent = "B: string"
  c.textContent = "C: number"
  d.textContent = "D: undefined"
  answers.addEventListener("click", function(event) {
    if (event.target.id === "a") {
      scoreTally() 
      questionTen()
    } else {
      timeOff()
      questionTen()
    }
  }, {once: true});
}

function questionTen() {
  question.textContent = "10: How do you access the length of an array in JavaScript?"
  a.textContent = "A: array.length()"
  b.textContent = "B: array.length"
  c.textContent = "C: array.length[]"
  d.textContent = "D: array.length{}"
  answers.addEventListener("click", function(event) {
    if (event.target.id === "b") {
      scoreTally() 
      submitScore()
    } else {
      timeOff()
      submitScore()
    }
  }, {once: true});
}

// here is when the score comes up at the end, and displays the user point submit
function submitScore() {
  clearInterval(timeLeft);
  if (score > 0) {
  question.textContent = "Nice Job! Your score is: " + score;
  } else {
    question.textContent = "Your score is: " + score;
  }
  answers.style.display = "none"
  tally.textContent = ""
  if (enterScore.style.display === "none") {
    enterScore.style.display = "block"
  }
  // here is where the scores are held in local storage followed by if statements that make it where only the top scores show up
  submit.addEventListener("click", function(event) {
    var initials = userName.value
    var scores = JSON.parse(localStorage.getItem("userScore"))||[{"initials":"initials","score":0}, {"initials":"initials","score":0}, {"initials":"initials","score":0}]
    scores.push({initials, score})
    localStorage.setItem("userScore", JSON.stringify(scores))
    if (score > scores[0].score) {
      scores[3] = scores[2];
      scores[2] = scores[1];
      scores[1] = scores[0];
      scores[0] = {initials, score};
      localStorage.setItem("userScore", JSON.stringify(scores))
      highscore()
    } 
    else if (score > scores[1].score) {
      scores[3] = scores[2];
      scores[2] = scores[1];
      scores[1] = {initials, score};
      localStorage.setItem("userScore", JSON.stringify(scores))
      highscore()
    }
    else if (score > scores[2].score) {
      scores[3] = scores[2];
      scores[2] = {initials, score};
      localStorage.setItem("userScore", JSON.stringify(scores))
      highscore()
    }
    else if (score > scores[3].score) {
      scores[3] = {initials, score};
      localStorage.setItem("userScore", JSON.stringify(scores))
      highscore()
    }
    else {
      localStorage.setItem("userScore", JSON.stringify(scores))
      highscore()
    }
  }, {once: true});
}

// here is where the top 4 scores are shown and the HTML is manipulated to show that
function highscore() {
  clearInterval(timeLeft);
  enterScore.style.display = "none"
  input.style.display = "none"
  tally.textContent = ""
  if (scoreboard.style.display === "none") {
    scoreboard.style.display = "block"
  }
  question.textContent = "Highscores"
  answers.style.display = "none";
  var scores = JSON.parse(localStorage.getItem("userScore"))||[];
  first.textContent = "1: " + scores[0].initials.toUpperCase() + " - " + scores[0].score;
  second.textContent = "2: " + scores[1].initials.toUpperCase() + " - " + scores[1].score;
  third.textContent = "3: " + scores[2].initials.toUpperCase() + " - " + scores[2].score;
  forth.textContent = "4: " + scores[3].initials.toUpperCase() + " - " + scores[3].score;
  letsBeatIt.addEventListener("click", intro, {once: true})
}

// this is for the highscore button on the top left to check highscores anytime
highscores.addEventListener("click", highscore)

intro();
