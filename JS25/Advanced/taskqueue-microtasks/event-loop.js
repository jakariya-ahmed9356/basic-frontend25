/**
 * Event loop 
 * what is event loop?
 * JavaScript is single-threaded: it can only do one thing at a time.
 * The Event Loop is the mechanism that:

    * Executes code

    * Handles events

    * Processes asynchronous tasks (setTimeout, Promises, fetch, etc.)
* 
*/


/** 2
 * Call stack vs Web APIs
 * Where your sync code runs (console.log, math, functions, etc.)
 * 
 * Web APIs:
 * Handles async tasks: setTimeout, fetch, DOM Events
 * 
 */


/**
 * 3. Task Queue
 * setTimout(), setInterval(), fetch(), DOM Events
 *  
 */


/**
 * 4. Microtask Queue
 * Promise.then(), .catch(), .finally()
 * queueMicrotask
 * MutationObserver
 *  
 */


/**
 * Execution Order
 */


/**
 * This is synchronous code.
 * Runs immediatly, goes to the call stack
 */
// console.log('A');


/**
 * {setTimeout()} - How it works
 * After 0 milliseconds run this code.
 * but thid doesn't go to the Call stack immediately
 * It goes to the Web API → Task Queue(Micro-task-Queue)
 * It watis there until:
 * Call Stack is empty
 * and All Microtasks are done
 */
setTimeout(() => {
    // console.log('B (setTimeout)');
}, 0);


/**
 * {Promise.resolve().then()} -> How it works
 * A Promise is a microtask
 * The .then() callback is queued in the Microtask Queue
 * It waits for the Call Stack to be empty.
 * But microtasks have higher priority than setTimout().
 * 
 */
Promise.resolve().then(() => {
    // console.log('C (Promise)');
});

/**
 * Synchronous, runs immediately
 */
// console.log('D')


/**
 * Professional API call for UI Update
 * 
 */

// fetch('https://jsonplacehoder.typeicode.com/posts')
//     .then(res => res.json())
//     .then(data => console.log(data));

/**
 * fetch().then(res => res.json()) 
 *  VS
 * Promise.resolved.then(() => {})
 */

Promise.resolve().then(() => {
    // console.log('Promise.resolve() creates a resolve promise');
    // console.log('then(() => {...} no parameter is expected)');
});

/**
 * () => {...} // This function with No parameters
 * res => {...} // One parameter
 * (emai, id) => {..} // Multiple parameters
 */

/**
 * function vs method
 * .then() -> is a method
 * () => {..} is a arrow function or anonymous function
 */
 
/**
 * .then(() => { ... })// Just run code after Promise resolved no value nedded
 * .then(res => res.json())// Convert fetch resonse to JSON (return another Promise)
 * .then(data => { ... })// Use the final resolved value for displying
 */

const promise = Promise.resolve("Jakariya Aman");

promise.then(() => {
    console.log('This is function inside .then()');
});
