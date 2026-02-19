// STEP 1: Get the button from the HTML using its id
// This allows JavaScript to know which button we are talking about

let lightButton = document.getElementById("lightButton");




// STEP 2: Get the  bulbs (left and right) element from the HTML
// We store it in a variables(one for each) so we can change it later

let leftBulb = document.getElementById("leftBulb");
let rightBulb = document.getElementById("leftBulb");



// Tell JavaScript to listen for a click on the button
// addEventListener waits until the user clicks the button and Toggle the "on" class/styling on bulbs

button.addEventListener("click", function(){
    leftBulb.classList.toggle("on");
    rightBulb.classList.toggle("on");
})


