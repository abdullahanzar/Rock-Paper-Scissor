function pop() {
    let popup = document.querySelector("#popup");
    popup.classList.toggle("show");
}

document.querySelector(".cross").addEventListener("click", () => {
    document.querySelector("#popup").classList.toggle("show");
});

let yourScore = document.querySelector(".dash div:nth-child(3) h1");
let computerScore = document.querySelector(".dash div:nth-child(2) h1");
yourScore.innerHTML = localStorage.getItem("yourScore");
computerScore.innerHTML = localStorage.getItem("computerScore");
if(localStorage.getItem("yourScore")==null) {
    yourScore.innerHTML = 0;
    computerScore.innerHTML = 0;
}

let game = document.querySelector("#game");
console.log(game);
let userChoice;
let rock = () => {
    userChoice = "rock";
    let choices = rps.roll("rock");
}
let paper = ()=>{
    userChoice = "paper";
    let choices = rps.roll(userChoice);
}
let scissor = ()=>{
    userChoice = "scissor"
    let choices = rps.roll(userChoice);
}
let placeChoices = (userChoice, compChoice) => {
        if(compChoice=="rock") {
        document.querySelector("#compPicked").src="Resources/rock.png";
        document.querySelector("#compPickedUW").src="Resources/rock.png";
        document.querySelector("#compPickedtie").src="Resources/rock.png";
        }
        else if(compChoice=="paper") {
        document.querySelector("#compPicked").src="Resources/paper.png";
        document.querySelector("#compPickedUW").src="Resources/paper.png";
        document.querySelector("#compPickedtie").src="Resources/paper.png";
        }
        else if(compChoice=="scissor") {
        document.querySelector("#compPicked").src="Resources/scissor.png";
        document.querySelector("#compPickedUW").src="Resources/scissor.png";
        document.querySelector("#compPickedtie").src="Resources/scissor.png";
        }
        if(userChoice=="rock") {
        document.querySelector("#userpicked").src="Resources/rock.png";
        document.querySelector("#userpickedUW").src="Resources/rock.png";
        document.querySelector("#userpickedtie").src="Resources/rock.png";
        }
        else if(userChoice=="paper") {
        document.querySelector("#userpicked").src="Resources/paper.png";
        document.querySelector("#userpickedUW").src="Resources/paper.png";
        document.querySelector("#userpickedtie").src="Resources/paper.png";
        }
        else if(userChoice=="scissor") {
        document.querySelector("#userpicked").src="Resources/scissor.png";
        document.querySelector("#userpickedUW").src="Resources/scissor.png";
        document.querySelector("#userpickedtie").src="Resources/scissor.png";
        }
};

function setlocalStorage(computerScore, yourScore) {
    localStorage.setItem("yourScore", yourScore.innerHTML);
    localStorage.setItem("computerScore", computerScore.innerHTML);
}

let compChoice;
let win = {
    comp : () => {
        computerScore.innerHTML++;
        console.log(compChoice + " " + userChoice);
        console.log("COMPUTER WINS");
        game.style.visibility = "hidden";
        document.querySelector("#comp").style.visibility = "visible";
        placeChoices(userChoice, compChoice);
        setlocalStorage(computerScore, yourScore);
    },
    user : () => {
        yourScore.innerHTML++;
        console.log(compChoice + " " + userChoice);
        console.log("USER WINS");
        game.style.visibility = "hidden";
        document.querySelector("#user").style.visibility = "visible";
        placeChoices(userChoice, compChoice);
        setlocalStorage(computerScore, yourScore);
    },
    tie : () => {
        console.log(compChoice + " " + userChoice);
        console.log("AWW, IT'S A TIE");
        game.style.visibility = "hidden";
        document.querySelector("#tie").style.visibility = "visible";
        placeChoices(userChoice, compChoice);
        setlocalStorage(computerScore, yourScore);
    }
};
let rps = {
    rand : ()=> { return parseInt(Math.random()*3+1) },
    assign : function() {
        if(this.rand()==1)
        compChoice="rock";
        else if(this.rand()==2)
        compChoice="paper";
        else if(this.rand()==3)
        compChoice="scissor";
        else 
        compChoice="paper";
    },
    roll : function(userChoice) {
        this.assign();
        if(userChoice=="rock" && compChoice=="paper")
        win.comp();
        else if(userChoice=="rock" && compChoice=="scissor")
        win.user();
        else if(userChoice=="rock" && compChoice=="rock")
        win.tie();
        if(userChoice=="paper" && compChoice=="scissor")
        win.comp();
        else if(userChoice=="paper" && compChoice=="rock")
        win.user();
        else if(userChoice=="paper" && compChoice=="paper")
        win.tie();
        if(userChoice=="scissor" && compChoice=="rock")
        win.comp();
        else if(userChoice=="scissor" && compChoice=="paper")
        win.user();
        else if(userChoice=="scissor" && compChoice=="scissor")
        win.tie();
        return [userChoice, compChoice];
    }
};

function playAgain() {
    console.log("HELLO");
    document.querySelector("#comp").style.visibility = "hidden";
    document.querySelector("#user").style.visibility = "hidden";
    document.querySelector("#tie").style.visibility = "hidden";
    game.style.visibility = "visible";
};

function replay() {
    document.querySelector("#tie").style.visibility = "hidden";
    localStorage.clear();
    yourScore.innerHTML=0;
    computerScore.innerHTML=0;
    game.style.visibility = "visible";
}


console.log(yourScore);
console.log(computerScore);