var x = document.getElementById("myAudio");
let timeLeft = 10;
let timerinterval;
highscore = 0;
score = 0;
correctAnswer = 0;


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

function playAudio() {
    x.play();
}

function start(){
    nextquestion();
    timmer();
    dis();
    
}   


function nextquestion(){
    let operationDiv = document.getElementById("operation");
    correctAnswer = Math.floor(Math.random() * 4) + 1;
    operationDiv.innerHTML = "What is your number?";
    console.log(correctAnswer );
    
    let wrongAnswer1 = Math.floor(Math.random()* 4) * Math.floor(Math.random()* 4);
    let wrongAnswer2 = Math.floor(Math.random()* 4) * Math.floor(Math.random()* 4);
    let wrongAnswer3 = Math.floor(Math.random()* 4) * Math.floor(Math.random()* 4);
    let wrongAnswer4 = Math.floor(Math.random()* 4) * Math.floor(Math.random()* 4);

    document.getElementById("btn1").innerHTML = wrongAnswer1;
    document.getElementById("btn2").innerHTML = wrongAnswer2;
    document.getElementById("btn3").innerHTML = wrongAnswer3;
    document.getElementById("btn4").innerHTML = wrongAnswer4;

    let correctAnswerIndex = Math.floor(Math.random()* 4) + 1; // 1 2 3 4
    let correctAnswerId = "btn" + correctAnswerIndex;
    document.getElementById(correctAnswerId).innerHTML = correctAnswer;



    console.log(wrongAnswer2)
    console.log(wrongAnswer3)
    console.log(wrongAnswer4)
    console.log(wrongAnswer1)

}


function checkAnswer(buttonIndex){
    let answer =document.getElementById("btn" + buttonIndex).innerHTML;
    if (answer == correctAnswer) score += 10;
    document.getElementById("currentscore").innerHTML = "Current Score " +  score;
    nextquestion();
}
/*

var btnsStart = document.getElementById("startbtn")

btnsStart.addEventListener ("click", checkHighscore)

*/
