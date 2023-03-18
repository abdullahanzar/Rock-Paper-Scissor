let compChoice;
let win = {
    comp : () => {
        console.log("COMPUTER WINS");
    },
    user : () => {
        console.log("USER WINS");
    },
    tie : () => {
        console.log("AWW, IT'S A TIE");
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
        console.log(compChoice);
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
    }
};

for(let i = 0; i<10; i++) {
    rps.roll("rock");
}