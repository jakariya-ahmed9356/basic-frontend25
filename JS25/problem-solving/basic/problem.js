/**
 * Basic level 20 Problems solve
 * 
 */

// Question - 01
/**
 * Write a function that takes a string as input and 
 * return the reversed version of it.
 *
 * Reverse a given string using built-in methods.
 * @param {string} str - The input string to reverse
 * @returns {string} - The reversed string
 *   
 */

// Solution 01:
function reverseString(str) {
    // Step 01: String convert into character array by split() 
    return str.split('').reverse().join('');
}
// console.log(reverseString('Jakriya'));

// Solution 02;

/**
 * Reverse a string using recursion
 * @param {string} str - The string to reverse
 * @returns {string} - The reversed string .
 *  
 */

/**  How work recursion functions
 *  A recursion function is a function that calls itself to solve a
 *  smaller part of a bigger problem - until it reaches the end point.

*/


function reverseStringByRecursion(str) {
   if (str === '') return '';
    const sliced = str.slice(1);
   return reverseStringByRecursion(sliced)+ str[0];

}
// console.log(reverseStringByRecursion('Jakariya'));






// Solution 03:
/**
 * Reverse a string manually using a loop
 * @param {string} str - The input string to reverse
 * @returns {string} - The reversed string.
 * 
 */

function reverseStringByLoop(str) {
    let reversed = '';
    // let i = str.length;
    // i = str.length - 1;
    // Looping from last index to first
    // str.length = 8; but last index = 7;
    // str.length - 1 = 8 - 1 = 7 , so length 7 = last index 7 
    for (let i = str.length - 1; i>=0; i--) {
        reversed += str[i]; // Append characters in reverse order 
    }

    return reversed;
}

// console.log(reverseStringByLoop('Jakariya'));



// Question -02:
/**
 * Write a function that check whether a given string is a palindrome 
 * ignore casing and non-alphanumeric characters if needed
 * 
 */

// Solution 01:
/**
 * Check if a string is a palindrome (case-insensitive)
 * @param {string} str - The input string to check
 * @return {boolean} - True if palindrome, else false
 *  
 */

function isPalindrome(str) {
    // Normalize the string: remove no-alphanumerics & lowercase
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Compare original and reversed
    return cleanStr === cleanStr.split('').reverse().join('');

}

// console.log(isPalindrome('madam'));
// console.log(isPalindrome('hello'));

// Solution 02:

/**
 * Check if a sting is palindrome using two pointer approach
 * @param {string} str - The string to check
 * @returns {Boolean} - True if palindrome, else false
 * 
 */

function palindromeByLoop(str) {
    const cleanStr =  str.toLowerCase().replace(/[^a-z0-9]/g, '');

    let left = 0;
    let right = cleanStr.length - 1;

    while (left < right) {
        if (cleanStr[left] !== cleanStr[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;

}

// console.log(palindromeByLoop("racecar"));
// console.log(palindromeByLoop("hello"));


// Find max number in array by Math.max()
const numbers = [10, 4, 90, 7, 10, 20,39];

function findMaxOne(arr) {
    return Math.max(...arr); // Spread the array into 4,6,7,10,90,20,39
}

// console.log(findMaxOne(numbers));
 
// Find max number in array by for loop

function findMaxWayTwo(nums) {
    let max = nums[0]; // Start with first index 0 = 10;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    return max;
}
// console.log(findMaxWayTwo(numbers));


// Find Max number by reduce();
function reachMaxNum(nums) {
    return nums.reduce((max, curr) => curr > max ? curr: max );
}

// console.log(reachMaxNum(numbers));



