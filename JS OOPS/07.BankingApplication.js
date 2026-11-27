// Q7. Banking Application

class BankAccount {
    #balance;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be greater than zero.");
        }

        this.#balance += amount;
        console.log("Deposit successful.");
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be greater than zero.");
        }

        if (amount > this.#balance) {
            throw new Error("Insufficient balance.");
        }

        this.#balance -= amount;
        console.log("Withdrawal successful.");
    }

    getBalance() {
        return this.#balance;
    }
}

let account = new BankAccount(1000);

account.deposit(500);
console.log("Current balance: Rs.", account.getBalance());

try {
    account.withdraw(300);
    console.log("Current balance: Rs.", account.getBalance());

    account.withdraw(2000);
} catch (error) {
    console.log("Transaction error:", error.message);
}

console.log("Final balance: Rs.", account.getBalance());

// #balance is private and can only be accessed inside the BankAccount class.
