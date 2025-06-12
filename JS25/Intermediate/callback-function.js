/**
 * ======================
 * Callback Function
 * ======================
 * @param {string} name - name of user 
 * @param {function} callback - function passed as a parameter
 * 
 */

const student = {
    name: 'alex',
    age: 26,
    subjec: 'CSE'
};

const user = {
    name: "Bappi",
    email: 'bappi@gmail.com',
}


function greet(name, callback) {
    console.log(`Welcome to ${name} in Callbakc function`);
    callback();
}

//call callback in anonymous function 
greet('Jakariya Aman', function () {
    // console.log('Welcome to Callback function !');
});


//reuseable callback function 
function greeting (name, actionGreet) {
    console.log(`Hi ! ${name}`);
    actionGreet(name);
}

/**
 * @object {string} name  
 */
const employe = [
    {
        name: 'Ali',
        designation: 'engineer',
    }
];

const addNewRole = {age: 25, state: 'Sylhet'};
// employe.push(addNewRole);


//add new value by callback function
function callbackFunction(funcationPassed) {
    funcationPassed();
}

function addNew() {
    const addNewVal = {name: 'alex', designation: 'Digital Marketer'}
    const updated = employe.push(addNewVal);
    // console.log(employe);
}
callbackFunction(addNew);


function welcomeMsg(name) {
    console.log(`${name} Welcome to our universe`);
}

function fareWellMsg(name) {
    console.log(name + ' ' +'Good bye, and see you again! ');
}

function warningMsg() {
    console.log('You must arrive befor 10:00 pm');
}

//using different callbacks
// greeting(user.name, welcomeMsg);
// greeting(student.name, fareWellMsg);
// greeting(user.name, warningMsg);



































