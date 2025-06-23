export const PI = 3.14159;


export function add(a, b) {
    return a + b;
}


export const userName = 'Jakariya Aman';

export function sayHi(userName) {
    return console.log(`Hello ${userName}`);
}



// export default function
export default function () {
    console.log('Default export');
}

// export function for rename in import
export function subtract(a, b) {
    return a - b;
}