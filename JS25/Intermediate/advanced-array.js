/***
 * Mutator Array Methods 
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
    console.log(row);

let userRow = ['Name', 'Email', 'Phone', 'Address','age', 'education'];
let clonedRow = userRow.copyWithin(2, 0, 3);
console.log(userRow);











