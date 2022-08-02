let computerguess = Math.floor(Math.random() * 4 + 1);
var x = document.getElementById("myAudio");
let timeLeft = 10;
let timerinterval;
let correctanswer = computerguess;

console.log(computerguess);

let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let button3 = document.getElementById("btn3");
let button4 = document.getElementById("btn4");


function btn1(){
    if (computerguess == 1){
        console.log("correct answer")
    } else console.log("wrong answer");
    nextQuestion()
}

function btn2(){
    if (computerguess == 2){
        console.log("correct answer")
    } else console.log("wrong answer");
    nextQuestion()
}

function btn3(){
    if (computerguess == 3){
        console.log("correct answer")
    } else console.log("wrong answer");
    nextQuestion()
}

function btn4(){
    if (computerguess == 4){
        console.log("correct answer")
    } else console.log("wrong answer");
    nextQuestion()
}


function timmer(){
        let timeDisplay = document.getElementById("time");
    timeDisplay.hidden =false
    timerinterval = setInterval(function(){
            timeLeft -=1;
            timeDisplay.innerHTML = "Time Left: " + timeLeft
            if(timeLeft == 0){  
                clearInterval(timerinterval);
            }
    },1000)
}

function dis(){
    document.getElementById("startbtn").disabled =true;
}

/*
function up(){
    a = document.getElementById("inputId").value = guess += 1;
    console.log (typeof a)
}

function down(){
    a = document.getElementById("inputId").value = guess -= 1;
    console.log (typeof a)
}

function reset(){
    location.reload()
}

function checkHighscore(){
    a = document.getElementById("highscore").value
    if ( a > 50){
        window.alert("You won this round")
    } else console.log("Try again")
}*/


function playAudio() {
    x.play();
}

function start(){  
    nextQuestion();
    timmer();
    if (computerguess == correctanswer ){
        console.log ("Correct")
    }
    dis();
}   

function nextQuestion(){
    console.log(computerguess);
}
/*

var btnsStart = document.getElementById("startbtn")

btnsStart.addEventListener ("click", checkHighscore)

*/
