/**
 * Asynchronous JS (callback, promise, await/async)
 * @function {callback()} - a function passed as an argument in another function
 * @function {promisse()} - represents a value that may be avaiable now, future or never
 * @function {async/await()} - Syntatic sugar over promises
 *    
 */

// callback function
function fetchUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;

            if (success) {
                resolve({name: "Jakariya Ahmed", age: 25});
            } else {
                reject("Failed to fetch data");
            }

        }, 1000);
    });
}

// fetch data 
fetchUser()
.then(user => {
    // console.log(`Name: ${user.name}, Age: ${user.age}`);
})
.catch(error => {
    console.error('Error', Error);
})


// Helper function for limit word
function limitWords(text, wordLimit) {
    const words = text.split(" ");

    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "....";
}

// Real project use case
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => {
        const tableBody = document.querySelector('#postTable tbody');
        posts.forEach(post => {
            const row = document.createElement("tr");
            const idCell = document.createElement('td');
            idCell.textContent = post.id;

            const titleCell = document.createElement('td');
            titleCell.textContent = post.title;

            const bodyCell = document.createElement('td');
            bodyCell.textContent = limitWords(post.body, 12);

            row.appendChild(idCell);
            row.appendChild(titleCell);
            row.appendChild(bodyCell);
            tableBody.appendChild(row);

        });
    })
    .catch(err => console.error("Fetch Error", err))



// Fetch data from api with pagination 
const POSTS_PER_PAGE = 10;
let currentPage = 1;
let allPosts = [];

// fetch data form api
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(posts => {
    if (!Array.isArray(posts)) {
        throw new Error('Expected an arry of posts');
    }
    console.log(posts); // See what is fetched (array data)
    console.log(typeof posts); // Should be 'object'
    console.log(Array.isArray(posts)); // Should be true
    allPosts = posts;
    updatePagination();
})
.catch(err => {
    console.error('Data can not Fetch!', err);
})


// Reference table, preview buttton, next button and page indicator elements
const tableBody = document.querySelector('#table-post tbody')
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const pageIndicator = document.getElementById('page-indicator');


function renderTable(posts){
    tableBody.innerHTML = ''; // clear previous row

    posts.forEach(post => {
        const row = document.createElement('tr');
        const idCell = document.createElement('td');
        idCell.textContent = post.id;
        const titleCell = document.createElement('td');
        titleCell.textContent = post.title;
        const bodyCell = document.createElement('td');
        bodyCell.textContent = limitWords(post.body, 12);
        // append cells and table body
        row.appendChild(idCell);
        row.appendChild(titleCell);
        row.appendChild(bodyCell);
        tableBody.appendChild(row);

    });
}

// pagination udpate
function updatePagination() {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    const end = start + POSTS_PER_PAGE;
    const paginatedPosts = allPosts.slice(start, end);

    renderTable(paginatedPosts);
    pageIndicator.textContent = `Page ${currentPage}`;

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = end >= allPosts.length

}

//check pagination updated or  not
function isUpdated() {
    try {
            updatePagination();
        } catch (err) {
            console.log('update Pagination error:', err);
        }
}

// click evend for preview button
prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        isUpdated();
    }
});

// click event for next page pagiantion
nextBtn.addEventListener('click', () => {
    if ((currentPage * POSTS_PER_PAGE) < allPosts.length) {
        currentPage++;
        isUpdated();
    }
});


/**
 * @function {async/await} 
 * 
 */
const dataView = document.getElementById('view-data');
async function showUser() {
    try {
        const user = await fetchUser();
    dataView.textContent = user;
    } catch (error) {
        console.error("Error:", error);
    }
}

/// Fetch data by api
async function fetchPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const post = await response.json();
        // alert(post);
    } catch (err) {
        console.log("API Error:", err);
    }
}

// fetchPost();

// dashboard summary taks
async function showUserDashboard() {
    try {
        const user = await getUser();
        const profile = await getProfile(user.id);
        const posts = await getPosts(profile.id);
        // console.log("Posts:", posts);
    } catch (err) {
        alert.error("Somethign went wrong", err);
    }
}
// Multiple Async Tasks in Parallel
async function loadDashborad() {
    const[user, posts] = await Promise.all([
        getUser(),
        getPosts(),
    ]);
    // console.log(user, posts);
}





