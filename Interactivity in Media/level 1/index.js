// Get button and box elements -> Listen for a click -> Change the appearance by toggling CSS class

let box = document.getElementById("box");
let button = document.getElementById("btn");

button.addEventListener("click", function(){
    box.classList.toggle("blue")
})