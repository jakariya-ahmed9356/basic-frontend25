// JS Scopes
function outer() {
    let name = "Adam Smith";
    function inner() {
        console.log("Hello " + name);
    }

    return inner;

}

// const greet = outer();


// Simulate private variables
function counter() {
    let count = 0;

    return {
        increment: function () {
            count++;
            console.log(count);
        },
        decrement: function() {
            count--;
            console.log(count);
        },
    };
}

const myCounter = counter();
myCounter.increment();
myCounter.increment();
myCounter.decrement();
// console.log(greet());

// auto save closer function
function autoSave(interval) {
    let timer;
    return function startSaving() {
        if (!timer) {
            timer = setInterval(() => {
                console.log('Saving draft');
            }, interval);
        }
    }
}

const startDraftSave = autoSave(300);
startDraftSave(); // start saving every 3 seconds