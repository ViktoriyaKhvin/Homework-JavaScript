import { Calculator } from "../src/calculator";
 import assert from "assert";
 const calc = new Calculator();

 describe("Mocha Calculator Test", () => {

   it("Correctly finds the sum of two numbers", () => {
     assert.equal(calc.addition(1, 3), 4);
   });
   it("Correctly finds the difference of two numbers", () => {
     assert.equal(calc.subtraction(33, 3), 30);
   });
   it("Correctly finds the product of two numbers", () => {
     assert.equal(calc.multiplication(12, 12), 144);
   });
   it("Correctly finds the quotient of two numbers", () => {
     assert.equal(calc.division(10, 2), 5);
   });
   it("Correctly finds the sum of two numbers", () => {
     assert.equal(calc.addition(-1, -1), -2);
   });
   it("Correctly finds the difference of two numbers", () => {
     assert.equal(calc.subtraction(-5, 0), -5);
   });
   it("Correctly finds the product of two numbers", () => {
     assert.equal(calc.multiplication(-10, 10), -100);
   });
   it("Correctly finds the quotient of two numbers", () => {
     assert.equal(calc.division(99, -9), -11);
   });
 });