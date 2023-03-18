function pop() {
    let popup = document.querySelector("#popup");
    popup.classList.toggle("show");
}

document.querySelector(".cross").addEventListener("click", () => {
    document.querySelector("#popup").classList.toggle("show");
});

let yourScore = document.querySelector(".dash div:nth-child(3) h1");
let computerScore = document.querySelector(".dash div:nth-child(2) h1");
console.log(yourScore);
console.log(computerScore);

let game = document.querySelector("#game");
console.log(game);

let rock = () => {
    game.style.visibility = "hidden";
}

