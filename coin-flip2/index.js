// coin-flip game

// creates variables to access elements
let heads = document.getElementById("heads");
let tails = document.getElementById("tails");

let coin = document.getElementsByClassName("coin");

let flipButton = document.getElementById("flip-button");
let resetButton = document.getElementById("reset-button");

// counter keeps track of number of heads and tails
let headsCount = 0;
let tailsCount = 0;

// adds event listener to flip button
flipButton.addEventListener("click", (event) => {
    
    // function generates random value between 0-1 to choose heads or tails
    let flip = Math.floor(Math.random() * 2);
    console.log(flip);
    if (flip === 0) {
        drawHeads();
    } else {
        drawTails();
    }
});

function drawHeads () {
    heads.style.visibility = "visible";
    tails.style.visibility = "hidden";
}

function drawTails () {
    heads.style.visibility = "hidden";
    tails.style.visibility = "visible";
}

// button to reset counter 