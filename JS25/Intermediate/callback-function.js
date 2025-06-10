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
    // console.log(`Hi ${name}`);
    callback();
}

greet('Jakariya', function () {
    // console.log('Welcome to our team');
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
employe.push(addNewRole);

function callbackFunction(callbackPassed) {
    callbackPassed();
}

function insert() {
    const newEmploye = {name: 'jek', designation: 'Manager'} 
        employe.push(newEmploye);
    console.log(employe);
}


callbackFunction(insert)


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



































