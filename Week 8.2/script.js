// USING JAVASCRIPT TO LOOP CODE


//FOR LOOP
// Repeats a block of code a specific number of times
// Commonly used when the number of iterations are known

function runForLoop(){
let text = "Counting from 1 to 5 using For Loop";
for(let i=1;i<=5;i++)
{text += i + "";}

document.getElementById("output").innerHTML = text;
}

// WHILE LOOP
// Repeats a block of code while the condition is true

function runWhileLoop(){
let text = "Counting from 1 to 5 using While loop:";
let i =1;

while(i<=5){
    text += i + "";
    i++;
}

document.getElementById("output").innerHTML = text;
}

// DO-WHILE LOOP
// Executes the block of code once before it checks for the condition



// IF-ELSE STATEMENT
// Executes different blocks of code based on a condition
// Used for decision making in programs

// SWITCH STATEMENT
// Selects one of many blocks of code to be executed