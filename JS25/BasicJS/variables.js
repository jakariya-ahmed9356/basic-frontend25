/* 
 Identify different among var, let and const
var = Introduce in ES5(1995), Function Scoped, Reassignable, Redeclarable,
        Hoisting(initialized as undefined), Avoid in Modern Js, No Temporal Dead Zone

let = Introduced ES6(2015), Block Scoped, Reassignable, Not Redeclarable,
      Hoisting(not initialized), value changleable, Temporary Dead Zone.
    
const = Introduced ES6(2015), Block Scoped, Not Reassignable, Not Redeclarable,
        Hoisting(not initialized), Value not changeable, Temporary Dead Zone

 /********************** TDZ (Temporal Dead Zone) & Hoisting  **********************/
function example() {
        //TDZ start here
        let x; // Declaration is hoisted, but not initialized
        // TDZ ends after this line
        x = 10;
        // console.log(x);
}



 /********************** Var keword re-declared  **********************/
// no error for re-declaration but can lead to accidental bugs
// var age = 25;
// age = 30;
// var age = 35;
// console.log(age);


/********************** var key in functional scope **********************/

/* var key variable work good in functional scope */
// if(true) {
//     var price = 50;
// }
// console.log(price);

/* var key variable work good in functional scope */


/********************** var key variable in Hoisting  **********************/
// JS engine does this during compilation 
// console.log(porject);  /// value is undefined (not error)=> ReferenceError?
var porject = "Web Design & Development"; /// variable is assigned 

var project_name; // declaration is hoisted to the top
// console.log(project_name); // At this point, value is still undefined
project_name = "Web design & Development"; // Now the variable is assigned



/********************** Function Hoisting (Expression) **********************/
// Note: you can call function any where and it works fine
// console.log( summation(10, 20));
function summation(price, price2) {
        var sum = price + price2;
        // console.log(sum) /* Undefined because funtion is not called */
        return sum;
}



/********************** Var in function declaration scope **********************/
function discount(price) {
        var dis = 0.1;
        var finalPrice = price - (price * dis);
        return finalPrice;

}

// console.log(discount(100));

/* Note: It not working in function expression */
//greet(); //typeError greet is not a function
let greet = function() {
        // console.log("Hello Jek !");
}
// greet();




/********************** let keyword allow for reassign value **********************/
let number = 1;
number = 2; 

// console.log(number);

/********************** let keyword in block scopes like (if,for,{})**********************/
//var keyword in function score mean work inside of function
function varInFunction(name) {
        var user_name = name;
        if(true) {
                var mode = "Happy";
                // console.log(user_name);
        }
        /* // console.log(mode); Note: var variable is work fine in
        return user_name; */
}
        // console.log(varInFunction("Jakariya Ahmed"));
        /* console.log(user_name); ReferenceError because you called name outside of function */ 


//let keyword variable work in block scope mean work inside of block like if,for,{}
function letInFunction(email) {
        let user_email = email;

        if(true) {
                let vibe = "Good";
                // console.log(email);
                // console.log(vibe);       
        } 

        /* console.log(vibe); Note: ReferenceError variable is not found 
          because let varibale is not work outside of b
        */
        return user_email;

}

// letInFunction("Jek@gmail.com");



/********************** var, let, const keyword hoist **********************/
/* 
// var keyword
        console.log(x); //undefined
        var x = 10; 
*/

/*
//let keyword, also const keyword
console.log(x); //ReferenceError
let x = 20;
*/


/********************** const keyword variable **********************/
const pi = 3.1416;
//       pi = 3.14;
// console.log(pi); // TypeError: Assignment to constant variable
/*
Note: But objects/arrays inside const can be changed!
*/
const user = {
        name: "Abir Hussain Jakariya",
}
user.name = "Jek";

// console.log(user.name);



/********************** multi variable in one line **********************/
// let user = "Jek", age = 27; message = "Hello";
/* recommended
let use = "Jek";
let age = 25;
let message = "Hello";
*/

/* some developer also define multiple variables in this multiline style
let user = "Jakariya"
,   age = 25
,   message = 'Hello';

OR 
let user = "Jakariy",
    age = 25,
    message = "Hello";
*/


/********************** Uppercase Constants **********************/
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

let color = COLOR_BLUE;
// console.log(color);

const birthday = '26.10.200';
const age = someCode(birthday);
console.log(age);

