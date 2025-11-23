'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
const a = document.querySelector('#target')
for (let i = 0; i<3; i++){
    const b = document.createElement('option')
    b.value = students[i]['id']
    b.innerText = students[i]['name']
    console.log(b.value)
    a.appendChild(b)
}