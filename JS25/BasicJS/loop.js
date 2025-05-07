/* Loops 
    for, while, do...while, for..of, for...in;

*/


// for loop for increment
for (let i = 0; i < 5; i++) {
    // console.log(`Increment value is:  ${i}`);
}

//for loop for decrement
for (let d = 10; d >= 0; d--) {
    // console.log(`Decrement Value is: ${d}`);
}

// for (let i = 0; i < 5; i++) console.log(i); 

///for loop for user data display
const userInfo = ['Jakariya Ahmed', 'jakariya@gmail.com','Sylhet,bondor'];

for (let i = 0; i < userInfo.length; i++) {
    // console.log(userInfo[i]);
    // console.log(i);
}

// console.log("User Length " + userInfo.length);

// let stars = ''; 
// for (let i = 0; i < 5; i++) {
//     stars += '⭐';
// }

let stars = "";
for (let e = 0; e < 5; e++) stars+= "⭐";
// console.log(stars);

for (let i = 0; i < 10; i++) stars+=i; 
// console.log(stars);


/// while loop
let i = 0;
while (i < 5) {
    // console.log(i);
    i++
}

// until type yes loop is continue running
let agree = false;
// while  (!agree) {
//     // const input = prompt("Do you agree? (yes/no)");
//     // if(input === 'yes') agree = true; //short for loop
// }

// console.log("Thank you! ");

let s = 1;
while (s <= 5) console.log(s++);
















