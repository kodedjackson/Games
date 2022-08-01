let guess = Number(document.getElementById("inputId").value);
let computerguess = Math.floor(Math.random() * 3 + 1);
var x = document.getElementById("myAudio");
console.log(computerguess);
console.log(typeof guess)


function up(){
    playAudio()
    a = document.getElementById("inputId").value = guess += 1;
    console.log (typeof a)
}

function down(){
    playAudio()
    a = document.getElementById("inputId").value = guess -= 1;
    console.log (typeof a)
}

function reset(){
    location.reload()
}

/*function checkHighscore(){
    a = document.getElementById("highscore").value
    if ( a > 50){
        window.alert("You won this round")
    } else console.log("Try again")
}*/


function playAudio() {
    x.play();
}

function start(){  
    playAudio()
        if (guess < computerguess){
            window.alert ("Sorry, too low")
            ab =document.getElementById("highscore").value -= 5;
            console.log(typeof a)
        }else if (guess > computerguess){
            window.alert("Sorry, too high");
            ac = document.getElementById("highscore").value -=5;
            console.log(typeof ac);
        } else window.alert("congrats");
            ad = document.getElementById("highscore").value += 10;
            console.log(typeof ad);
            reset();
    }   
/*

var btnsStart = document.getElementById("startbtn")

btnsStart.addEventListener ("click", checkHighscore)

*/
