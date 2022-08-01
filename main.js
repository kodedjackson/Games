let guess = document.getElementById("labelId").value;
let computerguess = Math.floor(Math.random() * 5 + 1);
console.log(computerguess);


function up(){
    a = document.getElementById("labelId").innerHTML = guess += 1;
    console.log (typeof a)
}

function down(){
    a = document.getElementById("labelId").innerHTML = guess -= 1;
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
}

function start(){

    checkHighscore();
    if (guess < computerguess){
        window.alert ("Sorry, too low")
        a =document.getElementById("highscore").value -= 10;
    } else if (guess > computerguess){
        window.alert("Sorry, too low");
        document.getElementById("highscore").value -=10
    } else (window.alert("Yaa, You got it right"));
        a = Number(document.getElementById("highscore").value +=20);
        console.log(typeof a )
}



/*

var btnsStart = document.getElementById("startbtn")

btnsStart.addEventListener ("click", checkHighscore)

*/
