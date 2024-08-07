
// creates event listener for when DOM is loaded to 
document.addEventListener("DOMContentLoaded", () => {
    
    // creates variable to access elements in html
    const dino = document.querySelector(".dino");
    const grid = document.querySelector(".grid");
    
    function control(e) {
        if (e.code === "Space") {
            console.log("jump")
        }
    }

    document.addEventListener('keydown', control)
})