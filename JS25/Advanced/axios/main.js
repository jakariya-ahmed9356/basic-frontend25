
import axios from 'axios'

// Get data by axios
axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
        // console.log(res.data);
    })

// Get data by fetch
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data => { 
    // console.log(data);
}).catch(err => console.log("Error:", err))


//Post Data 
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        title: 'New Post',
        body: 'Content Goes here',
        userId: 1,
    })
})
.then(res => res.json())
// .then(data => console.log("Sent:", data))

// Post by axios
axios.post("https://jsonplaceholder.typicode.com/posts", {
    title: 'New Post',
    body: 'Content goes here',
    userId: 2,
})
// .then(res => console.log('Send:', res.data))
.catch(err => console.log("Error:", err))


// Get data by asyn with await

/** */
async function loadPosts() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        console.log('Data Fetch by ayns and await', data);
    } catch (err) {
        console.error("Error:", err);
    }
}

// loadPosts()

// Funational programin concept
function multiply(factor) {
    return function(num) {
        return num * factor;
    };
}

const result = multiply(2);
console.log(result(5));
