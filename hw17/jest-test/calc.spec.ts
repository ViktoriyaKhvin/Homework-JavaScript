import { expect } from "chai";
 import { Calculator } from "../src/calculator";
 const calc = new Calculator();

 describe("Jest Calculator Test", () => {
   test("Correctly finds the sum of two numbers", () => {
     expect(calc.addition(1, 3)).to.equal(4);
   });
   test("Correctly finds the difference of two numbers", () => {
     expect(calc.subtraction(33, 3)).to.equal(30);
   });
   test("Correctly finds the product of two numbers", () => {
     expect(calc.multiplication(12, 12)).to.equal(144);
   });
   test("Correctly finds the quotient of two numbers", () => {
     expect(calc.division(10, 2)).to.equal(5);
   });
   test("Correctly finds the sum of two numbers", () => {
     expect(calc.addition(-1, -1)).to.equal(-2);
   });
   test("Correctly finds the difference of two numbers", () => {
     expect(calc.subtraction(-5, 0)).to.equal(-5);
   });
   test("Correctly finds the product of two numbers", () => {
     expect(calc.multiplication(-10, 10)).to.equal(-100);
   });
   test("Correctly finds the quotient of two numbers", () => {
     expect(calc.division(99, -9)).to.equal(-11);
   });
 });