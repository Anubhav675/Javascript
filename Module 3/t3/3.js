'use strict';
const names = ['John', 'Paul', 'Jones'];
const a = document.querySelector("ul")

for (let i = 0; i<3; i++){
    // console.log(names[i])
    let b = document.createElement('li')
    b.innerText = names[i]
    a.appendChild(b)
    // console.log(a.children[i].textContent)
}


