import { calculator } from "./calculator";

 export function customChecker (firstNumber: number, secondNumber: number, operator:'+' | '-' | '*' | '/' , result: number) {
  if (calculator (firstNumber, secondNumber, operator ) === result) {
 console.log ('Test passed');
  } else {
 console.log ('Test failed');
  }
  }