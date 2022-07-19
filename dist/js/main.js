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

var historyArray = [];

equalBtn.onclick = (e) => {        

    historyArray.push({result: eval(result)});

    var key = historyArray.key;

    // historyArray.map((index, data) => {
    //     sessionStorage.setItem(index, data.result);  
    // })

    console.log(historyArray);

    var key = resultList.innerText;
    // var value = resultList.innerText;

    sessionStorage.setItem(key, JSON.stringify(historyArray));    
    // sessionStorage.setItem(key, value);    
    save(); 

    result = "";
    resultList.innerText = "";    
    return false;
}

function save() {          

    historyDiv.innerHTML = "";  
    for(var i = 0; i < sessionStorage.length; i++) {
        var a = sessionStorage.key(i);
        var b = sessionStorage.getItem(a);

        var tr = document.createElement('tr');
        var resultTd = document.createElement('td');        
        var buttonTd = document.createElement('td');        
        var button = document.createElement('button');  
        button.onclick = deleteBtn;      

        var tr = document.createElement('tr');
        historyDiv.appendChild(tr).appendChild(resultTd).insertAdjacentElement("afterend", buttonTd).appendChild(button);                     
        resultTd.innerText = a + ' = ' + b.stringify;
        button.className = 'deleteBtn';
        button.innerHTML = '<i class="fas fa-times"></i>';

        function deleteBtn(e) {
            e.preventDefault();
            sessionStorage.removeItem(a);
            e.target.parentNode.parentNode.parentNode.style.display = "none";
        }

    }
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
    sessionStorage.clear();
    historyDiv.innerHTML = "";
    return false;
}