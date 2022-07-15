"use strict"

var allClearBtn = document.querySelector('#allClear');
var btns = document.querySelectorAll('button');

function clearAll(e) {
    console.log(e.target.innerText);
}

allClearBtn.onclick = clearAll;

btns.forEach(btn => {
    console.log(btn.innerText);
});

