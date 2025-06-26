/**
 * JavaScript Design Pattern
 * 1. Factory Pattern (Creational)
 * 2. Singleton Pattern (Creational)
 * 3. Observer Pattern (Behavioral)
 * 4. Module Pattern (Structural)
 * 5. Strategy Pattern (Behavioral)
 * 6. Command Pattern (Behavioral)
 * 7. Composite Pattern (Structural)
 * 8. Decorator Pattern (Structural)
 * 9. Chain of Responsibility Pattern (Behavioral)
 * 10. Proxy Pattern (Structural)
 * 
 * 
 */


/**
 * 
 * @param {string} name - user name 
 * @param {string} role - user role 
 * @returns {string} - return result
 * Use Case of Factory Pattern
 * 1. Create multiple types of users(Admin, editor, guest)
 * 2. Object creation in form libaries
 * 3. React component factories
 * 
 */
function  UserFactory(name, role) {
    return {
        name,
        role,
        sayHi() {
            console.log();
        }
    }
}


/**
 * Singleton Pattern and Use Case
 * 1. Auth or blobal state in apps
 * 2. Redux store instance
 * 3. DB connection in Node.js app
 */

const AppState = (function() {
    let instance;
    function create() {
        return {user: null, theme: 'dark'}
    }

    return {
        getInstance: function() {
            if(!instance) instance = create();
            return instance;
        }
    }
})(); 

/**
 * Observer Pattern and Use Case
 * 1. Event handling in JS (DOm)
 * 2. pub/sub model in Node.js
 * 3. RxJS/React state updates
 */

class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.puth(fn)
    }

    notify(data) {
        this.observers.forEach(fn => fn(data))
    }
}

/**
 * Module Pattern and Use Case
 * 1. private method and variables
 * 2. Utility libraries
 * 3. Reusable components in Reacs/JS
 *  
*/

const Counter = (function () {
    let counter = 0;
    return {
        increment() {
            counter++;
            console.log(count);
        },
        reset() {
            counter = 0;
        }
    };
})();

/**
 * Strategy Pattern
 * 1. Switching payment gateways 
 * 2. Sorthing algorithms
 * 3. Dynamic filtering 
 */
class PaymentProcessor {
    constructor(strategy) {
        this.strategy = strategy;
    }
    pay(amount) {
        this.strategy(amount);
    } 

}

const creaditCard = amt => console.log('Creadit Card');
const paypal = amt => console.log('Paypal Payment Method')

const process = new PaymentProcessor(paypal);
process.pay(2000);


/**
 * Command Pattern
 *  1. Undo/Fedo buttons
 *  2. Keyboard shorcuts
 *  3. Git-style command logs 
 */

class Comman {
    constructor(execute, undo){
        this.execute= execute;
        this.undo = undo;
    } 
}


/**
 * Composit Pattern
 * 
 */

class File {
    constructor(name) {
        this.name = name;
    }

    display() {
        console.log('File' + this.name);
    }


}


class Folder {
    constructor(name) {
         this.name = name;
         this.chidren = [];
    }

    add(child){
         this.children.push(child)
    }
    
    display() {
        console.log("Folder" +this.name);
        this.chidren.forEach(child => child.display());
    } 
}

const root = new Folder("Root");
const file1 = new File('Resume.docx');
const folder1 = new Folder('Photos');
const file2 = new File('pic1.jpg');

root.add(file1);
root.add(file2);
root.add(folder1)
root.display();






