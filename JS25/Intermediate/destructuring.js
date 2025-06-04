
/**
 * =============================
 * Destructuring array
 * =============================
 * 
 */
//basic destructuring
const roles = ['admin', 'author', 'user'];
const [first, second, third] = roles;

//skipping Elements
const [manager, , engineer] = ['manager', 'HR', 'Engineer']

//Default Values 
const [a = 'Guest', b = 'User'] = [];

//Swapping Values
let x = 1, y = 2;
[x, y] = [x, y];

//object destructuring basic
const user = {name: 'Jakariya', profession: 'Software Engineer'}
const { name, profession } = user;

//renaming variable
const {name: fullName } = user;

//default value in objects
const { age = 26 } = user;

//nested object destructuring
const person = {
    person_name: 'alex',
    address: {
        city: 'Moulvibazar',
        country: 'Bangladesh'
    }
}

const {
    address: {city, country}
} = person;

//rest in object
const { person_name, ...details } = person;


console.log(details);















