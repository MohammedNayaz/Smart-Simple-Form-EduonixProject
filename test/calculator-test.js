var assert = require('chai').assert;
var Calculator = require('../build/calculator.js');

describe("Calculator...", function(){
    before(function(){
        this.calc = new Calculator();
    });
    after(function(){
        delete this.calc;
    })
    it("Sum should be 15", function() {
        assert.equal(this.calc.sum(5,10), 15);
    });
    it("Subtract should be 0", function() {
        assert.equal(this.calc.sub(5,5), 0);
    });
    it("Multiplication should be 25", function() {
        assert.equal(this.calc.mul(5,5), 25);
    });
    it("Division should be 2", function() {
        assert.equal(this.calc.div(10,5), 2);
    });
})