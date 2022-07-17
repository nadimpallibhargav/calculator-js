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
        if(result[i] == '+') {
          var plusPosition = i;
        }    
        let firstDigit = result.slice(0, plusPosition);
        console.log(firstDigit);    
    }            
}