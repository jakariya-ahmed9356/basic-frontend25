const _ = require('lodash');
require('dotenv').config();
console.log('Enviromental Varable Port: ', process.env.PORT);

// Original Data 
const numbers = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 9, 10];
const nested = [1, [2, [3,[4]]], 5];
const bigArray = [1,2,3,4,5,6,7,8,9,10];

const chunks = _.chunk(bigArray, 3);
console.log('Chunked Array:', chunks);


// Remove duplicates 
const unique = _.uniq(numbers);
console.log('Unique Values:', unique);


// Flatten nested arrays
const flatten = _.flattenDeep(nested);
console.log('Flatten Array:', flatten);


console.log('Nodemon is installed');
const name = "aman";
if(name == 'aman') {
    console.log("Condition is ture");
}


