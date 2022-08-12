export function calculator( firstNumber: number, secondNumber: number, operator: "+" | "-" | "*" | "/"): number {
  switch (operator) {
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber - secondNumber;
    case "*":
      return firstNumber * secondNumber;
    case "/":
      return firstNumber / secondNumber;
  }
}