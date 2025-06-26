
/**
 * Functional Programing 
 * 1. Pure Functions - Same input → Same output, no side effect
 * 2. Immutability - Don't change original data e.g.,map,filter
 * 3. Hight-Order Functions - Functions that take/retun other functions
 * 4. Function Compostion - Combine many small functions into one bigger logic
 * 5. First-Calss Functions
 * 6. Declarative vs. Imperative
 */


/**
 * Pure Functional Programing
 * (i). Return same ouput for the same input
 * (ii). No side effects, no DOM, no API call, no global vars
 * (iii). Depends only on its parameters
 */

// Tax Calculator
function calculateTax(price, rate) {
    return price * rate;
}

const cal = calculateTax(2000,0.1);

// Convert celsius to fahrenheit
function toFahrenheit(celcius) {
    return (celcius * 9) / 5 + 32;
}

const deparature = toFahrenheit(25);

// Capital First Letter
function capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

const Upper = capitalize("jakariya ahmed");
// console.log(Upper);


/**
 * Immutability 
 * (i). No hidden changes or suprises in data
 * (ii). No side-effects, easier to trace
 * (iii). work perfectly FP priciples
 * (iv). React state relies heavily on immutability
 */

// mutating array
const arr1 = [1, 2, 3, 4];
const mutated = arr1.push(5);

// Imutable approach
const arr2 = [1, 2, 3,4];
const newArr = [...arr2, 5];


// Mutatin in object
const user = {name: "alex", age: 25};
    user.age = 26;
// console.log(user);
// Immutable way
const updatedUser = {...user, age:27};

const students = [
    {id: 1, name: "Adam", department: 'CSE'},
    {id: 2, name: 'Aman', department: 'EEE'},
];

const updatedStudent = students.map(student => 
    student.id === 2 ? {...student, name: "Jakariya Aman"}: student
);




console.log(students);
console.log(updatedStudent);





