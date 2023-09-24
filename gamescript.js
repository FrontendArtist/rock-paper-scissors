function pcChoice() {
    const array = ["rock" , "paper" , "scissors"];    
    const computer = array[Math.floor(Math.random()*3)];
    return computer;
}


function game(computerSelection , playerSelection) {
    if (computerSelection === playerSelection) {
    return"its tie";
}
else if (computerSelection === "rock" && playerSelection === "paper"  
|| computerSelection === "paper" && playerSelection === "scissors" 
|| computerSelection === "scissors" && playerSelection === "rock"){

    return "you win!"
}
else{

    return "you lose!"
}
}

function play() {
    let pcPoints=0;
    let playerPoints=0;

    for (let index = 0; index < 5; index++) {
        const playerChoosed = prompt("choose: paper , rock , scissors");
        const pcChoosed = pcChoice()
        const result = game(pcChoosed , playerChoosed);

            console.log(result);
                

        if (result === "you win!") {
            playerPoints++
        }else if(result === "you lose!"){
            pcPoints++
        }
       console.log(`you are : ${playerPoints} , pc is ${pcPoints}`)
    }
    if (playerPoints > pcPoints) {
        console.log("you win the game");
    }
    else if (playerPoints > pcPoints) {
        console.log("you lose the game");
    }
    else {console.log("its a tie game!");
}
}
play();