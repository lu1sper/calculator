let isNextOperator = false;
let isDotUsed = false;
let previousDotUsed = false;
let expression;
let tokens;
let operatorArray = ['%', '/', '+', '-', '*'];
let operator;

function splitExpression(expression) {
    let pattern = /(\d+(\.\d+)?|[+\-*\/%])/g;
    let splittedExpressionArray = expression.match(pattern);
    return splittedExpressionArray;
}


  

function calculateExpression(tokens) {
    const operators = ['*', '/', '+', '-', '%'];
    const operatorStack = [];
    const valueStack = [];
  
    const precedence = {
      '*': 2,
      '/': 2,
      '+': 1,
      '-': 1,
      '%': 2
    };
  
    tokens.forEach(token => {
      if (!operators.includes(token)) {
        valueStack.push(parseFloat(token));
      } else {
        while (
          operatorStack.length > 0 &&
          precedence[operatorStack[operatorStack.length - 1]] >= precedence[token]
        ) {
          const operator = operatorStack.pop();
          const operand2 = valueStack.pop();
          const operand1 = valueStack.pop();
          if (operator === '+') {
            valueStack.push(operand1 + operand2);
          } else if (operator === '-') {
            valueStack.push(operand1 - operand2);
          } else if (operator === '*') {
            valueStack.push(operand1 * operand2);
          } else if (operator === '/') {
            valueStack.push(operand1 / operand2);
          } else if (operator === '%') {
            valueStack.push(operand1 % operand2);
          }
        }
        operatorStack.push(token);
      }
    });
  
    while (operatorStack.length > 0) {
      const operator = operatorStack.pop();
      const operand2 = valueStack.pop();
      const operand1 = valueStack.pop();
      if (operator === '+') {
        valueStack.push((operand1 + operand2).toFixed(1));
      } else if (operator === '-') {
        valueStack.push((operand1 - operand2).toFixed(1));
      } else if (operator === '*') {
        valueStack.push((operand1 * operand2).toFixed(1));
      } else if (operator === '/') {
        valueStack.push((operand1 / operand2).toFixed(1));
      } else if (operator === '%') {
        valueStack.push((operand1 % operand2).toFixed(1));
      }
    }
  
    return valueStack[0];
  }
  

  

function handleClick(e){
    const screenValue = document.querySelector('.screenValue');
    const button = e.currentTarget;
    if(screenValue.textContent.length === 16){
        if (confirm("You reached maximum char you want to restart the page?") == true) {
            location.reload();
        } else {
            alert("Please press = sign.");
        }
    }
    switch(button.id){
        case 'AC':
            screenValue.textContent = "0";
            isNextOperator = false;
            isDotUsed = false;
            break;
        case 'C':
            if(screenValue.textContent != "0"){
                console.log(screenValue.textContent.substring(screenValue.textContent.length - 1));
                for (let i = 0; i < screenValue.textContent.length; i++) {
                    if (screenValue.textContent.substring(screenValue.textContent.length - 1).indexOf(operatorArray[i]) !== -1) {
                        for(let j = 0; j < screenValue.textContent.length; j++){
                            if(".".indexOf(screenValue.textContent[j] !== -1)){
                                isDotUsed = true;
                            }else{
                                isDotUsed = false;
                            }
                        }

                        break; // Karakter bulunduğunda döngüyü sonlandırabiliriz.
                    }
                }
                isNextOperator = false;
                screenValue.textContent = screenValue.textContent.slice(0, -1);
            }
            break;
        case '%':
            if(!isNextOperator){
                operator = "%";
                screenValue.textContent += operator;
                isNextOperator = true;
                isDotUsed = false;
            }else if(isNextOperator){
                operator = "%";
                isDotUsed = false;
                screenValue.textContent = screenValue.textContent.slice(0, -1);
                screenValue.textContent += operator;
                
            }  
            break;
        case '/':
            if(!isNextOperator){
                operator = "/";
                screenValue.textContent += operator;
                isNextOperator = true;
                isDotUsed = false;
            }else if(isNextOperator){
                operator = "/";
                screenValue.textContent = screenValue.textContent.slice(0, -1);
                isDotUsed = false;
                screenValue.textContent += operator;
                
            }
            break;
        case '7':
            if (screenValue.textContent == "0"){
                screenValue.textContent = "7";
                
            }else{
                screenValue.textContent += "7";
                isNextOperator = false;
            }
            break;
        case '8':
            if (screenValue.textContent == "0"){
                screenValue.textContent = "8";
            }else{
                screenValue.textContent += "8";
                isNextOperator = false;
            }
            break;
        case '9':
            if (screenValue.textContent == "0"){
                screenValue.textContent = "9";
            }else{
                screenValue.textContent += "9";
                isNextOperator = false;
            }
            break;
               
        case '+':
            if(!isNextOperator){
                operator = "+";
                screenValue.textContent += operator;
                isNextOperator = true;
                isDotUsed = false;
            }else if(isNextOperator){
                operator = "+";
                screenValue.textContent = screenValue.textContent.slice(0, -1);
                screenValue.textContent += operator;
                isDotUsed = false;
                
            }
            break;       
        case '4':
            if (screenValue.textContent == "0"){
                screenValue.textContent = "4";
            }else{
                screenValue.textContent += "4";
                isNextOperator = false;
            }
            break;
            
        case '5':
            if (screenValue.textContent == "0"){
                screenValue.textContent = "5";
            }else{
                screenValue.textContent += "5";
                isNextOperator = false;
            }
            break;
        case '6':
            if (screenValue.textContent == "0"){
                screenValue.textContent = "6";
            }else{
                screenValue.textContent += "6";
                isNextOperator = false;
            }
            break;
               
        case '-':
            if(!isNextOperator){
                operator = "-";
                screenValue.textContent += operator;
                isNextOperator = true;
                isDotUsed = false;
            }else if(isNextOperator){
                operator = "-";
                screenValue.textContent = screenValue.textContent.slice(0, -1);
                screenValue.textContent += operator;
                isDotUsed = false;
                
            }
            break;    
        case '1':
            if (screenValue.textContent == "0"){
                screenValue.textContent = "1";
            }else{
                screenValue.textContent += "1";
                isNextOperator = false;
            }
            break;
            
        case '2':
            if (screenValue.textContent == "0"){
                screenValue.textContent = "2";
            }else{
                screenValue.textContent += "2";
                isNextOperator = false;
            }
            break;
            
        case '3':
            if (screenValue.textContent == "0"){
                screenValue.textContent = "3";
            }else{
                screenValue.textContent += "3";
                isNextOperator = false;
            }
            break;
             
        case 'X':
            if(!isNextOperator){
                operator = "*";
                screenValue.textContent += operator;
                isNextOperator = true;
                isDotUsed = false;
            }else if(isNextOperator){
                operator = "*";
                screenValue.textContent = screenValue.textContent.slice(0, -1);
                screenValue.textContent += operator;
                isDotUsed = false;
                
            }
            break;
        case '0':
            if (screenValue.textContent == "0"){
                screenValue.textContent = "0";
            }else{
                screenValue.textContent += "0";
                isNextOperator = false;
            }
            break;
        case '.':
            if(!isDotUsed){
                screenValue.textContent += ".";  
            }
            alert("yy");
            isNextOperator = false;
            isDotUsed = true;
            previousDotUsed = isDotUsed;
            break;    
        case 'bigger-button':
            expression = splitExpression(screenValue.textContent);
            let result = calculateExpression(expression);
            if (isNaN(result)){
                result = "ERROR";
            }
            screenValue.textContent = result;
            break;    
    }
    
}




const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', handleClick);
});
