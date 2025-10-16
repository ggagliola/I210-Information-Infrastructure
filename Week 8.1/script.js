document.write("Hello World <br>")

// Function is a reusable block of code, so you don't have to fill out all the information every time
// Function without parameter and without return type

// Define a function
function greet(){
    console.log("Hello World from function")
}

// Call a function
greet();
greet();

function greet1(){
    document.write("Hello World <br>");
}

greet1();

// Function without parameter and with return type

function getGreeting(){
    return "Hello World from return function <br>";
}

console.log(getGreeting());

document.write(getGreeting());

// Function with parameter and without return type
function showSquare(num){ //num is parameter that can be changed
    document.write(" Square of " + num + " is: " + (num*num) + "<br>");
}

showSquare(5); //changes the num parameter to 5
showSquare(10); //changes the num parameter to 10
showSquare(15); //changes the num parameter to 15, you get the idea

// Function with parameter/input and with return type
function getMultiplication(a,b){
    return a*b;
}

let result = getMultiplication(5,6); //a=5, b=6

console.log("Multiplication is: " + result);

document.write("Multiplication of 7 and 8 is: " + getMultiplication(7,8) + "<br>"); //a=7, b=8