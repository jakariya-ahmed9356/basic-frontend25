/**
 * Memory Management
 * 1. Memory life Cycle
 * 2. Memory Allocation Internals
 * 3. Gargabe Collection Strategies
 * 4. Advanced Examples
 * 5. Performance Optimization
 * 6. DevTools For Memory Debugging
 * 7. Memory Leaks in React 
 */


// Memory Life Cycle
let user = {name: 'Jakariya'}; //Memory Allocated
// console.log(user);  // Memory in use
user = null;  // Memory released

// Garbage Collection
let a = {};
let b = {};
a.ref = b;
b.ref = a;
// Bot a and b are still referenced - memory leak!

// Advanced Memory Leak Examples
function createCircular() {
    const obj1 = {};
    const obj2 = {};
    obj1.ref = obj2;
    obj2.ref = obj1;
}
createCircular(); // memory not released unless manually broken
