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

  it('should add one and four', function(){
    calculator.previousTotal = 1,
    calculator.add(4),
    assert.equal(calculator.runningTotal, 5)
  })

  it('should subtract four from seven', function(){
    calculator.previousTotal = 7,
    calculator.subtract(4),
    assert.equal(calculator.runningTotal, 3)
  })

  it('should multiply three by five', function(){
    calculator.previousTotal = 3,
    calculator.multiply(5),
    assert.equal(calculator.runningTotal, 15)
  })

  it('should divide 21 by 7', function(){
    calculator.previousTotal = 21,
    calculator.divide(7),
    assert.equal(calculator.runningTotal, 3)
  })

  it('should concatenate number button clicks', function(){
    calculator.numberClick(2),
    calculator.numberClick(6),
    assert.equal(calculator.runningTotal, 26)
  })

  it('should chain multiple operations together', function(){
    calculator.numberClick(2),
    calculator.numberClick(6),
    calculator.operatorClick('+'),
    calculator.numberClick(1),
    calculator.numberClick(0),
    calculator.operatorClick('='),
    assert.equal(calculator.runningTotal, 36)
  })

  it('should clear the running total without affecting the calculation', function(){
    calculator.numberClick(2),
    calculator.numberClick(6),
    calculator.operatorClick('+'),
    calculator.numberClick(1),
    calculator.numberClick(0),
    calculator.operatorClick('+'),
    calculator.numberClick(5),
    calculator.clearClick(),
    calculator.numberClick(3),
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 39)
  })

});
