/* 
JavaScript data types
1/ Number  2/ String   3/ Boolean   4/ Null
5/ Undefined   6/ Symbol   7/ BigInt
*/



/* Number data type inludes integers and floating-point numbers */
let age = 25;
let price = 75.5;

/* String all of text data in double or single qutation and Backticks */
let name = "Jakariya Ahmed";
let email = 'jek@gmail.com';
let message = `Hello, ${name}!`;

// console.log(message);

//mixing string with numbers in calcuations
/* 
console.log('5' + 50); //550 string
console.log('10' + '20'); // 1020 string
console.log(10 + 20); //30 addition
*/


/* Boolean Data Type presents ture or false 
   Use case for Conditionals, Toggle swithches, login systems
*/
let isLoggedIN = true;
let isExpired = false;



/* Null Data Type */
let selectedItem = null;



/* Undefined Data Type. Use case check value is assigned or not, 
    Optional parameters
 */
let username;
console.log(username);


/* Symbol Data Type (Advanced) */
const ID = Symbol(userID);
const user = {
    name: "Jakariya",
    [ID]: 294789,
};




















