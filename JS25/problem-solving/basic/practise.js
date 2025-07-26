
// Example Count Down
function countDown(n) {
    if (n === 0) {
        console.log('Done!');
        return;
    }
    console.log(n);
    countDown(n - 1)
}

// countDown(20);


// print 0 to 100 numbers 
for (let i = 1; i <= 100; i++) {
    // console.log(i);
}


// print 100 to 0 number
// console.log('Print 100 to 0:');
for (let i = 100; i >= 1; i--) {
    // console.log(i);
}
// print 1 to 100 numbers by recursion function
function zeroToHundred(n) {
    if (n > 100) return;
    console.log(n);
    zeroToHundred(n + 1);
}
// zeroToHundred(0);


// print 100 to 1 numbers by recursion function
function hundredToOne(n) {
    if (n < 1) return;
    console.log(n);
    hundredToOne(n - 1);
}
// hundredToOne(100);

// reverse character by split()

function reverseString(str) {
    return str.split('').reverse().join('');
}

// console.log(reverseString("Bangladesh"));

/**
 * Reverse string by recursion function
 */

function reverseStringByRecursion(str) {
    if (str === '') return ''; //Base case
    return reverseStringByRecursion(str.slice(1)) + str[0]; 

}

/**
 * Reverse String by for loop 
 * 
 */

function stringIndex(str) {
    console.log(`Total length: ${str.length}`);
    console.log(`Total Index: ${str.length - 1}`);
    let lastCharacter = str[str.length - 1];
    console.log(`Last Character: ${lastCharacter}`);
    console.log(`Total Index: ${str.lastIndexOf(lastCharacter)}`);
}

// stringIndex("Jakariya Ahmed");

function reverseStringByLoop(str) {

    let reversed = '';
    
    for (let i = str.length - 1; i>=0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// console.log(reverseStringByLoop("Bangladesh"));

/**
 * spread operator (...arr) convert array into individual numbers
 * VS
 * rest parameter (...args)  individual string into array
 * 
 */

const numbers = [5, 10, 20, 30];

function summation(...nums) {
    let total = 0;
    for (let num of nums) {
        total += num;
    }
    return total; 
}
// console.log(summation(...numbers));

const first = "Jakariya Ahmed";
const others = ["Aman", 'Rasel', 'Rumon', 'Nahid'];

function greet(first, ...others) {
    const name = '';
    console.log("First Name:", first);
    console.log("Others:", others);
    for(let other of others){
        console.log("You name is:", other);
    }
}

// greet(first,...others);


const nums = [60,40,20,2,3,50];
// Find max value by Math.max();
function findMaxNum(nums) {
    return Math.max(...nums);
}

// console.log(findMaxNum(nums));

function getMaxNum(nums) {
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    return max;
}

// console.log(`Max Number is: ${getMaxNum(nums)}`);


function catchMaxNum(nums) {
    let max = nums[0];
    for (let i = nums.length-1; i > 1; i--) {
        console.log(`Index[${i}] = ${nums[i]}`);
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    return max;
}

// console.log(catchMaxNum(nums));

let total = 0;
// nums.map(num => total += num);
// console.log(total);
// nums.forEach(num => total += num);

let i = 0;
while(i < nums.length) {
    // total += nums[i];
    i++;
}

for (let i = 0; i < nums.length; i++) {
    // total += nums[i];
}

const sums = nums.reduce((acc, curr) => acc + curr, 0)

// console.log(sums);

