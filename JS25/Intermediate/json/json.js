/**
 * JSON parsing & Stringyfying
 * 
 */
// Syntax
// const obj = JSON.parse(jsonString);

// Convert json string to object
const jsonData = '{"name": "Jakariya","age": 25}';
const userObj = JSON.parse(jsonData);

// Convert js object into json string
const user = {name: 'Alex', age: 26};
const userJsonData = JSON.stringify(user);

// data received from an API in json format
/**
fetch('/api/user')
    .then(res => res.json)
    .then(data => console.log(data))
 */

/** stringify data
fetch('/api/save', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(user);
});
*/

// user store in localStorage
const form = document.getElementById('user-form');
const name = document.getElementById('user-name');
const email = document.getElementById('email');
const output = document.getElementById('output');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page default laod

    // Get users data from input & remove white space 
    const userName = name.value.trim();
    const userEmail = email.value.trim();

    // Create an object 
    const userData = {
        name: userName,
        email: userName
    }

    // Save to localStorate (must be string)
    localStorage.setItem('userInfo', JSON.stringify(userData));
    
    // Show ouput
    output.textContent = "Saved data";
     
});

//

