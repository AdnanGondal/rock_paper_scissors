
game();





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


function game(){
        let playerScore = 0;
        let compScore = 0;
        alert("Welcome to the Rock Paper Scissors game. Press Ok to play.")
        while (playerScore<5 || compScore <5)
        {
            let compMove = computerPlay();
            let userMove = prompt("Choose rock, paper or scissors")
            let result = playRound(userMove,compMove);

            //checks if string returned from game function has win or loose in them. 
            if (result.indexOf("Win") != -1) {
                playerScore++;
                if (playerScore==5) {
                    alert("You win!")
                    break;
                }
            }
            else if (result.indexOf("loose") != -1){
                compScore++;
                if (compScore == 5) {
                    alert("Computer Wins")
                    break;
                }
            }

            alert(result+ `\n Your Score: ${playerScore} \n Computer Score: ${compScore}`)
        }
}


