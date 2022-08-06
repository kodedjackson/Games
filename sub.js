var x = document.getElementById("myAudio");
let timeLeft = 15;
let timerinterval;
highscore = 0;
score = 0;
correctAnswer = 0;

window.onload = function(){
    scoreFromBrowser = localStorage.getItem("highscore");
    if (scoreFromBrowser != undefined) highscore = scoreFromBrowser;
    document.getElementById("highscore").innerHTML = "High Score: " + highscore; 

}


function timmer(){
        let timeDisplay = document.getElementById("time");
    timeDisplay.hidden =false
    timerinterval = setInterval(function(){
            timeLeft -=1;
            timeDisplay.innerHTML = "Time Left: " + timeLeft
            if(timeLeft == 0){  
                clearInterval(timerinterval);
                document.getElementById("btn1").hidden = true;
                document.getElementById("btn2").hidden = true;
                document.getElementById("btn3").hidden = true;
                document.getElementById("btn4").hidden = true;
                window.alert("GAME OVER!");
                location.reload();
            }
    },1000)
}

function dis(){
    document.getElementById("startbtn").hidden =true;
}

function playAudio() {
    x.play();
}

function start(){
    playAudio()
    nextquestion();
    timmer();
    dis();
    
}   


function nextquestion(){
    let operationDiv = document.getElementById("operation");
    let firstNum = Math.floor(Math.random() * 56) +7;
    let secondNum =  Math.floor(Math.random() * 10) +1;
    correctAnswer = firstNum - secondNum;
    operationDiv.innerHTML = firstNum  + " - " + secondNum;
    console.log(correctAnswer );
    
    let wrongAnswer1 = Math.floor(Math.random()* 10) + 1 * Math.floor(Math.random()* 10); 
    let wrongAnswer2 = Math.floor(Math.random()* 10) + 1 * Math.floor(Math.random()* 10); 
    let wrongAnswer3 = Math.floor(Math.random()* 10) + 1 * Math.floor(Math.random()* 10); 
    let wrongAnswer4 = Math.floor(Math.random()* 10) + 1 * Math.floor(Math.random()* 10); 

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
    if (score > highscore) highscore = score;
    localStorage.setItem("highscore", highscore);
    document.getElementById("highscore").innerHTML = "High Score: " + highscore; 
    nextquestion();
}
/*

var btnsStart = document.getElementById("startbtn")

btnsStart.addEventListener ("click", checkHighscore)

*/
