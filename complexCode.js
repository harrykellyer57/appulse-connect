// filename: complexCode.js

// This code demonstrates a complex and sophisticated implementation of a banking system.

// Define classes for Bank, Customer, and Account
class Bank {
  constructor(name) {
    this.name = name;
    this.customers = [];
  }

  addCustomer(customer) {
    this.customers.push(customer);
  }
}

class Customer {
  constructor(name, age, address, phoneNumber) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.accounts = [];
  }

  openAccount(account) {
    this.accounts.push(account);
  }
}

class Account {
  constructor(accountNumber, customer) {
    this.accountNumber = accountNumber;
    this.customer = customer;
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.push({ type: 'Deposit', amount: amount });
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.transactions.push({ type: 'Withdrawal', amount: amount });
    } else {
      console.log('Insufficient funds');
    }
  }

  getStatement() {
    let statement = `Account Statement for ${this.customer.name}\nAccount Number: ${this.accountNumber}\n\n`;
    statement += 'Transactions:\n';
    this.transactions.forEach((transaction, index) => {
      const date = new Date().toLocaleDateString();
      statement += `${index + 1}. ${date} - ${transaction.type} $${transaction.amount}\n`;
    });

    statement += `\nCurrent Balance: $${this.balance}`;

    return statement;
  }
}

// Create a bank instance
const bank = new Bank('MyBank');

// Create customers
const customer1 = new Customer('John Doe', 30, '123 Main St', '+1 123-456-7890');
const customer2 = new Customer('Jane Smith', 25, '456 Elm St', '+1 987-654-3210');

// Create accounts for customers
const account1 = new Account('ACC001', customer1);
const account2 = new Account('ACC002', customer2);

// Open accounts for customers
customer1.openAccount(account1);
customer2.openAccount(account2);

// Perform transactions
account1.deposit(1000);
account1.withdraw(500);
account2.deposit(2000);
account2.withdraw(1000);

// Add customers to bank
bank.addCustomer(customer1);
bank.addCustomer(customer2);

// Print account statements
console.log(account1.getStatement());
console.log(account2.getStatement());

// Output:
// Account Statement for John Doe
// Account Number: ACC001
// 
// Transactions:
// 1. (current date) - Deposit $1000
// 2. (current date) - Withdrawal $500
// 
// Current Balance: $500
//
// Account Statement for Jane Smith
// Account Number: ACC002
// 
// Transactions:
// 1. (current date) - Deposit $2000
// 2. (current date) - Withdrawal $1000
// 
// Current Balance: $1000