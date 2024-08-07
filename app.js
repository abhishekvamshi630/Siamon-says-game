let gameSeq = [];
let userSeq = [];

let h3 = document.querySelector("h3");
let btns = ["firstDiv", "secDiv", "thirdDiv", "fourthDiv"];

let level = 0;
let gameStarted = false;

document.addEventListener("keypress", function() {
    if(gameStarted == false){
        console.log("Game Stated");
        gameStarted = true;
    }

    levelUp();
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash")
    }, 250)
}

function userFlash(btn){
    btn.classList.add("flash-two");
    setTimeout(function() {
        btn.classList.remove("flash-two")
    }, 200)
}

function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let btnIdx = Math.floor(Math.random() * 4);
    let btnColor = btns[btnIdx];
    let randBtn = document.querySelector(`.${btnColor}`);

    gameSeq.push(btnColor);
    console.log(gameSeq);

    gameFlash(randBtn);
}

function checkAns(idx) {
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h3.innerHTML = `Game Over! <b>Your Score was ${level}</b> <br> Please Press any key to Start the Game.`
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector('body').style.backgroundColor = "white";
        }, 150)
        reset();
    }
}

function btnPress() {
    let btn = this;

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
    userFlash(btn);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset() {
    gameStarted  = false;

    userSeq = [];
    gameSeq = [];
     level = 0;
}


