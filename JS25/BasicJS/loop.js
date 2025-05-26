/* Loops 
    for, while, do...while, for..of, for...in;

*/


/**************************  For Loop **************************/

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

/* Loop Control Statements Break and Continue  */
// Break -> Exit the loop entirely
for (let i = 1; i < 10; i++) {
    if ( i == 5) break;
    // console.log(i);
}
/* Advanced For loop with break control statement */
let users = ["Jakariya", "Rasel", "Rumon","Hussain"];
let targetUser = "Rumon";

for (let i = 0; i < users.length; i++) {
    
    if (users[i] === targetUser) {
        // console.log(`${targetUser} = ${users[i]} is found!`);
        break;
    }

}

/* Advanced for loop with continue control statement */
let inputs = ["yes", "", "no", null, "maybe"];

for (let input of inputs) {
  if (!input) continue; // skip if empty or null
//   console.log("Valid input:", input);
}

// Continue -> Skip current iteration only
for (let i = 10; i > 1; i--) {
    if (i == 5) continue;
    // console.log(i);
}

/// Skill only even number by continue loop statement, from 1 - 20 odd numbers
for (let m = 0; m < 20; m++) {
    if(m % 2 == 0) continue;
    // console.log(m);
}

// print 1 - 40 odd number
for (let i = 0; i < 40; i++ ) {
    // if(i % 2 !== 0) console.log(i); 
}

/* short form even numbers  */
for (let i = 0; i < 20; i++) if(i % 2 == 0) console.log(i);

/* short form even numbers  */
for(let n = 0; n < 20; n++) if( n % 2 !== 0) console.log(n);

/* continue key is not possible in short line code  */
for(let n = 0; n < 20; n++) if( n % 2 !== 0) continue ;

/**************************  while & do while loop  **************************/


let j = 0;
while (j < 5) {
    // console.log(i);
    j++
}

// until type yes loop is continue running
let agree = false;
while  (!agree) {
    // const input = prompt("Do you agree? (yes/no)");
    //if(input === 'yes') agree = true; //short for loop
}

// console.log("Thank you! ");

let s = 1;
// while (s <= 5) console.log(s++);

let n = 0;
// while (n) console.log(--n); 

let sum = 0;
while (true) {
    let value = 5;
    if( sum == value) break;
    sum++;
}

// console.log(sum);


///do while loop

do {
    n++;    
    // console.log(n);
}while (n < 5);





/**************************  For Of & For In **************************/

/****************  Get Array in different ways *****************/
// Single Array
const userArray = ["jek", "jek@gmail.ocm", 5855858585858]

const fruits = ["Banana", "Jackfruit", "Apple", "Mango"];
for (const fruit of fruits) {
    // console.log(fruit);
}

//only access array value
for (const userInfo of userArray) {
    // console.log(userInfo);
}

///array access index and value
for ([index, val] of userArray.entries()) {
    // console.log(`Index: ${index}, Val: ${val}`);
}

/// iterate for...of in number array 
let numbers = [1, 2, 3, 4];
for (let num of numbers) {
    // num = num * 2; 
    num*= 2;
    // console.log(num); /* can't acces array index and value */

}

/* array index and value access */
// Method 01: by increment for loop
for (let i = 0; i < numbers.length; i++) {
    // console.log(`Index: ${i}, Value: ${numbers[i]}`);
}

//Method 02: using entries() function
for ([index, val] of numbers.entries()) {
    // console.log(`Index: ${index}, Value: ${val}`);
}
//Method 03: using forEach() function
numbers.forEach((val, index) => {
    // console.log(`Index: ${index}, Value: ${val}`);
});

//array variable
const numArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

//// nested array for...of 
for (const row of numArray) {
    // console.log("Row: ");
    for (const num of row ) {
        // console.log(num);
    }
}
/// nested array in forEach() function
numArray.forEach(row => {
    // console.log("Row:");
    row.forEach(num => {
        // console.log(num);
    });
});

/// nested array val:index using tradional nested for loop 
for (let i = 0; i < numArray.length; i++) {
    // console.log(`Iteration (i = ${i})`);
    for (let j = 0; j < numArray[i].length; j++) {
        // console.log(`Index: [${i}][${j}] = ${numArray[i][j]}`);
        // console.log(`Index: [${i}][${j}] = ${numArray[i][j]} → (i = ${i}, j = ${j})`);
    }
}

/* 
Output: 
First Iteration (i = 0)
Index [0][0] = 1 → (i = 0, j = 0)
Index [0][1] = 2 → (i = 0, j = 1)
Index [0][2] = 3 → (i = 0, j = 2)

Second Iteration (i = 1)
Index [1][0] = 4 → (i = 1, j = 0)
Index [1][1] = 5 → (i = 1, j = 1)
Index [1][2] = 6 → (i = 1, j = 2)

Second Iteration (i = 2)
Index [2][0] = 5 → (i = 2, j = 0)
Index [2][1] = 4 → (i = 2, j = 1)
Index [2][2] = 6 → (i = 2, j = 2)
*/


/// nested array val:index using forEach() function
numArray.forEach((row, i) => {
    // console.log('index:'+ i);
    row.forEach((num, j) => {
        // console.log(`[${i}] [${j}] → ${num}`);
    });
});

/// nested array val:index using for...of loop
for (const [i, row] of numArray.entries()) {
    // console.log("Iteration:" + i);
    for (const [j, num] of row.entries()) {
        // console.log(`Index: [${i}] [${j}] = ${num}`);
    }
}


for (const char of "Jakariya") {
    // console.log(char);
}

/****************  Get object in different ways *****************/



//Single Object 
const user = {
    name: "jek",
    email: "Jek@gmail.com",
    mobile: 595585853498484,
}

//for (const info of user) { console.log(info); } /* error: user or object is not iterable  */
//for ([index, val] of userArray.entries()) { console.log(val)} /* Array can iterate without index and value */
//Object entries() function

///single object key:val access
for (const [key, val] of Object.entries(user)) {
    // console.log(`${key} = ${val}`);
}

//Only Object keys accesss by key() function
for (const key of Object.keys(user)) {
    // console.log(key);
}
const key = Object.keys(user);
// console.log(key);

//Only Object Vaues access by values() function
for (const value of Object.values(user)) {
    // console.log(value);
}

const value = Object.values(user);
// console.log(value);


/* multi object values access by using different methods and for...of loop*/
const usersInfo = [
    {name: "Jakariya Ahmed", email: "jek@gmail.com", mobile: "0160158558585", status: "active"},
    {name: "Hussain Ahmed", email: "hussain@gmail.com", mobile: "0160158558569", status: "inactive"},
    {name: "Alex hugli", email: "alex@gmail.com", mobile: "0160158558590", status: "active"},
];

/// multi object value access using for...of loop
for (const user of usersInfo ) {
    console.log('Name: ' + user.email);
    console.log('Email: ' + user.mobile);
    console.log('Mobile: ' + user.name); 
}

/// Access particualr values
for (const {name, email, status} of usersInfo) {
    // console.log(name,email);

}

// Arrow function
const square = sq => sq * sq; //square calcualtion without parameter
const addtion = (a, b) => a + b; // addition calculation with parameter
// console.log(square(4));
// console.log(addtion(5, 5));
const greet = () => console.log("Hello!"); /// string display with function calling
// greet(" World ");
/// use {} when you need write multiple line and must return
const multiply = (x, y) => {
    const result = x * y;
    return result;
};

// console.log(multiply(5,10));

// object assign in arrow function
const productInfo = () => ([
     {
    name: 'New T-shirt',
    price: 239,
    color: ['red','blue','yellow']
    },
    {
        name: 'Modern Man Pant',
        price: 2000,
        color: ['black','gray','white']
    }
]);

const products = productInfo();
for (const product of products) {
    console.log(`Name: ${product.name}, Price: ${product.price}, Color: ${product.color.join(', ')}`);
    console.log(`Name: ${product.name}, Price: ${product.price}, Color:`);
    product.color.forEach(colors => {
        // console.log(colors);
    })
}

// Object assign in variables
const citizensInfo = [
    {
        name: "Alex",
        age : 25,
        division: "Sylhet",
        profession: ['Software Engineer', 'Writer', 'Content Creator'],
        status: "Single",
    },
    {
        name: "Jakariya",
        age : 22,
        division: "Dhaka",
        profession: "News Artist",
        status: "Married",
    },
    {
        name: "Arif Hussain",
        age : 30,
        division: "Sylhet",
        profession: ['Driver','Volunteer'],
        status: "Single",
    }
];
/*
// forEach() function give me access to citizen information but not able to return 
    or store data in variable. Thus, this is not correct way to access mixed-type data 
*/
    
citizensInfo.forEach(citizen => {
    const professions = Array.isArray(citizen.profession) 
    ? citizen.profession.join(', ') : citizen.profession;
    console.log(citizen.profession);
})

/*

// Objects using for..of loop with professions array Method: 02;
for...of loop can access in object mixed-typed data but not able return 
or store data in variable 
*/
for (const citizen of citizensInfo) {
    let professions = Array.isArray(citizen.profession) ? citizen.profession.join(', '): citizen.profession;
    console.log(`Name: ${citizen.name}, Age: ${citizen.age}, Professions: ${professions}`);
}



/*  Core few use case of map() function */
// 
const userData = ['Jakariya','jek@gmail.com',9340505959];
const numberData = [5,7,10,11]
const multiplication = numberData.map(num => num * 3);
// console.log(multiplication);
const updatedNumber = numberData.map(num => num === 9 ? "Match" : "Not match");
// console.log(updatedNumber);
const checkAge = multiplication.map(age => age >= 18 ? "Adult" : "Tennage");
// console.log(checkAge);

const greeting = userData.map(user => user + "welcome");
// console.log(greeting);


/*
// Access mutliple array data in Objects using map() function Method: 02;
// This system only return array value but not object value
*/

const mapResult = citizensInfo.map(citizen => {
    return Array.isArray(citizen.profession) ? citizen.profession.join(', ') : citizen.profession;
});




//This is ideal way to access in object array by map() arrow function with 
//return value with variables both object and object array 

const citizens = citizensInfo.map(citizen => ({
    mixed_professions: Array.isArray(citizen.profession) 
        ? citizen.profession.join(', ') : citizen.profession,
        name: citizen.name,
        age: citizen.age,
        division: citizen.division
}));

citizens.forEach(data => {
   console.log(`Name: ${data.name}, Profession: ${data.mixed_professions}`);
})



// This is also ideal way for Extracting specific data and insert new object value
const formattedCitizens = citizensInfo.map(citizen => ({
    name: citizen.name,
    age: citizen.age,
    profession: Array.isArray(citizen.profession)
                ? citizen.profession.join(', ')
                : citizen.profession,
    division: citizen.division,
    married_status: citizen.age >= 25 ? "Married" : "Single",
}));

formattedCitizens.forEach(info => {
    // console.log(`Name: ${info.name}, Age: ${info.age}, Profession: ${info.profession}`);
});
// console.log(formattedCitizens);









/********
// Objects using filter() array function with professions array Method: 03;
//This is correct and professional way to filter and return or store data by variable
but not shorter way  
*********/
const multiProfessions = citizensInfo.filter(professions => {
     const checkProfessions = Array.isArray(professions.profession);
     return checkProfessions;
});

multiProfessions.forEach(citizen => {
    // console.log(citizen.name);
});



/* 
filter function only return boolean data not allow string 
*/

//filter only by checking array profession 
const filterResult = citizensInfo.filter(professions => Array.isArray(professions.profession))

const aultResutl = citizensInfo.filter(adult => adult.age > 25);
const marrridStatus = citizensInfo.filter(married => married.status === 'Single')
// console.log(marrridStatus);



// Accesss in Object specific values by filter() function
const activeUsers = usersInfo.filter(user => user.status === 'active');

// console.log(activeUsers);
for(const activeUser of activeUsers) {
    console.log(activeUser.name);
}


/// you can accesss multi object value
for (const user of usersInfo) {
    if(user.status === 'active'){
        console.log(`Welcome ${user.name}, Your Status: ${user.status} `);
    }else{
        console.log(`Please Login! ${user.name}, Your Status: ${user.status}`);
    }
}

///method: 01; you can access object val and key by nested for..of loop
for (const user of usersInfo) {
    // console.log("User:");
    for (const [key, val] of Object.entries(user)) {
        // console.log('Key:' + key + " , " + "Val: " + val);
    }
}




/// Method: 02; you can access boject key:val by forEach loop
// usersInfo.forEach((key, val) => {});

usersInfo.forEach(user => {
    // console.log('Val:' + user.name);
});


/************************* for.... in ************************/

const student = {
    name: "alex",
    age : 23,
    department: "Computer",
    reg: 23233333,
}

for (let key in student) {
    // console.log(`${key} : ${student[key]}`);
}

for (const [key, val] of Object.entries(student)) {
    // console.log(`${key} : ${val}`);
}

const roles = {
    admin: "Has full control",
    Author: "can edit content",
    User: "Can control their account"
}


for (let role in roles) {
    // console.log(`${role} = ${roles[role]}`);
}


/// hasOwnProperty
for (let key in roles) {
    if(roles.hasOwnProperty(key)){
        // console.log(`${key} : ${roles[key]}`);
    }
}

// Count key with specific prfix
const settings = {
    ui_theme: "dark",
    ui_font: "Segoe UI",
    db_host: "localhost",
    db_port: 3306
}

let uiSettings = {};
for (let key in settings) {
    if(key.startsWith("ui_")) {
        uiSettings[key] = settings[key]
    }
}

console.log(uiSettings);