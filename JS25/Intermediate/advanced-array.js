/***
 * Mutator Array Methods 10 
 * @param { push () } add elements to the end
 * @param { unshift() } add elements to the beginning
 * @param { pop() } remove the last element
 * @param { shift() } remove the first element
 * @param { splice() } add remove elements at a specific index
 * @param { sort() } sort elements
 * @param { reverse() } reverse the order
 * @param { fill() } fill elements with a static value
 * @param {copyWithin() } copy part of array to another location
 * 
 * 
 ***/

/***
 * @param { push() } 
 * @param fruits.push('Strawberry') add to end single element of array
 * @param fruits.push('blackbarry', 'Bannana') add multiple elements to end of array
 * @param let totalLength = push('papaya') show total length of array
 * 
 * 
 */

let fruits = ['Mango', 'Apple', 'Orange']
    fruits.push('Strawberrry');

let totoatLength = fruits.push('blackbarry', 'Orange');
    // console.log(fruits);

/***
 * @param { unshift() }
 * @param unshift() add elements to beginning of the array
 * @param unshift() return the removed element
 * @param Mutates the original array
 * @returns undefined if the array is empty
 *  **/ 

fruits.unshift('Orange');
// console.log(fruits[0]);


/***
 * @param { pop() }
 * @param pop() method remove the last from the array
 * @param pop() return the removed element
 * @param Mutates the original array
 * @returns undefined if the array is empty
 *  **/ 
let removed = fruits.pop();
// console.log(fruits );

/***
 * @param { shift }
 * @param shift() remove first element from the array
 * @param Follow FIFO queue  
 * 
 */

let customerQueue = ['Customer1', 'Customer2', 'customer3'];
    let servedCustomer = customerQueue.shift();
    // console.log(servedCustomer);

/*******
 * Summary push(), unshift(), pop(), shift() 
 * @praram real world use 
 * @param To-do list → use push() to add
 * @param pop() to undo
 * @param Queue systems → use shift() to serve the next
 */


/******  
 * @param splice(index, deleteCount, newItem1, newItem2, ...) 
 * @param remove splice(1, 1) 
 * @param add splice(1, 1, 'x', 'y')
 * @param replace splice(1, 1, 'z')
 * @param remove multiple index splice(3, 1); splice(1, 1)
 *          removed index 3 and index 1 
 * @param Mutates the origina array
 * @param very powerful and versatile
 *  */ 
//remove 
let bazarList = ['Potato', 'Tomato', 'Zinger', 'Garlic'];
    bazarList.splice(1,2);
    bazarList.splice(1, 0, 'Green Chili', 'Cucumber', 'Carrot');
//replace
    bazarList.splice(0, 2, 'Cabbage');
    // console.log(bazarList);

/****
 * @param { sort() }
 * @param sort() default convert numer into string
 * @param '1' form '10', '2' form '20', '3' from '30'
 * @param js these numbers are smaller than '5'
 * @param result [10, 20, 30, 5]
 */
//
let nums = [10, 1, 5];
    nums.sort();
// actual numeric sort
    let numSort = nums.sort((a, b) => a - b)
//numeric reverse sort
    let reverseSort = nums.sort((a, b) => b - a);
//object sort
let user = [
    {
        name: 'Hussain',
    },
    {
        name: "Ahmed Hussain"
    }
];

    user.sort((a, b) => a.name.localeCompare(b.name));
    // console.log(user);

/**
 * @param { reverse() }
 * 
 */

let path = ['Home', 'About', 'Contact'];
    path.reverse();
    // console.log(path);

/**
 * @param { fill() }
 * @param reset scores or stats
 */
let scores = [80, 50, 90, 100];
let formFileds = new Array(5).fill('');

    scores.fill(0);

// console.log(scores);

/****
 * @param { copyWithin(index: 2, start:0, end:2) }
 * @param { index = 2: start replacing from index 2 }
 * @param { start = 0: start copying from 0 index }
 * @param { end = 2: Stop copying before index 2}
 * @param copyWithin() data duplication in grid/matrix
 * copying row[2] replace by row[1] and row[2]
 */

let row = ['A1', 'B1', 'C1', 'D1','F1'];
    row.copyWithin(2, 0, 2);
    // console.log(row);

let userRow = ['Name', 'Email', 'Phone', 'Address','age', 'education'];
let clonedRow = userRow.copyWithin(2, 0, 3);
// console.log(userRow);


/***
 * Accessor Array Methods Seven
 * @param { concat() } Merge arrays 
 * @param { slice() } Extract a section
 * @param { join() } Convert array to string 
 * @param { includes() } Check if a value exists 
 * @param { indexOf() } Get index of first Occurrence
 * @param { LastIndexOf() } Get index of last occurrence 
 * @param { toString() } Convert array to comma-separated string
 * @param {at() } Access element at specific index(including negative index)
 * 
 */


/****
 * @param { concat() }
 * @param concat() marge data from different source
 * @param use case dashboard apps, analytics tools,
 * 
 */

const usersFromAPI = ['Rumon', 'Rasel', 'Alexa'];
const usersFromDB = ['Jek', 'Jakariya', 'Alex'];

const margeUsers = usersFromAPI.concat(usersFromDB); 

// console.log(margeUsers[0]);


/***
 * @param { slice(startIndex, endIndex) }  Extract a portion of an array 
 * @param use case pagination 
 */

let portion = fruits.slice(2, 5);

const posts = ['Post1', 'Post2', 'Post3', 'Post4', 'Post5', 'Post6', 'Post7', 'Post8']

function pagination(array, page = 1, pageSize = 3) {
    // defaule page = 1; start = (index:1 - 1 = 0), (index:2 - 1 = 1).. * pageSize: 3;
    const start = (page - 1) * pageSize; 
    const end = page * pageSize;
    return array.slice(start, end);
}
/**
 * how it work?
 * Page = 1;
 * start = (1 - 1) * 3 = 0;
 * end = 1 * 3 = 3;
 * 
 * Page = 2; 
 * start = (2 - 1) * 3 = 3;
 * end = 2 * 3 = 6;
 * 
 * Page = 3;
 * start = (3 - 1) * 3 = 6;
 * end = 3 * 3 = 9; 
 */

// console.log(pagination(posts));


/***
 * @param { joiin() }  convert array to string 
 * 
 */

let words = ['Hello', 'World'];
let sentence = words.join(' ');

const tags = ["JavaScript", "PHP", "Node.js", "React.js"];
const tagSeperation = tags.join(', ');
// console.log(tagSeperation);


/***
 * @param { includes(value, startIndex) } check conditional statement
 * @param includes() return boolean true or false
 * 
 */


const appRole = ['Super Admin', 'Admin', 'Author', 'User']
const checkRole = appRole.includes('Author');

if(checkRole) {
    // console.log("Admin Access Granted !");
}else {
    // console.log("Acces Denied");
}

/***
 * @param {string} currentUserRole - The role of current user (e.g., 'Admin', 'Super Admin')
 * @param {string[]}  allowedRoles - Array of roles allowed to accees a resources 
 * @returns {boolean} - Returns true if the user has access, otherwise false. 
 * 
 * @example
 * hasAccess('Admin', ['Admin', 'Super Admin'])
 */

// pro level 
const allowedRoles = ['admin', 'super admin', 'seller'];
const currentUserRole = 'admin';
const multiCurrentRoles = ['author', 'editor', 'admin']; //user has multiple roles

function hasAccess(currentUserRole, allowedRoles) {
    return allowedRoles.includes(currentUserRole);
}

if (hasAccess(currentUserRole, allowedRoles)) {
    // console.log(currentUserRole + " " +"Access Granted !");
}else {
    // console.log( currentUserRole + ' ' +"Access Denied !");
}

//second way it is slow with filter()  
function accessControl(allowedRoles, currentUserRole) {
    return allowedRoles.filter(role => role === currentUserRole);
}

let matchRole = accessControl(allowedRoles, currentUserRole);
if(matchRole.length > 0) {
    // console.log(`${matchRole} Access Granted`);
}else {
    // console.log('Access Denied !');
}

/***
 * @parm similar array methods()
 * @param { filter() } - All matching elements (array) and return new array of elements
 * @param { find() } - checks condtion if matched return elements or values 
 * @param { includes() } - checks a specific primitive(not function, object) value in array or string and return boolean(true or false)
 * @param { some() } - boolean(true or false) if any element math the condition
 * @param { every() } - check every elements is same return callback function true else false
 */
//this use case include() efficient
let currentRoles = multiCurrentRoles.filter(role => allowedRoles.includes(role));
// this case find() slightly slower
// let currentRoles = multiCurrentRoles.filter(role => allowedRoles
        // .find(allowed => allowed === role));     

if (currentRoles.length > 0) {
    // console.log(`${currentRoles} Access Granted !`);
}else {
    // console.log(`Access Denied !`);
}

// this case some() 
const permittedRole = multiCurrentRoles.some(role => allowedRoles.includes(role));

if (permittedRole) {
    // console.log(`Access Granted !`);
}else {
    // console.log(`Access Denied !`);
}



/**
 * @param { indexOf() } - specific index of array
 * @param use case - validation, removal, or highlighting Element
 * 
 **/ 

const indexFind = fruits.indexOf('Apple');
// console.log(indexFind);

// lastIndexOf()
const lastIndex = fruits.lastIndexOf('Apple');
// console.log(lastIndex);

//toString()
const fruitString = fruits.toString();
// console.log(fruitString);

//at()

// console.log(allowedRoles.at(0));
// console.log(allowedRoles.at(-1));



/***
 * Iteration Array Methods 11 
 * @param { forEach() } - Loop through array no return value
 * @param { map() } - Return new array after applying a function
 * @param { filter() } - Return new array with elements that match condition
 * @param { reduce() } - Return a single value after reducing the array
 * @param { reduceRight() } - Like reduce but from right to left 
 * @param { some() } - Returns ture if any elements match
 * @param { every() } - Returns ture if all elements match
 * @param { find() } - Returns the first element that match
 * @param { findIndex() } - Returns the index of the first match
 * @param { flat() } - Flatten nested array
 * @param { flatMap() } - Map + flatten
 * 
 ***/

/****
 * @param confusion
 * @param { reduce(acc, curr, 0) } - Return a single value after reducing the array
 * @param { acc = accumulator } - Running total
 * @param { curr = current item } - current item
 * @param { 0 } - Initial value of the accumulator 
 */
const numbers = [1, 2, 3, 4, 5, 6];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

const employes = [
    {name: 'alex', role: 'manager', age: 26},
    {name: 'karim', role: 'labour', age: 22},
    {name: 'adam', role: 'engineer', age: 24},
    {name: 'jek', role: 'reporter', age: 26},
    {name: 'john', role: 'labour', age: 30}
];

const groupByRole = employes.reduce((acc, employe) => {
    acc[employe.role] = acc[employe.role] || [];
    acc[employe.role].push(employe.name);
    return acc;
}, {});

//some() return callback function true/false 
const grantedRole = multiCurrentRoles.some(role => allowedRoles.includes(role));
const onlyManager = employes.some(employe => employe.role === 'manager');
// console.log(onlyManager);

if (grantedRole) {
    // console.log(`Access Granted !`);
}else {
    // console.log(`Access Denied !`);
}

//every() check all value same if correct return callback function true or false
const onlyLabour = employes.every(employe => employe.role === 'manager')
//find() return elements that matched 
const onlyEngineer = employes.find(employe => employe.role === 'engineer');
//findIndex()
let checkIndex = employes.findIndex(data => data.name === 'alex'); 

if (checkIndex !== -1) {
    employes[checkIndex].role = 'Programmer'; //index:role updated
}
//flat() 
const postTags = [['sj', 'html'], ['css'],['react','node']]
const tagData = postTags.flat();

const tagResult = tagData.map(tags => tags);
    tagData.map((tag, i) => {
        // console.log(`Tag ${i + 1} : ${tag}`);
    });

/**
 * Represent students of application
 * 
 * Properties:
 * @property {string} name - Full name of the student
 * @property {number} registration - Unique registration number of the student 
 * @property {string} department - Academic department the student belongs to
 * @property {string[]} subject - List of subjects the student is enrolled in. 
 */

const students = [
    {
        name: 'Jakariya',
        regi: 90393030,
        department: 'CSE',
        subjects: ['Match', 'Java', 'Database Design'],

    },
    {
        name: 'Ali Ahmed',
        regi: 90390930,
        department: 'EEE',
        subjects: ['Math', 'Digital Electronic', 'Power Systems'],

    },
    {
        name: 'Farjana Akter',
        regi: 23393030,
        department: 'CSE',
        subjects: ['JavaScript', 'Java', 'System Design'],

    },
    {
        name: 'Alexa',
        regi: 90393030,
        department: 'Chemistry',
        subjects: ['Organic Chemistry', 'Analytical Chemistry'],

    },
     
];

/// pro level way 
const studentData = students.flatMap(student => 
    student.subjects.map(subject => ({
        name : student.name,
        department: student.department,
        subject: subject,
    }))
);

// console.log(studentData);


/**
 * ===============================
 * Advanced Utility Array Methods:
 * ===============================
 * 
 * This section contains built-in JS utility methods for working with array,
 * including creation, type-checking, iteration, and immutable updates
 * 
 * Methods Covered:
 * 
 * 1. Array.isArray() - Checks if a value is an array.
 * 2. Array.from() - Creates a new array from an iterable or array-like object.
 * 3. Array.of() - Creates a new array instance from individual arguments.
 * 4. Array.prototype.entries() - Returns an iterator of [index, value] pairs.
 * 5. Array.prototype.keys() - Returns an iterator of array indices.
 * 6. Array.prototype.values() - Returns an iterator of array values.
 * 7. Array.prototype.with() - Returns a new array with one element replaced (immutable, ES2023).
 *
 * Use these methods for clean, readable, and functional manipulation of array data,
 * especially when working with iterable data sources, modern JavaScript collections,
 * or when maintaining immutability in state management (e.g., React).
 * */


//from() 
const userName = 'Jakariya';
const letters = Array.from(userName);


/* convert nodelist from the DOM
const nodeList = document.querySelectorAll('.item');
const elements = Array.from(nodeList);

*/

//arrayOf()
const userAccess = Array.of('Admin', 'Editor', 'Subscriber');

// const newArray = Array.of(3);
const newArray = new Array(3);

//with()
const updateRole = userAccess.with(1, 'Author');

console.log(updateRole);













