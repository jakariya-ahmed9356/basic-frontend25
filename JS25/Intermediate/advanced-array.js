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
const multiCurrentRoles = ['admin', 'editor', 'seller']; //user has multiple roles

function hasAccess(currentUserRole, allowedRoles) {
    return allowedRoles.includes(currentUserRole);
}

if (hasAccess(currentUserRole, allowedRoles)) {
    // console.log(currentUserRole + " " +"Access Granted !");
}else {
    // console.log( currentUserRole + ' ' +"Access Denied !");
}

//second way it is slow for  
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
 * @param { filter() and includes() } - check user multiple roles
 * @param { find() } - check user multiple roles 
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

























