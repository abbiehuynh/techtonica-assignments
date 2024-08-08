
// creates event listener for when DOM is loaded to 
document.addEventListener("DOMContentLoaded", function() {
    
    // creates variable to access elements in html
    const dino = document.querySelector(".dino");
    const grid = document.querySelector(".grid");

    const alert = document.getElementById("alert")

    // creates variable for jump function
    let gravity = 1;
    let isJumping = false;

    let isGameOver = false;
    
    function control(e) {
        // create connection to space bar, when hit, the jump function will run
        if (e.code === "Space") {

            // prevents user from double jumping, only able to jump when they are not jumping
            if (!isJumping) {
                jump()
            }
        }
    }

    let position = 0;
    

    // jump function
    function jump() {

        isJumping = true;
        let count = 0;
        let timerId = setInterval(function() {
             
            // moves down
            if (count === 15) {
                clearInterval(timerId)
                let downTimerId = setInterval(function() {

                    // stops from infinitely moving down webpage
                    if (count === -12) {
                        clearInterval(downTimerId)
                        isJumping = false;
                    }
                    // creates visual effect of moving down
                    position -= 5;
                    count--;
                    position = position * gravity;

                    // overrides position in css
                    dino.style.bottom = position + "px";

                // invokes for every 20 milliseconds
                }, 20);
            }

            // moves up
            position =+ 180;
            count++;
            position = position * gravity;

            // overrides position in css
            dino.style.bottom = position + 'px';
        }, 20)
    }

    // obstacle generator
    function generateObstacles() {
        // places obstacle to the far left of screen
        let obstaclePosition = 1800;

        // creates variable and creates div for obstacle
        const obstacle = document.createElement("div");
        // gives the div the class name obstacle
        obstacle.classList.add("obstacle");
        grid.appendChild(obstacle);

        obstacle.style.left = obstaclePosition + "px";

        let timerId = setInterval(function () {
            if (obstaclePosition < 0) {
                clearInterval(timerId);
                alert.innerHTML = "Game Over";
                isGameOver = true;
                // remove all children from the grid
                // while the first child exists, remove the last child
                while (grid.firstChild) {
                    grid.removeChild(grid.lastChild)
                }
            }

            // moves obstacle left
            obstaclePosition -= 10;
            obstacle.style.left = obstaclePosition + "px";
        }, 20);
    }
    generateObstacles();


    document.addEventListener('keydown', control)
});