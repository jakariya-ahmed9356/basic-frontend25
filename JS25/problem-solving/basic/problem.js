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
// Setp 1: Covert string to  array, Step 2: Reverse the array
// Step 3: Join back to string
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

function reverseStringByRecursion(str) {
    // Base case: if string is empty, return it.
    if (str === '') return '';

    // Recursive step: call the function onthe rest of the string
    return reverseStringByRecursion(str.slice(1)) + str[0] ;
}

// Clear str[0] === arr[0] => result is : b
const str = 'abc';
const arr = ['a','b','c'];

// console.log(str[1]);
// console.log(arr[1]);


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

console.log(palindromeByLoop("racecar"));
console.log(palindromeByLoop("hello"));
