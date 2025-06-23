import { PI, add } from './module.js';
import { userName, sayHi } from './module.js'


console.log(PI);
console.log(add(10, 20));

console.log(userName);
console.log(sayHi(userName));

// import default function
import importDefault from './module.js';
importDefault();

// rename export function
import { subtract as minus } from './module.js';
console.log(minus(20, 15));





