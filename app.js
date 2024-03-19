let userwin = 0;
let compwin = 0;

const user = document.querySelector("#user");
const comp = document.querySelector("#comp");
const playgame = document.querySelector('#play-game');


const images = document.querySelectorAll(".choice");
const gencompChoice = () => {
    const allChoices = ["rock", "paper", "scissor"];
    const rdmInx = Math.floor(Math.random() * 3);
    return allChoices[rdmInx];
}

const gameDraw = (compChoice) =>{
    playgame.innerText = `Game draw both chosen ${compChoice}`;
    document.querySelector(".winners").style.backgroundColor = "Black";
    
}

const showMsg = (Win, compChoice, userChoice)=>{
    if(Win === true){
        userwin++;
        user.innerText = `Your Score: ${userwin}`;
        comp.innerText = `Comp Score: ${compwin}`;
        playgame.innerText = `You win Your ${userChoice} beats ${compChoice}`;
        document.querySelector(".winners").style.backgroundColor = "#2BA100";
    }
    else{
        compwin++;
        user.innerText = `Your Score: ${userwin}`;
        comp.innerText = `Comp Score: ${compwin}`;
        playgame.innerText = `You lose Comp ${compChoice} beats ${userChoice}`;
        document.querySelector(".winners").style.backgroundColor = "red";
    }
}


const checkWin = (userChoice) => {
    const compChoice = gencompChoice();

    if(userChoice === compChoice){
        gameDraw(compChoice);
    }
    else{
        let Win = true;
        if(userChoice === "rock"){
            //computer choice must be paper or scissor
            Win = compChoice === "paper" ? false : true; 
        }
        else if(userChoice === "paper"){
            Win = compChoice === "scissor" ? false : true;
        } 
        else{
            Win = compChoice === "rock" ? false : true;
        }
        showMsg(Win, compChoice, userChoice);
    }
    
}

images.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute('id');
       
        checkWin(userChoice);
    })
}) 