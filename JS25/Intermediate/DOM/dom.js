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
 * Displays an error message for a specific input field
 * 
 * @param
 */
// Feference to the main user registration form
const regiForm = document.getElementById('registerForm');
// Selected DOM element where the success message will be displayed
const successMsg = document.getElementById('success_msg');
// Get input element for username, email, and mobile fields
const userNameInput = document.getElementById('user_name');
const emailInput = document.getElementById('user_email');
const mobileInput = document.getElementById('user_mobile');


/***
 * Displays an error message for a specific input field by id
 * 
 * @param {string} id - The ID of the element to display the error message
 * @param {string} msg - The error message to show
 * 
 */

function showError(id, msg) {
    const errorElem = document.getElementById(id);
    errorElem.textContent = msg;
    errorElem.style.color = 'red';
}

/***
 * Clear the error message from the element with the given ID
 * @param {string} id - The ID of the element to clear the error message
 */

function clearError(id) {
    document.getElementById(id).textContent = '';
}

/**
 * Handle form submission for user registration
 * - Prevents default form submission behavior to alllow custom validaton
 * - Retrieves trimmed input values from username, email, and mobile fields
 * - Validates each field with appropriate rules:
 *  • Username: Required, non-empty
 *  • Email: Must match a valid email regex pattern
 *  • Mobile: Must be 11 numbers not more than/ not less than
 * - Display inline error messages for invlaid fields using showError()
 * - Clears error messages when fields are valid using clearError()
 * - If all validation pass (isValid remains true), displays a success message.
 * 
 * This ensures robust client-side validation and user feeback berfor sumitting 
 */

regiForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // Get form input data 
    const userName = userNameInput.value.trim();
    const email = emailInput.value.trim();
    const mobile = mobileInput.value.trim();

    let isValid = true;

    //name validation 
    if (userName === '') {
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
        successMsg.textContent = 'Information successfully sumitted.';
        successMsg.style.color = 'green';
    }

});


/***
 * input event for live validation
 * Display an error message for a specific input field.
 * 
 * @param {string} id - The ID of element where the error display.
 * @param {string} msg - The error message to show.
 * 
 */

function displayError(id, msg) {
    const errorMsg = document.getElementById(id);
    if (errorMsg) {
        errorMsg.textContent = msg;
        errorMsg.style.color = 'red';
    }
}

/**
 * Clears the error message for a specific input field 
 * 
 * @param {string} id - The ID of element whose error should be cleared 
 */

function errorClean(id) {
    document.getElementById(id).textContent = '';
}

/**
 * Validates the username input field
 * - Ensures the name is not empty
 * - Requires a minimum length of 10 characters
 * - Displays appropriate error messase or clears the error.
 */

function validateName() {
    const userName = userNameInput.value.trim();

    if (userName === '') {
        displayError('nameError', 'Name field cannot be empty.');
    } else if (userName.length < 10) {
        displayError('nameError', 'Name must be at least 10 characters.');
    } else {
       errorClean('nameError');
    }
}

/**
 * Validates the email input field
 * - Ensures the email is not empty
 * - Checks the email format using a regular expression
 * - Displays appropriate error messase or clears the error.
 */

function validateEmail() {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === '') {
        displayError('emailError', 'Name field cannot be empty.');
    } else if(!emailRegex.test(email)) {
        displayError('emailError', 'Enter a valid email address.');
    } else {
        errorClean('emailError');
    }
}


/**
 * Validates the mobile input field
 * - Ensures the mobile is not empty
 * - Allows only numeric values
 * - Enforces exactly 11 digits (typical mobile number format)
 * - Displays appropriate error messase or clears the error.
 */
function validateMobile() {
    const mobile = mobileInput.value.trim();
    // const mobileRegex = /^[0-9]{10,15}$/;
    const onlyNumbers = /^\d*$/;
    // only 12 digits
    const numberLength = mobileInput.value;

    if (mobile === '' ) {
        displayError('mobileError', 'Mobile field cannot be empty.');
    }else if(!onlyNumbers.test(mobile)) {
        displayError('mobileError', 'Enter valid mobile.');
    } else if (numberLength.length > 11 || numberLength.length < 11) {
        displayError('mobileError', 'Not allow more than 11 or less than 11.');
        mobileInput.value = numberLength.slice(0, 12);
    }   
    else {
        errorClean('mobileError');
    }

}

// Event listener for individual field only
userNameInput.addEventListener('input', validateName)
emailInput.addEventListener('input', validateEmail)
mobileInput.addEventListener('input', validateMobile)


/***
 * change event for usage case select, checkbox, radio buttons etc. 
 * 
 */

// Get seleted department value form the department <select> element 
const selectedDepartment = document.getElementById('department');
// Element to display the currently seleted department from the dropdown
const selectedOuput = document.getElementById('selected-department');

//listen for changes in the department dropdown
selectedDepartment.addEventListener('change', function () {
    const selectedVal = this.value;
    // check is selected and update the element with the selected department
    if (selectedVal) {
        selectedOuput.textContent = `You selected ${selectedVal}`;
        selectedOuput.style.color = 'green';
    } else if (this.value === '') {
        selectedOuput.textContent = 'Please select a department';
        selectedOuput.style.color = 'red';
    } else {
        selectedOuput.textContent = ''; // Clear output if no valid selection 
    }


});

/***
 * Change event for agree checkbox with disabled submit button
 * Intially button is disabled 
 */

// Select the agreement checkbox and the submit button
const agreeCheckbox = document.getElementById('agree-term');
const submitBtn = document.getElementById('submit-btn');

// Enable/Disable submit button based on checkbox state
agreeCheckbox.addEventListener('change', function (e) {
    e.preventDefault();
    // Enable the submit button if terms are agreed
    submitBtn.disabled = agreeCheckbox.checked ?  false : true ;
    // submitBtn.disabled = !agreeCheckbox.checked;    

});

/***
 * Change event for payment methods selection
 * 
 */

// Select payment method form multiple payment gateways 
const paymentMethod = document.querySelectorAll('input[name="payment"]');
// Select DOM element where will display payment inforamtion 
const paymentInfo = document.getElementById('payment-info');

// Attach a change event listener to each radio button
paymentMethod.forEach(payment => {
    payment.addEventListener('change', () => {  
        /*
        // Update payment information based on the selected payment method
        if (payment.value === 'Credit Card') {
            paymentInfo.textContent = 'Enter your card information.';
        } else if (payment.value === 'Paypal') {
            paymentInfo.textContent = 'You will redirected to PayPal.';
        } else {
            paymentInfo.textContent = 'Enter your Bkash information';
        }
        */
        // Update payment informtion base on the selected payment payement method by swith
        switch(payment.value) {
            case 'Credit Card':
             paymentInfo.textContent = 'Enter your card information.';
            break;
            case 'Paypal':
            paymentInfo.textContent = 'You will redirected to PayPal.';
            break;
            default:
            paymentInfo.textContent = 'Enter your Bkash information';
        }
    });
});





/**
 * Live image uploaded preview by change event
 * 
 */

// Select uploded image for preview 
const profileImg = document.getElementById('profile-img');
// Select DOM for display preview image
const profilePreview = document.getElementById('preview-profile');

// Attach a change listener to preview profile photo
profileImg.addEventListener('change', () => {
    const file = profileImg.files[0];
    if (file) {
        profilePreview.textContent = file.name;
        profilePreview.textContent = file.size;
        profilePreview.textContent = file.type;
        profilePreview.src = URL.createObjectURL(file);
    } else {
        profilePreview.src = '';
    }
});


/**
 * focus event for change input focus
 * 
 */

// Get input element for name
const studentName = document.getElementById('student-name');
// Selected DOM for display error message
const hint = document.getElementById('hint');

// Show hint when field is focused
studentName.addEventListener('focus', () => {
    // hint.style.display = 'block';
});

// Hide hint when field is blurred (Loses focus)
studentName.addEventListener('blur', () => {
    // hint.style.display = 'none'
});

// Name validation 
studentName.addEventListener('focus', function () {
    const nameInput = studentName.value.trim();
    // alert(nameInput.length);
    if (nameInput.length < 10 || nameInput.length > 20) {
        hint.textContent = 'Name must be not more than 20 and not less than 10 characters.';
        // studentName.style.border = '2px solid red';
        hint.style.display = 'block'
        hint.style.color = 'red';
    } else {
        hint.textContent = ''
    }

});


studentName.addEventListener('blur', () => {
    hint.style.display = 'none'
});











