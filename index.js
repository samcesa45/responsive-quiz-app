//     function Question(text,choices,answer){
//         this.text = text;
//         this.choices = choices;
//         this.answer = answer;
//     }

//     Question.prototype.correctAnswer = function(choice){
//            return choice == this.answer;
//     }

// function Quiz(questions){
//     this.score = 0;
//     this.questions = questions;
//     this.questionIndex = 0;
// }

// Quiz.prototype.getQuestionIndex = function(){
//     return this.questions[this.questionIndex]
// }

// Quiz.prototype.isEnded = function(){
//     return this.questions.length === this.questionIndex;
// }

// Quiz.prototype.guess = function(answer){
//     if(this.getQuestionIndex().correctAnswer(answer)){
//         this.score++;
//     }
//     this.questionIndex++;
// }

// var questions =  [

//         new Question('which one is not an object oriented programming language?',
//          ['Java','C#','C++','C'],['C']),
//         new Question('which one of the following is a backend language?',
//         ['html','css','php','jquery'],['php']),
//         new Question('which one of the following is a framework?',
//         ['html','angular','react','jquery'],['angular']),
//         new Question('which one of the following is a javascript library?',
//         ['flutter','angular','react','vue'],['react']),
//         new Question('another name for ECMA 2015 is ?',
//         ['Es5','Es3','Es7','Es6'],['Es6'])

// ]

// var quiz = new Quiz(questions);

// function populate(){
//     if(quiz.isEnded()){
//         showScores()
//     }else{
//         //show question
// const paraText = document.getElementById('text');
//     paraText.textContent = quiz.getQuestionIndex().text;

//     //show choices
//     var choices = quiz.getQuestionIndex().choices;
//     for(var i = 0; i < choices.length; i++){
//         var btns = document.getElementById("btn" + i);
//         btns.textContent = choices[i];
//         guess("btn" + i, choices[i]);
//     }
//        showProgress();
//    }

// }

// function guess(id,guess){
//    var button = document.getElementById(id)
//    button.onclick =function(){
//        quiz.guess(guess)
//        populate()
//    }
// }
// //  //populate the button by adding a click event
// // document.body.addEventListener('click',e =>{
// //     if (e.target.nodeName == 'BUTTON'){
// //         quiz.guess();
// //                populate()
// //     }
// // })
// function showProgress(){
//     var currentQuestionNumber = quiz.questionIndex + 1;
//     const span = document.querySelector('span');
//     span.innerHTML = `Questions ${currentQuestionNumber} of ${quiz.questions.length}`

// }

// function showScores(){
//    var gameOverHtml = "<h1>Result</h1>";
//    gameOverHtml += "<h2 id='score'>Your Scores: " + quiz.score + "</h2>";
// var quizContainer = document.querySelector(".container")
//     quizContainer.innerHTML = gameOverHtml;
// }
// populate()

// let rabbit = {};

// rabbit.speak = function(line){
//     console.log(`the rabbit says ${line}`);
// }

// rabbit.speak("I'm alive");

// class Matrix{
//         constructor(width,height, element=(x,y) => undefined){
//             this.width = width;
//             this.height =height;
//             this.content = [];

//             for(let y = 0; y < height;y++){
//             for(let x = 0; x < width; x++){
//                 this.content[y * width + x] = element(x,y);
//             }
//         }

//     }
//             get(x,y){
//                 return this.content[y * this.width + x];
//     }
//             set(x,y,value){
//                 return this.content[y * this.width + x] = value;
//             }
//     }

//     let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);

//  class MatrixIterator{
//       constructor(matrix){
//            this.matrix = matrix;
//            this.x = 0;
//            this.y = 0;
//       }
//       next(){
//           if(this.y == this.matrix.height) return{done:true};
//           let value = {
//               x:this.x,
//               y:this.y,
//               value: this.matrix.get(this.x, this.y)
//           }
//           this.x++;
//           if(this.x == this.matrix.width) {
//               this.x = 0;
//               this.y++;
//           }
//           return {value, done: false}
//       }
//  }

//object literal syntax
// const circle = {
//     radius:1,
//     location:{
//         x:1,
//         y:1
//     },
//     draw: function(){
//         console.log('draw');
//     }
// };

// circle.draw();

//factory method
// function createCircle(radius){
//     return{
//         radius,
//         location:{
//             x:1,
//             y:1
//         },
//         draw:function(){
//             console.log(`${this.radius}`)
//         }
//     }
// }

// const circle = createCircle(2);
// circle.draw();

//constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log(`${this.radius}`);
  };
}
console.log(this);
const circle = new Circle(1);
circle.draw();
