/* Conditional Statements 
    if, if...else, if...else if...else,swith

*/

// grading System in nested else if
// let score = prompt("Enter Score:");
let score = 80;

if(score >= 90) {
    console.log("Grade: A");
}else if (score >= 80) {
    console.log("Grade: B");
}else if (score >= 70) {
    console.log("Grade: C");
}else if (score >= 60) {
    console.log("Grade: D");
}else {
    console.log("Grade: F");
}


// Switch Statement u
switch(expression)  {
    case "value1":
    //statement
    break;
    case "value2":
    //statement
    break;
    case "value3":
    //statement
    break;
    default:
    //statement
}

/* professional use case 
 1. User role management, 2. Order status management, 3. http response status
 4. Currency Symbol Converter 5. Theme selection in UI Settings 6. 7 days
    
    use only for static value
 
*/
