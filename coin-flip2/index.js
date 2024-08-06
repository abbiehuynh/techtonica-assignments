// coin-flip game

// creates variables to access elements
let heads = document.getElementById("heads");
let tails = document.getElementById("tails");

let coin = document.querySelector(".coin");

let flipButton = document.getElementById("flip-button");
let resetButton = document.getElementById("reset-button");

// counter keeps track of number of heads and tails
let headsCounter = 0;
let tailsCounter = 0;

// adds event listener to flip button
flipButton.addEventListener("click", (event) => {
    
    // function generates random value between 0-1 to choose heads or tails
    let flip = Math.floor(Math.random() * 2);
    console.log(flip);
    
    // if true or 1
    if (flip) {
        // drawHeads();
        setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
        headsCounter++;
    } else {
        // drawTails();
        setTimeout(function(){
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
        tailsCounter++;
    }
    setTimeout(stats, 3000);
});

// function drawHeads() {
//     setTimeout(function(){
//         coin.style.animation = "spin-heads 3s forwards";
//     }, 100);
//     headsCounter++;
    
//     // heads.style.visibility = "visible";
//     // tails.style.visibility = "hidden";
// }

// function drawTails() {
//     setTimeout(function(){
//         coin.style.animation = "spin-tails 3s forwards";
//     }, 100);
//     tailsCounter++;
//     // heads.style.visibility = "hidden";
//     // tails.style.visibility = "visible";
// }

let headsCount = document.getElementById("heads-count");
let tailsCount = document.getElementById("tails-count");

// keeps track of stats
function stats() {
    headsCount.innerHTML = `Day: ${headsCounter}`;
    tailsCount.innerHTML = `Night: ${tailsCounter}`;
}

// button to reset counter 
resetButton.addEventListener("click", () => {
    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    stats();
});