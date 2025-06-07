let userScore = 0;
let compScore = 0 ;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

let drawGame = () => {
     msg.innerText = "Game was draw. Play Again!" ;
     msg.style.backgroundColor = "gray" ;
}

let showWin = (userWin , userChoice , compChoice) => {
    if(userWin){
        userScore++
        userScorePara.innerText = userScore ;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}` ;
        msg.style.backgroundColor ="green" ; 
    }else{
        compScore++
        compScorePara.innerText = compScore ;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}` ;
        msg.style.backgroundColor = "red" ;
    }
};

let genCompChoice = () => {
    let option = ['rock' , 'paper' , 'scissors'];
    let randomIdx = Math.floor(Math.random()* 3) ;
    return option[randomIdx];
};

let playGame = (userChoice) => {
    console.log("user choice =" , userChoice);
    let compChoice = genCompChoice();
    console.log("computer choice=" , compChoice);

    if(userChoice === compChoice){
        drawGame();
        return;
    }
    let userWin ;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true ;
        }else if( userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true ;
        }else{
            userWin = compChoice === "rock" ? false : true ; 
        
    }
    showWin(userWin , userChoice , compChoice );
};

choices.forEach((choice) => {
    choice.addEventListener("click" , () =>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});

