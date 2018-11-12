'use strict';

function BankTech() {
  this.balance = 0;
  this.transactions = [];
}

BankTech.prototype.getCurrentBalance = function () {
  return this.balance;
};

BankTech.prototype.deposit = function (amount) {
  this.balance += amount
  this.transactions.push('+${amount}')
};

BankTech.prototype.withdraw = function (amount) {
  this.balance -= amount
};

BankTech.prototype.getAllTransactions = function () {

};
