var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('It should be able to add two numbers', function() {
    calculator.previousTotal = 4
    calculator.add(1)
    actual = calculator.runningTotal
    assert.equal(actual, 5);
  })

  it('It should be able to subtract one number from another', function() {
    calculator.previousTotal = 7
    calculator.subtract(4)
    actual = calculator.runningTotal
    assert.equal(actual, 3);
  })

  it('It should be able to multiply two numbers', function() {
    calculator.previousTotal = 3
    calculator.multiply(5)
    actual = calculator.runningTotal
    assert.equal(actual, 15);
  })

  it('It should be able to divide two numbers', function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    actual = calculator.runningTotal
    assert.equal(actual, 3)
  })

});

describe('Calculator Button clicks', function () {
    beforeEach(function () {
      calculator = new Calculator()
    });

    it('concatenate multiple number button clicks', function(){
      calculator.numberClick(2)
      calculator.numberClick(4)
      calculator.numberClick(6)
      actual = calculator.runningTotal
      assert.equal(actual, 246)
    })

    it('chain multiple operations together', function(){
      calculator.operatorClick('*')
      calculator.operatorClick('+')
      actual = calculator.previousOperator
      assert.equal(actual, '+')
    })

    it('clear the running total without affecting the calculation', function(){
      calculator.numberClick(5)
      calculator.operatorClick('-')
      calculator.numberClick(4)
      calculator.operatorClick('=')
      calculator.clearClick()

      clearRunning = calculator.runningTotal
      calculation = calculator.newTotal

      assert.equal(clearRunning, 0)
      assert.equal(calculation, true)
    })


});
