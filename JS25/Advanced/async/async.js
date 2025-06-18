/**
 * Asynchronous JS (callback, promise, await/async)
 * @function {callback()} - a function passed as an argument in another function
 * @function {promisse()} - represents a value that may be avaiable now, future or never
 * @function {async/await()} - Syntatic sugar over promises
 *    
 */

// callback function
function fetchUserData(callback) {
    setTimeout(() => {
        const student = {name: "Alex Royce", department: 'Computer'};
        callback(student);
    }, 1000);
}

// fetch data
fetchUserData(function(student) {
    // console.log(`Name: ${student.name}, Department: ${student.department}`);
});
// OR 

fetchUserData((student) => {
    // console.log(`Name: ${student.name}, Department: ${student.department}`);
});
