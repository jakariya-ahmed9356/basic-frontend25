/***
 * @param object mehtods
 * @param { object.keys() } - return array of all keys in the object
 * @param { object.values(obj) } - return array of all values in the object
 * @param { object.entries() } - return key-value pairs as nested arrays
 * @param { object.assign(target, source) } - copies properties from sourse object(s) to target
 * @param { object.freeze(obj) } - prevents any changes to an object(immutable)
 * @param { object.seal(obj)} - prevents adding/deleting but allows modifying existing ones.
 * @param { object.hasOwnPropery(key) } - checks property in object
 * @param { object.defineProperty() } -  Define or modify a property with fine control (e.g., non-enumerable, non-writable)
 * 
 */

// object 
const user = {
    name: 'Jakariya',
    age: 26,
    isDeveloper: true,
    greet: function() {
        console.log(`Hello, ${this.name}`);
    }
}

// console.log(user.greet());

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

const assignObject = {
    married: 'Single', 
    country: 'Bangladesh', 
    email: 'jek@gmail.com'
    };

const marge = Object.assign({}, user, assignObject);
//freeze not change anything
Object.freeze(user);
user.age = 23;
// console.log(user);

//only modify existin onces but can't adding/deleting
Object.seal(user);
user.name = 'Jakariya Aman';
user['division'] = 'Sylhet';
delete user.age;
//professional assign object

function assignRole(userObj, role) {
    // userObj.role = role;
    userObj['role'] = role;
    return userObj;
}
let assignNew = assignRole(assignObject, 'Admin');

//Object.hasOwnProperty(key)
let checkPropery = user.hasOwnProperty('age');

// Object.defineProperty has confusion 
Object.defineProperty(user, 'id', {
    value: 101,
    writable: false,
    enumerable: true
});
user.id = 222;
console.log(user);












































