'use strict';

function BankTech() {
  this.balance = 0;
}

BankTech.prototype.getCurrentBalance = function () {
  return this.balance;
};

BankTech.prototype.deposit = function (amount) {
  this.balance += amount
};

BankTech.prototype.withdraw = function (amount) {
  this.balance -= amount
};
