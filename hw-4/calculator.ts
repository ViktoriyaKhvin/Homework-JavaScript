export function calculator (firstNumber: number, secondNumber: number, operator:'+' | '-' | '*' | '/' ) {
    
    if(operator === '+'){
      return firstNumber + secondNumber; 
    }
    
     if(operator === '-'){
      return firstNumber - secondNumber; 
    }
    
    if(operator === '*'){
      return firstNumber * secondNumber; 
    }
    
     if(operator === '/'){
      return firstNumber / secondNumber; 
    }
    
  }