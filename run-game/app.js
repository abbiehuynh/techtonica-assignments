
// creates event listener for when DOM is loaded to 
document.addEventListener("DOMContentLoaded", function() {
    
    // creates variable to access elements in html
    const dino = document.querySelector(".dino");
    const grid = document.querySelector(".grid");

    let gravity = 0.9;
    
    function control(e) {
        // create connection to space bar, when hit, the jump function will run
        if (e.code === "Space") {
            console.log("jump")
            jump()
        }
    }
    let position = 0;
    // jump function
    function jump() {
        let timerId = setInterval(function() {
        
            // move up
            position =+ 500;
            position = position * gravity;

            // overrides position in css
            dino.style.bottom = position + 'px'

        // invokes for every 20 milliseconds
        }, 20)
    }
    document.addEventListener('keydown', control)
});