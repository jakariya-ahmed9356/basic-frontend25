// console.log(this);

// this key inside an object mehthod
const user = {
    name: "Jakairya",
    greet() {
        console.log(`Hello, ${this.name}`);
    }
}

// user.greet();

// this key in arrow functin
const student = {
    name: 'Alex',
    age: 25,
    grow: () => {
        console.log(this.age);
    }
}
// undefined because arrow funtion do  not have this key
// student.grow();  

const person = {
    name: "Adam Smith",
    age: 26,
    grow() {
        console.log(this.age);
    }
}

// person.grow();

// setTime function in regular function with 'this'
const userInfo = {
    name: 'smith',
    /**
    sayHi() {
        setTimeout(function () {
            console.log(this.name);
        }, 1000);
    }
     */

    age: 25, 
    sayHi() {
        setTimeout(() => {
            console.log(`Name: ${this.name}, Age: ${this.age}`);
        }, 1000)
    }
}
// Undefined error not allow regular function
// userInfo.sayHi();


// Constructor Functions
function Person(name) {
    this.name = name;
}

const p1 = new Person("Jakariya Ahmed");
// console.log(p1.name);

// bind(), call(), and apply() with this key
function say(name) {
    console.log(this.name); 
}

const obj = { name: 'Adam Smithl'};
const sayName = say.bind(obj);
// const sayName = say.call(obj);
// sayName();

// more details call
function showDetails(city, country) {
    console.log(`Name: ${this.name}, Age: ${this.age},
            City: ${city}, Country: ${country}`);
}

const user1 = {name: "Jakariya", age: 26}
const user2 = {name: "Aman", age: 30}
// call()
showDetails.call(user1, 'Dhaka', 'Bangladesh');
showDetails.call(user2, 'Sylhet', 'Bangladesh');
// apply()
showDetails.apply(user1, ['Sylhet', 'Dubai']);
// bind()
const user1Details = showDetails.bind(user1, 'AbuDabi', 'Dubai');

// user1Details();
const user2Details = showDetails.bind();
user2Details('Katmandu', 'Nepal');



