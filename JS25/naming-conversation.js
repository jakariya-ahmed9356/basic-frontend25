/**
 * Naming converstion styles
 * 1. kebab-case - Best practise for HTML id/clase
 * 2. camelCase - Best practise for JS variables/functions
 * 3. snake_case - Rare in web frontend
 * 4. PascalCase - Reserved for JS Classes/React Components
 * 5. UPPERCASE - Best Practise for JS Constant  
 */

//kebab-case example
const kababCase = '<input id="user-name" name="user-name" class="user-name">';

const userName = document.getElementById('user-name');

/// camelCase Example
let userEmail = 'jek@gamil.com';

function storeUser(){
    // function name always camelCase in js
}

function sendEmailConfiramtion() {
    // function name always camelCase in js
}


// PascalCase example
class StudentVerfification{
    // class name and react component always follow 
    // PascalCase
}


function InvoiceGenerator(){
    // class name and react component always follow 
    // PascalCase
}

//UPPER_CASE
const API_BASE_URL = "https://api.example.com";












