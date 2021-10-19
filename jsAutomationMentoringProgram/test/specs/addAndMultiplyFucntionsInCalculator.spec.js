const Calculator = require("../../app/calculator");
const {expect} = require("chai");
const chai = require('chai')
const should = chai.should();

describe("trying to check add and multiply functions ", function (){
    let calc ;
    beforeEach(function (){
        calc = new Calculator();
    });
    afterEach(function (){
        calc = null ;
    });
    it("should return number 5", function (){
        expect(calc.add(2,3)).to.be.equal(5);
    });
    it("should throw error", function (){
        calc.add(-5,null).should.be.a('string');
    });
    it("should throw error", function (){
        calc.add(-5,undefined).should.be.a('string');
    });
    it("should throw error", function (){
        calc.add("7",0).should.be.a('string');
    });
    it("should throw error", function (){
        calc.add(900719900025474,8).should.be.a('string');
    });
    it("should return number 3", function (){
        expect(calc.add(0,3)).to.be.equal(3);
    });
    it("should return number -9", function (){
        expect(calc.add(-12,3)).to.be.equal(-9);
    });
    it("should return number -15", function (){
        expect(calc.add(-12,-3)).to.be.equal(-15);
    });
    it("should return number 36", function (){
        expect(calc.multiply(-12,-3)).to.be.equal(36);
    });
    it("should return number -27", function (){
        expect(calc.multiply(9,-3)).to.be.equal(-27);
    });
    it("should return number 6", function (){
        expect(calc.multiply(2,3)).to.be.equal(6);
    });
    it("should return number 0", function (){
        expect(calc.multiply(0,-63)).to.be.equal(0);
    });
    it("should throw error", function (){
        calc.multiply(-5,undefined).should.be.a('string');
    });
    it("should throw error", function (){
        calc.multiply("7",0).should.be.a('string');
    });
    it("should throw error", function (){
        calc.multiply(0).should.be.a('string');
    });
});