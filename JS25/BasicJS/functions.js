/*
Why Function is important?
    i. Avoid code repetition(DRY: Don't Repeat Yourself)
    ii. Organize code into logical blocks
    iii. Makes code readable, reusable, and testable
*/




/* Function Declaration */
function greet(name) {
    console.log("Hello " + name);
}
// greet("Jakariya Ahmed");


/* Function Expression */ 
const greeting = function (name) {
    // console.log(`Hello ${name}`);
} 

// greeting("Alex");

/*  Function Hoisting , ReferenceError: Cannot access 
    'sayHello' before initialization 
*/

// sayHello("Jek");
const sayHello = function (name) {
    // console.log(`Hello ${name}`);
}


/**************** Arrow Function (ES6+) 
 ** i.Shorter Syntax
 ** ii. No this binding --- good for callbacks
 * *************** */
const welcome = (name) => {
    // console.log(`Welcome ${name}`);
}

// welcome("Jakariya Ahmed");

// one line version
const addition = (a, b) => a + b ;
// console.log(addition(20, 30)); // 50

/// Calculate area
const calculateArea = (radious) => {
    const result = Math.PI * (radious * radious);
    console.log(result);
}
// calculateArea(20);

const logger = (message) => {
    console.log(`[LOG]: ${message}`)
}

// logger("hi logger !");

// array method
const numbers = [1, 2, 3, 4, 5];
const square = numbers.map (n => n * n);
console.log(square); 