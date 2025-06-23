/**
 * Debouncing
 * Debounce ensures that a function runs only after 
 * a certain delay of inactivity
 */

// Basic example for seach box
// const searchInput = document.getElementById('search');
// const ouput = document.getElementById('output');
// searchInput.addEventListener('input', debounce(function(e) {
//     ouput.textContent = this.value;
// }, 500));

/** 
function delayBounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer); // clear previous timer
        timer = setTimeout(() => {
            func.apply(this,args);
        }, delay);
    }
}



searchInput.addEventListener('input', delayBounce(function(e){
    ouput.textContent = e.target.value;
}, 500));

*/

//  call(), bind() build in functions
/**
 * @function {appy()} - Call a function with a specific "this"
 * @function {call()} - Same as call, but uses an arry of args
 * @function {bind()} - Return a new function with "this" bound 
 * 
 */


const person = {name: "Jakariya Aman"};
 
function greet(lang) {
    console.log(`Hi, I'm ${this.name} speaking ${lang}`);
}

greet.apply(person, ["Englsh"]);
greet.call(person, 'English');
const boundGreet = greet.bind(person, 'Bangla');
boundGreet();


/// ...args
function sumAll(...nums) {
    return nums.reduce((total, num) => total + num, 0);
}

console.log(sumAll(1,2,3,4,5));


/**
 * throttling 
 */

function throttle(func, delay){
     let lastCall = 0;
     return function(...args){
        const now = Date.now();
        if (now - lastCall >=delay) {
            lastCall = now;
            func.apply(this, args)
        }
     }
} 


window.addEventListener('scroll', throttle(function(){
    console.log("Scroll positionY:", window.scrollY);
}, 200));