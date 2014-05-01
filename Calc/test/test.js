var expect = require("chai").expect;
var math = require("../public/javascripts/math.js");

describe("math", function(){
	describe("#add()",function() {
		it("should add two numbers", function() {
			var result = math.add(3,12);
			expect(result).to.equal(15);
		});
	});
	describe("#subtract()",function() {
		it("should subtract two numbers", function() {
			var result = math.subtract(10,7);
			expect(result).to.equal(3);
		});
	});
	describe("#multiply()",function() {
		it("should multiply two numbers", function() {
			var result = math.multiply(10,10);
			expect(result).to.equal(100);
		});
	});
	describe("#divide()",function() {
		it("should divide two numbers", function() {
			var result = math.divide(2,4);
			expect(result).to.equal(0.5);
		});
	});
});
