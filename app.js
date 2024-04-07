let UserScore=0;
let ComputerScore=0;
const Choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscore= document.querySelector("#User_score");
const compscore= document.querySelector("#Computer_score");
const generateComputerChoice=()=>{
    let options=["rock","paper","scissors"];
    const randidx= Math.floor(Math.random() * 3);
    return options[randidx];
};

const drawGame=()=>{
    msg.innerText="Game draw!";
};
const showWinner=(userwin,userchoice,compchoice) =>{
    if(userwin){
        UserScore++;
        userscore.innerText=UserScore;
        msg.innerText=`You Win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        ComputerScore++;
        compscore.innerText=ComputerScore;
        msg.innerText=`You lost!${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
};

const playgame=(userchoice) =>{
    console.log("User choice =",userchoice);
    const compchoice=generateComputerChoice();
    console.log("comp choice =",compchoice)
    if(userchoice===compchoice){
        drawGame();
    }
    else{
        let userwin=true;
            if(userchoice==="rock"){
                userwin= compchoice==="paper"? false : true;
            }
            else if(userchoice==="paper"){
                userwin=compchoice==="scissors"?false:true;
            }
            else{
                userwin=compchoice==="rock"? false:true;
            }
            showWinner(userwin,userchoice,compchoice);
    }
};
Choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});