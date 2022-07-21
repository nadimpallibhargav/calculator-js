"use strict"

var btns = document.querySelectorAll('.digitBtn');
var equalBtn = document.querySelector('#equal');
var backspaceBtn = document.querySelector('#backspace');
var allClearBtn = document.querySelector('#allClear');
var resultDiv = document.querySelector('.result');
var historyDiv = document.querySelector('#history');
var clearHistoryBtn = document.querySelector('#clearHistory');

var resultList = document.createElement('p');
resultDiv.appendChild(resultList);

var result = "";

for(var i = 0; i < btns.length; i++) {    
    btns[i].onclick = (e) => {
        let btnValue = e.target.innerText;
        result += btnValue;                
        resultList.innerText = result;
        return false;
    }            
}

var myArray = [];

equalBtn.onclick = (e) => {        

    var tr = document.createElement('tr');
    var resultTd = document.createElement('td');        
    var buttonTd = document.createElement('td');        
    var button = document.createElement('button');  
         

    myArray.push({result : `${result} = ${eval(result)}`});

    for(let i = 0; i < myArray.length; i++) {
        localStorage.setItem("myArray", JSON.stringify(myArray));
    }

    var arrayNew = JSON.parse(localStorage.getItem("myArray"));

    for(let i = 0; i < arrayNew.length; i++) {
        var a = arrayNew[i];
        var arrayV = a.result;

        button.onclick = deleteBtn;     
        var tr = document.createElement('tr');
        historyDiv.appendChild(tr).appendChild(resultTd).insertAdjacentElement("afterend", buttonTd).appendChild(button);                     
        resultTd.innerText = arrayV;
        button.className = 'deleteBtn';
        button.innerHTML = '<i class="fas fa-times"></i>';    

        function deleteBtn(e,i) {
            myArray.splice(i,1);
            var myArrayNew = myArray;

            for(let i = 0; i < myArrayNew.length; i++) {
                localStorage.setItem("myArray", JSON.stringify(myArrayNew));
            }

            arrayNew = JSON.parse(localStorage.getItem("myArray"));

            e.target.parentNode.parentNode.parentNode.remove();
        }
    }            

    result = "";
    resultList.innerText = "";    
    return false;
}

backspaceBtn.onclick = (e) => {
    if(typeof result == 'number') {   
        if(result <= 9) {            
            result = "";
            resultList.innerText = result;
        } else {
            result = parseInt(result / 10);
            resultList.innerText = result;
        }
    } else {
        let lastDigit = result.length - 1;
        result = result.slice(0, lastDigit);
        resultList.innerText = result;
    }
    return false;
}

allClearBtn.onclick = (e) => {
    result = "";
    resultList.innerText = result;
    return false;
}

clearHistoryBtn.onclick = (e) => {
    localStorage.clear();
    historyDiv.innerHTML = "";
    return false;
}