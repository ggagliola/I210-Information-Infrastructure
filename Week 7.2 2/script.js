console.log("Hello, World!")
console.log("Let's start Learning Javascript!")

// String Variable
let studentName = "Davin";
console.log(studentName);
console.log("the student name is :" + studentName);

studentName = "Patrick";
console.log("the student name is :" + studentName);

// Number Variable
let studentAge = 20;
console.log("the student age is :" + studentAge);
console.log("type og studentAge is :" + typeof studentAge);

let studentHeight = 5.9;
console.log("the student height is :" + studentHeight);

let temp = -10;
console.log("the temperature is :" + temp);
console.log("type of temp is :" + typeof temp);

// Boolean Variable ---> true or false (1 or 0)

let isStudent = true;
console.log("is student :" + isStudent);
console.log("type of isStudent is :" + typeof isStudent);

isStudent = false;
console.log("is student :" + isStudent);
console.log("type of isStudent is :" + typeof isStudent);

// Undefined Variable
let address;
console.log("address is :" + address);
console.log("type of address is :" + typeof address);

// Null Variable
let pincode = null;
console.log("pincode is :" + pincode);
console.log("type of pincode is :" + typeof pincode);
// Type should be null but it will show object instead

// Object Variable

let studentinfo = {
    name :"Marquis",
    age :21,
    enrolled: true
};

console.log(studentinfo);
console.log("student name is :" + studentinfo.name);
console.log("student age is :" + studentinfo.age);
console.log("student enrolled status is :" + studentinfo.enrolled);

// Concatination and Template literals

console.log("the student name is :" +
    studentinfo.name + " and age is :" +
    studentinfo.age + " and enrolled :" + studentinfo.enrolled);

console.log("the student name is " + studentName + " and age is " + studentAge + ".");

// Template literals

console.log('the student name is ${studentName} and age is ${studentAge}.');
console.log('the student name is ${studentinfo.name} and age is ${studentinfo.age} and enrolled ${studentinfo.enrolled}.');

// DOM = Document Object Model
// Imagine the html document as a family tree structure
// On top of that family you have html tag --> Parent
// Two children of html tag --> head and body
// body had many children --> h1, p, div, button, etc.
// Each tag (element) is like node of the tree

// html
//  |--head
//  |--body
//      |--h1
//      |--p

// DOM Manipulation

let heading1 = document.getElementById("heading");
console.log(heading1);
console.log(heading1.innerText);

heading1.innerHTML = "My name is ABC";

let intro1 = document.getElementById("intro");
console.log(intro1);
console.log(intro1.innerText);

intro1.innerHTML = "To be loved is to be changed";

// Additional part

document.write("<hr>");
document.write("<h2>This is created using document.write</h2>");
document.write("<p> <strong>Student Name</strong> : " + studentName + "</p>");
document.write("<p> <strong>Student Age</strong> : " + studentAge + "</p>");
document.write("<p> <strong>Student Age</strong> : " + JSON.stringify(studentinfo) + "</p>");
// JSON.stringify() --> to convert object to string

// Alert Box

alert("This is an alert box!");