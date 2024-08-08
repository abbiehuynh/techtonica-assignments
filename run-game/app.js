
// creates event listener for when DOM is loaded to 
document.addEventListener("DOMContentLoaded", function() {
    
    // creates variable to access elements in html
    const dino = document.querySelector(".dino");
    const grid = document.querySelector(".grid");

    // creates variable for jump function
    let gravity = 1;
    let isJumping = false;
    
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




    document.addEventListener('keydown', control)
});