/*****
 * =========================
 * DOM Mouse Events 
 * =========================
 * @param {'click'} - user click an element
 * @param {','} - double-click
 * @param {'mousedown'} - mouse button is pressed
 * @param {'mouseup'} - mouse button is released
 * @param {'mousemove'} - mouse is moved
 * @param {'mouseenter'} - mouse enters the element
 * @param {'mouseleave'} - mouse leaves the element
 * 
 */

//js click event
document.getElementById('greetBtn').addEventListener('click', function() {
    alert('Hello, Jakariya');
});


//double click
const dbClick = document.getElementById('dbClick');
    dbClick.addEventListener('dblclick', function () {
        dbClick.innerText = 'Hey! you text is changed ';
    });


const box = document.getElementById('textBox');
    box.addEventListener('dblclick', function () {
        box.contentEditable = true;
        box.focus();
    });

// mousedown event usecase drag-drop functionality, drawing on canvas
const mouseBox = document.getElementById('dragBox');
    mouseBox.addEventListener('mousedown', () => {
        mouseBox.textContent = 'User Started Pressing Mouse'
    });

/**
 * mouseup event usecase end a drag operation, 
 * release after drawing or selecting text, 
 * submit drawing on canvas
 */
mouseBox.addEventListener('mouseup', () => {
    mouseBox.textContent = 'Mouse is released after pressing down'
});

/***
 * mousemove event usecase real-time drawing(e.g, whiteboard apps)
 * track mouse location for gaming or UI animations
 * tooltip movement with cursor
 */

mouseBox.addEventListener('mousemove', (e) => {
    mouseBox.textContent = `Mouse moved at ${e.clientX}, ${e.clientY}`;
});


/***
 * mouseenter event usecase show tooltips
 * highlight or animate elements on hover
 * show contextual menu or guide
 */

const mouseEventBox = document.getElementById('mouseEnter');
mouseEventBox.addEventListener('mouseenter', () => {
    mouseEventBox.textContent = 'Mouse is entered the box';
});

/***
 * mouseleave usecase hide tooltip or dropdowns
 * remove hover effects or reset styles
 */

mouseEventBox.addEventListener('mouseleave', () => {
     mouseEventBox.textContent = 'Mouse is released from element';
});




/*****
 * =========================
 * DOM keyboard Events 
 * =========================
 * @param {'keydown'} - any key up pressed
 * @param {'keyup'} - key is released
 * @param {'keypress'} - key is pressed
 * 
 */

//keydown
let inputKey = document.getElementById('nameInput');
inputKey.addEventListener('keydown', (e) => {
    // keyOutput.textContent = e.key;
});

//keyup
inputKey.addEventListener('keyup', (e) =>{
    // keyOutput.textContent = e.key;
});

//only allows numbers 
inputKey.addEventListener('keydown', (e) => {
    if (!/\d/.test(e.key) && e.key !== 'Backspace') {
        e.preventDefault();
    }
});

//Detect keyboard save shortcut(crt+s)
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        keyOutput.textContent = e.ctrlKey + e.key; 
    }
});

//Delect keyboard all select shorcut(crt+a)
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'a') {
        e.preventDefault();
        keyOutput.textContent = 'press crt+D';
    }
});





/*****
 * =========================
 * DOM Form Events 
 * =========================
 * @param {'submit'} - Form is submitted
 * @param {'change'} - Form elements changes (e.g., dropdown)
 * @param {'input'} - On every keystroke input
 * @param {'focus'} - Element gets focus
 * @param {'blur'} - Element loses focus
 * 
 */


/***
 * submit event for registration form
 * 
 * 
 * 
 * 
 * 
 */
// Get form for submition
const regiForm = document.getElementById('registerForm');
const successMsg = document.getElementById('success_msg');

//Utility: show error
function showError(id, msg) {
    const errorElem = document.getElementById(id);
    errorElem.textContent = msg;
    errorElem.style.color = 'red';
}

//Utility: clear error
function clearError(id) {
    document.getElementById(id).textContent = '';
}

// Main Validation Logic 
regiForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // Get form input data 
    const username = document.getElementById('user_name').value.trim();
    const email = document.getElementById('user_email').value.trim();
    const mobile = document.getElementById('user_mobile').value.trim();

    let isValid = true;

    //name validation 
    if (username === '') {
        showError('nameError', 'Name is required');
        isValid = false;
    }else {
        clearError('nameError');
    }

    //Email Validation 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('emailError', 'Enter a valid email address');
        isValid = false;
    }else {
        clearError('emailError');
    }

    // Mobile Validation 
    const mobileRegex = /^[0-9]{10,15}$/;
    if (!mobileRegex.test(mobile)) {
        showError('mobileError', 'Enter a valid mobile number (10-15 digits)');
        isValid = false;
    }else {
        clearError('mobileError');
    }

    if (isValid) {
        
    }

});

