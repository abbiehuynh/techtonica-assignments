//creates variables
let canvas = document.getElementById("myCanvas");
let c = canvas.getContext("2d");

// declare variables of width and height of canvas
let W = canvas.width;
let H = canvas.height;

// flip Coin function
function flipCoin() {

    // declare variable flip; assign random number: 0 - 1 (0 - heads, 1 - tails)
    // Math.floor => decimal to whole number; Math.random * 2 => random value between 0-1
    let flip = Math.floor(Math.random() * 2)
    // logs flip to console
    console.log(flip);
    // if/else statement
    if (flip === 0)
    {
        drawHeads(200, 200, "Gold");
    } else {
        drawTails(400, 200, "Silver");
    }
}
 // drawHeads function
 function drawHeads(xLoc, yLoc, color) {
    // clears circle from page after each click
    c.clearRect(0, 0, W, H);
    
    // draws head side of coin, draws circle, radius = 100;
    c.beginPath();
    c.fillStyle = color;
    c.strokeStyle = "Black";
    c.lineWidth = 5;
    c.arc(xLoc, yLoc, 100, 0, 2 * Math.PI);
    c.fill();
    c.stroke();
    c.closePath();

    //draw a black "H" on the coin
    c.fillStyle = "Black";
    c.font = "72px Arial";
    c.fillText("H", xLoc, yLoc);
 }


// drawTails function
 function drawTails(xLoc, yLoc, color) {
    // clears circle from webpage after each click 
    c.clearRect(0, 0, W, H);

    // draws tail side of coin, draws circle, radius = 100;
    c.beginPath();
    c.fillStyle = color;
    c.strokeStyle = "Black";
    c.lineWidth = 5;
    c.arc(xLoc, yLoc, 100, 0, 2 * Math.PI);
    c.fill();
    c.stroke();
    c.closePath();

    //draw a black "T" on the coin
    c.fillStyle = "Black";
    c.font = "72px Arial";
    c.fillText("T", xLoc, yLoc);
 }