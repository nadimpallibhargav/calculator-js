"use strict"

const btns = document.querySelectorAll('.digitBtn');
const equalBtn = document.querySelector('#equal');
let result = "";

for(var i = 0; i < btns.length; i++) {    
    btns[i].onclick = (e) => {
        let value = e.target.innerText;
        result += value;        
        console.log(result);
    }            
}

equalBtn.onclick = (e) => {

    for(var i = 0; i < result.length; i++) {
        if(result[i] == '+' || result[i] == '-' || result[i] == '*' || result[i] == '%' || result[i] == '/') {
          var operatorIndex = i;
          var operator = result[i];
        }      
    }        

    let firstValue = +result.slice(0, operatorIndex);
    let secondValue = +result.slice(operatorIndex+1, result.length);     

    if(operator == '+') {
        console.log(firstValue + secondValue);
    } else if(operator == '-'){
        console.log(firstValue - secondValue);
    } else if(operator == '*'){
        console.log(firstValue * secondValue);
    } else if(operator == '/'){
        console.log(firstValue / secondValue);
    } else if(operator == '%'){
        console.log(firstValue % secondValue);
    } 

}