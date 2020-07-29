
const movetxt = document.querySelector('#current-move');
gameFin = false;
let playerScore = 0;
let compScore = 0;

gamePlay();
displayScore();


function gamePlay(){
    
    const rockbtn = document.querySelector('#rock-but')
    rockbtn.addEventListener('click',()=> {
        if (! gameFin){
        let compMove = computerPlay();
        res=playRound('rock',compMove);
        movetxt.textContent = res;
        checkString();
        }
          

    });
    
    const paperbtn = document.querySelector('#paper-but');
    paperbtn.addEventListener('click',()=> {
        if (!gameFin){
        let compMove = computerPlay();
        res=playRound('paper',compMove);
        movetxt.textContent = res;
        checkString();
        }
        
    });
    
    const scissorsbtn = document.querySelector('#scissors-but');
    scissorsbtn.addEventListener('click',()=> {
        if (!gameFin){
        let compMove = computerPlay();
        res=playRound('paper',compMove);
        movetxt.textContent = res;
        checkString();
        }
    });

}

function computerPlay(){
    no = Math.floor(3 * Math.random());
    if (no == 0) {
        return ("rock");
    }
    else if (no== 1) {
        return ("paper");
    }
    else if (no == 2) {
        return ("scissors");
    }
}

function playRound(playerSelection,compSelection){
    let player1 = playerSelection.toLowerCase();

    if (player1==compSelection){
        return "It is a draw"
    }
    else if (player1=="rock" && compSelection=="paper"){
        return "You loose! Paper beats rock"
    }
    else if (player1=="scissors" && compSelection=="rock"){    
        return "You loose! rock beats scissors"
    }
    else if (player1=="paper" && compSelection=="scissors"){     
        return "You loose! scissors beats paper"
    }
    else if (player1=="rock" && compSelection=="scissors"){
        return "You Win! rock beats scissors"
    }
    else if (player1=="paper" && compSelection=="rock"){
        return "You Win! paper beats rock"
    }
    else if (player1=="scissors" && compSelection=="paper"){
        return "You Win! scissors beats paper"
    }
}

function checkString(){
    //checks if string returned from game function has win or loose in them. 
    
    if (movetxt.textContent.indexOf("Win") != -1) {
        playerScore++;
    }
    else if (movetxt.textContent.indexOf("loose") != -1){
        compScore++;
    }
}

function displayScore(){
    const buttons = document.querySelectorAll('.user-input-buts');
    const userscoretxt = document.querySelector('#user-score');
    const compscoretext = document.querySelector('#computer-score');

    buttons.forEach((button) => {

        button.addEventListener('click',()=> {
        userscoretxt.textContent = "Your Score: " + playerScore;
        compscoretext.textContent = "Computer Score: " + compScore; 
        
        if (playerScore>=5 || compScore >=5) {
            userscoretxt.textContent = ""
            compscoretext.textContent = ""
            gameFin = true;
            if (playerScore==5){
                movetxt.textContent= "Congratulations- you have Won";
                playerScore++;
                reset();
                
            } else if (compScore==5){
                movetxt.textContent = "Unluck- you have lost";
                playerScore++
                reset();
            }
        
        }     
        });
    });

}

function reset(){
    
    if (gameFin) {
    const container = document.querySelector('#results-div');
    const resetbut = document.createElement('button');
    resetbut.textContent = "Restart"
    resetbut.classList.toggle('user-input-buts');
    container.appendChild(resetbut);
    resetbut.addEventListener('click',() => {
        location.reload(false);
    });
    }
}

