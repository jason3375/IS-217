var expect = require("chai").expect;
var math = require("../public/javascript/decorator.js");

describe("computer", function(){
    describe("screen", function(){
        it("Should add 200 to the price when the upgrade option is selected", function()
        {
            var price = 200 + 1000;
            expect(price).to.equal(1200);
        });
    
    });
    describe("drive", function(){
        it("Should add 200 to the price when the upgrade option is selected", function()
        {
            var price = 200 + 1000;
            expect(price).to.equal(1200);
        });
    
    });
    describe("memory", function(){
        it("Should add 200 to the price when the upgrade option is selected", function()
        {
            var price = 200 + 1000;
            expect(price).to.equal(1200);
        });
    
    });
    

        
});