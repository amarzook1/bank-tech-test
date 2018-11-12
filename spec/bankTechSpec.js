'use strict';

describe('BankTech', function () {

  var bank;

  beforeEach(function () {
    bank = new BankTech();
  });

  it('starts wih a balance of 0', function () {
    expect(bank.balance).toEqual(0);
  });

  it('it gets current balance', function () {
    expect(bank.getCurrentBalance()).toEqual(0);
  });

  it('deposit money to bank', function () {
    bank.deposit(200)
    expect(bank.getCurrentBalance()).toEqual(200);
  });

  it('withdraw money from the bank', function () {
    bank.deposit(200)
    bank.withdraw(100)
    expect(bank.getCurrentBalance()).toEqual(100);
  });

});
