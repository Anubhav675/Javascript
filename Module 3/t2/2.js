"use strict";
const a = document.querySelector('ul' )
const b = ['First', 'Second', 'Third']
let i = 0
for (let i =0; i<3; i++){
    // const c = b[i]
    let d = document.createElement('li')
    d.innerText = b[i] + ' item'
    a.appendChild(d)
    // console.log(b[i])

}
// const k = document.querySelectorAll('ul li')
// console.log(k[1].textContent)
// k[1].className = 'my-item'
a.children[1].className = 'my-item'


