/**
 * Encapsulation
 */

class BankAccount {
    #balance = 0;
    
    deposit(amount) {
        this.#balance += amount;
        // console.log('Your Balance:', this.#balance);
    }


    getBalance() {
        return this.#balance;
    }


}


// Account instantiation
const amount = 12200;
const acc = new BankAccount();
acc.deposit(amount);
console.log(`Your Balance is: ${acc.getBalance()}`);







