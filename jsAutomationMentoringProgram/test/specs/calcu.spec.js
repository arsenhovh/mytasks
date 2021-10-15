const Calculator = require("../../app/calculator");
const {expect} = require("chai");

describe("add is correct ", function (){
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
    it("should return number 6", function (){
        expect(calc.multiply(2,3)).to.be.equal(6);
    });
    it("should return number -1", function (){
        expect(calc.add(-5,null)).to.be.equal(5);
    });
});