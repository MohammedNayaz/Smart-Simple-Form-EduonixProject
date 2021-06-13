var assert = require('chai').assert;
var calc = require('./build/form.js');

describe("String manipulations", function() {
    it("String should be 'test'", function() {
        var myString = "test";
        assert.equal(myString, "test");
    });
    it("variable is string", function() {
        var myString = "test";
        assert.typeOf(myString, 'string');
    });
    it("Length is 10", function() {
        var myString = "test";
        assert.lengthOf(myString, 10);
    });
})

describe("text manipulations", function() {
    it("String should be 'test'", function() {
        var myString = "test2";
        assert.equal(myString, "test2");
    });
    it("variable is string", function() {
        var myString = "test2";
        assert.typeOf(myString, 'string');
    });
    it("Length is 26", function() {
        var myString = "test2";
        assert.lengthOf(myString, 26);
    });
})