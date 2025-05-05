/*  
Operators:
1/ Arithmetic,  2/ Assignment  3/ Comparison  4/ Logical
*/


/* 
Arithmetic operators: 
    Addition(+), Subtraction(-), Multiplication(*), Division(/), Modulus(%)
    Exponentiation(**), Increment(++), Decrement(--)
    */


let price = 100;
let tax = price * 0.15;
let total = price + tax;
// console.log(total); // 115

/* write a function that takes two numbers and returns the result of 
all arithmetic operations on them */
function calculateOperation(a, b) {
    return {
        sum: a + b,
        difference: a - b,
        product: a * b,
        quotient: a / b,
        remainder: a % b,
        power: a ** b
    };
}

// console.log(calculateOperation(10, 3));

/* Swapping tow numbers without a temp variable */
let a = 5; b = 15;
a = a + b; // 20;
b = a - b; // 5
a = a - b; // 15

// console.log('a =', a, 'b =', b);

/* check a number is even or odd in different strategy */
// most common 
function isEven(num) {
    if(num % 2 == 0) {
        console.log(`${num} is Even Number`);
    }else {
        console.log(`${num} is Odd Number `);
    }
}
// isEven(9); 

// use ternary operator (short syntaxt)
let n = 8;
// console.log(n % 2 === 0 ? `${n} is even number` : `${n} is odd number`);


// Bitwise And (&) operator 
let number = 6;

if(number & 1) {
    // console.log(`${number} Odd Number!`);
}else {
    // console.log(`${number} Even Number!`);
}

// professional bitwise and (&) 
function isOdd(number) {
    if((number & 1) === 1) {
        console.log(`${number} is Odd Number`);
    }else {
        console.log(`${number} is Even Number`);
    } 
}

// isOdd(9);

// Short Syntax and more profe

function checkOdd(number) {
    let check = (number & 1) === 1 ? `${number} is Odd Number` : `${number} is Even Number`;
    return check;
}

    // console.log(checkOdd(9));


///compound interest calculator
// Formula: A = P * (a + r / n) ^ (nt)
function compoundInterest(P, r, n, t) {
    const A = P * (1 + r / n) ** (n * t);
    return A.toFixed(2);
}

// console.log(compoundInterest(1000, 0.05, 12, 2));

/* Find the area of a circle */
//Formula: Area = π * r²
function circleArea(radius) {
    return (Math.PI * radius ** 2).toFixed(2);
}

// console.log(circleArea(8));
// console.log(Math.PI);









/* Assignment Operators 
    Assign(=), Add and Assign(+=), Subtract and assign(-=), Multiplay and assign(*=),
    Divide and assign(/=), Mudulo and assign(%=)
*/

//addition
let totalMarks = 250;
let newSubject = 40;

totalMarks += newSubject; // let totalMarks = totalMarks + newSubject;

//subtraction
let stock = 120;
let sold = 25;

stock -= sold;

// console.log("Remaining Stock: ", totalMarks);


/// Discount 
//Formula: Original Price * (1 - discount percentage / 100)
function discount(discount, OriginalPrice) {
    let disPrice = (discount / 100) * OriginalPrice;
    let salePrice = OriginalPrice - disPrice;
    return salePrice;
}   
// console.log(discount(5, 500));



/* Comparison Operators 
    Equeal to (==), Strict equal (===), Not equal (!=), Strict not equal (!==)
    Greater than(>), Less than (<), Greater than or equal (>=), Less than equal (<=)
*/

let age = 18;
if(age >= 18) {
    console.log("Access Granted");
}else {
    console.log("Access Denied. You must be 18+. ");
}


let cartValue = 250;

if(cartValue >= 200) {
    console.log("You are eligible for discount");
}else {
    console.log("Add more items for a discount");
}


//attendance bonus system

let workingDays = 30;
let yourAttendance = 22;

let attendancePercentage = (yourAttendance /workingDays) * 100; // convert attendenace decimal to percentage(%)
// check attendece condition
if(attendancePercentage >= 80) {
    console.log("You are eligible for bonus");
}else {
    console.log("You are not eligible for bonus");
}


















